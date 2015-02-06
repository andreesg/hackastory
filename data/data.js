
/* * * * * * * * * * * * * *
D A T A - S T R U C T U R E
* * * * * * * * * * * * * */

var app_data = {}

app_data.list_stories = [
	// Main page
	{
		_id: 0,
		title: "Nightwatch sold to hermitage in Russia",
		description: "The Nightwatch is an invaluable painting by Rembrandt currently hanging in the Rijksmuseum. But some managed to put a value on it, and solt it to the Hermitage in st. Petersburg.",
		buttons: [
			{
				question: "Why did this happen?",
				toggle: 1
			},
			{
				question: "Who bought it?",
				toggle: 2
			},
			{
				question: "What does this mean?",
				toggle: 3
			}
		]
	},
	// Who bought this?
	{
		_id: 1,
		title: "Why did this happen?",
		description: "",
		buttons: [
			{
				question: "Why did this happen?",
				toggle: 1
			},
			{
				question: "Who bought it?",
				toggle: 2
			},
			{
				question: "What does this mean?",
				toggle: 3
			}
		]
	},
	// Putin
	{
		_id: 2,
		title: "Putin",
		description: "",
		buttons: [
			{
				question: "What happened in Ukraine?",
				toggle: 0
			},
			{
				question: "What other art has putin collected?",
				toggle: 0
			},
			{
				question: "Where is the art going?",
				toggle: 0
			}
		]
	},
	// EU
	{
		_id: 3,
		title: "What does this mean?",
		description: "",
		buttons: [
			{
				question: "Why did this happen?",
				toggle: 1
			},
			{
				question: "Who bought it?",
				toggle: 2
			},
			{
				question: "What does this mean?",
				toggle: 3
			}
		]
	}
]

app_data.getStoryById = function(story_id) {
	for (var i = 0; i < app_data.list_stories.length; i++) {
		if (app_data.list_stories[i]._id == story_id) {
			return app_data.list_stories[i];
		}
	}

	return -1;
}

