
/****************
S T O R Y W E B 
*****************/


var App = {}

App.initStories = function() {
	App.storiesContainer.slick({
		accessibility: false,
		draggable: false,
		dots: false,
		infinite: true,
		speed: 0,
		slidesToShow: 1,
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

App.goToStory = function(story_id) {
	// Hide buttons
	App.actionButtons.fadeOut();

	// Get new data
	var data = app_data.getStoryById(story_id);

	if (data != -1) {
		setTimeout(function() {
			App.updateButtons(data);
			App.storiesContainer.slick('slickGoTo', story_id);
			App.actionButtons.fadeIn(600);
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

App.init = function() {
	App.storiesContainer = $(".stories");
	App.stories = $(".story");
	App.actionButtons = $(".btn.action");

    App.initStories();
    App.initEvents();
}


