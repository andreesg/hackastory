
/****************
S T O R Y W E B 
*****************/


var App = {}

App.getInitialSlide = function() {
	// Needs double check
	var hash = document.location.hash;
	
	if (hash != "" && hash.length > 1) {
		return hash[1];
	}

	return 0;
}

App.initStories = function() {
	var initialSlide = App.getInitialSlide();

	App.storiesContainer.slick({
		accessibility: false,
		touchMove: false,
		draggable: false,
		dots: false,
		infinite: true,
		speed: 0,
		slidesToShow: 1,
		initialSlide: initialSlide,
		arrows: false,
		adaptiveHeight: false,
		fade: true,
		cssEase: 'linear'
	});	

	App.stories.slick({
		accessibility: false,
		draggable: true,
		dots: false,
		infinite: true,
		speed: 0,
		slidesToShow: 1,
		arrows: false,
		adaptiveHeight: true
	});

	if (initialSlide != 0) {
		var data = app_data.getStoryById(initialSlide);
		App.updateButtons(data);
		App.updateStoryDetails(data);
	}

	imagesLoaded(document.querySelector("#main-stories"), function( instance ) {
		App.imageContainer.css('opacity', 1);
	});
}

App.changeButtonContent = function(button, question, toggle) {
	button.html(question);
	button.attr('data-toggle-id', toggle);
}

App.updateButtons = function(data) {
	var buttons = data.buttons;
	for (var i = 0; i < buttons.length; i++) {
		App.changeButtonContent($(App.actionButtons[i]), buttons[i].question, buttons[i].toggle);
	};
}

App.updateDescription = function(description) {
	App.descriptionContainer.html(description[0]);
}

App.updateTitle = function(title) {
	App.titleContainer.html(title[0]);
}

App.updateDocumentHash = function(hash) {
	document.location.hash = hash;
}

App.updateStoryDetails = function(data) {
	var title = data.title;
	var description = data.description;
	var _id = data._id;

	App.updateDescription(description);
	App.updateTitle(title);
	App.updateDocumentHash(_id);
}

App.goToStory = function(story_id) {
	// Hide buttons
	App.pathSelected.push(story_id);
	App.actionButtons.css("opacity", 0);
	App.storyDetailsContainer.css("opacity", 0);

	// Get new data
	var data = app_data.getStoryById(story_id);

	if (data != -1) {
		
		if (!App.backToggle.hasClass('active')) {
			App.backToggle.addClass('active');
		}

		setTimeout(function() {$
			App.updateButtons(data);
			App.updateStoryDetails(data);
			App.storiesContainer.slick('slickGoTo', story_id);
			App.actionButtons.css("opacity", 0.8);
			App.storyDetailsContainer.css("opacity", 1);
			if ($("body").hasClass('graph-active')) {
				$("body").removeClass('graph-active');
			}
		}, 500);
	}
}

App.mainAction = function(event) {
	var $target = $(event.currentTarget);
	var story_id = $target.attr("data-toggle-id");
	if (story_id != undefined) {
		App.goToStory(story_id);
	}
}

App.toggleGraph = function() {
	$("body").toggleClass('graph-active');
}

App.goBack = function() {
	var path = App.pathSelected;
	if (path.length > 1) {
		path.splice(-1, 1);
		if (path.length > 1) {
			var last_story = path[path.length-1];
			App.goToStory(last_story);
		}
	}
}

App.initEvents = function() {
	App.actionButtons.click(App.mainAction);
	App.graphToggle.click(App.toggleGraph);
	App.backToggle.click(App.goBack);
}

App.setProperties = function() {
	App.network = null;
	App.pathSelected = ["0"];
	App.graphContainer = $("#graph");
	App.graphToggle = $("#graph-toggle");
	App.backToggle = $("#back-toggle");
	App.imageContainer = $(".image");
	App.storyDetailsContainer = $(".story-details");
	App.fullContainer = $(".full-container");
	App.storiesContainer = $(".stories");
	App.stories = $(".story");
	App.actionButtons = $(".btn.action");
	App.descriptionContainer = $(".description h2");
	App.titleContainer = $(".title h1");
}

App.destroyGraph = function() {
	if (App.network !== null) {
        App.network.destroy();
        App.network = null;
    }
}

App.randomGenerateNodes = function() {
	var nodes = [];
	var edges = [];
	
	for (var i = 0; i < nodeCount; i++) {
		nodes.push({
	  	id: i,
	  	label: String(i)
		});
	}
	
	for (var i = 0; i < nodeCount; i++) {
		var from = i;
		var to = i;
		to = i;
		while (to == i) {
	  		to = Math.floor(Math.random() * (nodeCount));
		}
		edges.push({
	  		from: from,
	  		to: to
		});
	}
}

App.createNodes = function() {
	var nodes = [];
	var data = app_data.list_stories;

	for (var i = 0; i < data.length; i++) {
		nodes.push({id: data[i]._id, label: data[i].title[0]});
	}

	App.graphNodes = nodes;
}

App.createEdges = function() {
	var edges = []
	var data = app_data.list_stories;

	for (var i = 0; i < data.length; i++) {
		var buttons = data[i].buttons;
		for (j = 0; j < buttons.length; j++) {
			edges.push({from: data[i]._id, to: buttons[j].toggle});
		}
	}

	App.graphEdges = edges;
}

App.createConnections = function() {
	App.createNodes();
	App.createEdges();
}

App.drawGraph = function() {
	var nodes = null;
    var edges = null;
    var network = null;

	App.destroyGraph();

	App.graphNodes = [];
	App.graphEdges = [];

	App.createConnections();

	// create a network
	var clusteringOn = true;
	var container = document.getElementById('graph');
	var data = {
		nodes: App.graphNodes,
		edges: App.graphEdges
	};

	var options = {
		physics: {barnesHut:{springLength:500}}, // this is the correct way to set the length of the springs
		clustering: {
	  		enabled: clusteringOn
		},
		stabilize: false,
		nodes: {
			color: {
				background: 'white',
				border: '#832ba0',
				highlight: {
					background: '#832ba0',
					border: '#832ba0'
				}
			},
			radius: 24,
			shape: "dot",
			fontColor: "#ffffff"

		}
	};

	App.network = new vis.Network(container, data, options);

	// add event listeners
	App.network.on('click', function(params) {
		var story_id = parseInt(params.nodes[0]);
		App.goToStory(story_id);
	});
}

App.initGraph = function() {
	App.drawGraph();
}

App.init = function() {
	App.setProperties();
    App.initStories();
    App.initEvents();
    App.initGraph();
}


