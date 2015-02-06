
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
	App.descriptionContainer.html(description);
}

App.updateTitle = function(title) {
	App.titleContainer.html(title);
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
		setTimeout(function() {$
			App.updateButtons(data);
			App.updateStoryDetails(data);
			App.storiesContainer.slick('slickGoTo', story_id);
			App.actionButtons.css("opacity", 0.8);
			App.storyDetailsContainer.css("opacity", 1);
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

App.initEvents = function() {
	App.actionButtons.click(App.mainAction);
}

App.setProperties = function() {
	App.pathSelected = [];
	App.imageContainer = $(".image");
	App.storyDetailsContainer = $(".story-details");
	App.fullContainer = $(".full-container");
	App.storiesContainer = $(".stories");
	App.stories = $(".story");
	App.actionButtons = $(".btn.action");
	App.descriptionContainer = $(".description h2");
	App.titleContainer = $(".title h1");
}

App.init = function() {
	App.setProperties();
    App.initStories();
    App.initEvents();
}


