$(document).ready(function() {
	var topic = ['strawberry','apple','blueberry','orange','banana','pear','pineapple','peach','kiwi'];

	function renderButtons() {
		$("#button-location").empty();

		for (var i = 0; i < topic.length; i++) {
			var button = $("<button class='topicButton'>");
				button.attr("value", topic[i]);
				button.attr("class", "button-topic");
				button.text(topic[i]);

				$("#button-location").append(button);
		}
	};

	function displayGif(apiObject, buttonValue) {
		$("#gif-location").empty();
		var imgDisplay = 10;
		for (var i = 0; i < imgDisplay; i++) {
			var dataStill = apiObject.data[i].image.fixed_height_still.url;
			var = dataAnimate = apiObject.data[i].images.fixed_height.url;
			var img = $("<img src='" + dataStill + "'>");
			img.attr("alt", buttonValue);
			img.attr("data-still", dataStill);
			img.attr("data-animate", dataAnimate);
			img.attr("data-state", "still");
			img.attr("class", "gifImg");

			var para = $('<p>');
			para.text("Rating: " + apiObject.data[i].rating);
			var div = $('<div>');
			div.attr("id", "img" + (i + 1));
			div.append(img);
			div.append(para);

			$("#gif-location").append(div);
		}
	}

	renderButtons();

	$(document).on("click", ".button-topic", function(event) {
		console.log($(this).attr("value"));

		var buttonValue = $(this).attr("value");

		var api = "http://api.giphy.com/v1/gifs/search?";
		var apiKey = "nVSt9Wdq3q5e1kcsXrrmkLmR8vj5pApy";
		var query = ""

		$.get("https://api.giphy.com/v1/gifs/search?api_key=nVSt9Wdq3q5e1kcsXrrmkLmR8vj5pApy" + buttonValue + "&limit=10&offset=0&rating=R&lang=en"")
			.done(function(response) {
			console.log(response);
			displayGif(response, buttonValue);
		});
	});

		$("#input").on("click", function(event) {
			event.preventDefault();

			var foodName = $("#food-name").val();
			topic.push(foodName);

			renderButtons();
		});

	$(document).on("click", ".gifImg", function(event){

		var currentState = $(this).attr("data-state");
			if (state === "still") {
				$(this).attr("src", $(this).attr("data-animate"));

				$(this).attr("data-state", "animate");
			} else {
				$(this).attr("src", $(this).attr("data-still"));
				$(this).attr("data-state","still");
			};
		});
	}


});
