$(function() {
		/* Does your browser support geolocation? */
	if ("geolocation" in navigator) {
		console.log('caching')
	  	navigator.geolocation.getCurrentPosition(function(position) {
	  		console.log('abouttoloadweather');
	    	loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
	  	});
	} else {

		$("#jqBriskMessage").html('Im not sure, your browser sucks');
	  	//$('.js-geolocation').hide();
	}

	/* Where in the world are you? */
	$('.js-geolocation').on('click', function() {
	  	navigator.geolocation.getCurrentPosition(function(position) {
	    	loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
	  	});
	});

	//loadWeather("London", "");

	function loadWeather(location, woeid) {
	  	$.simpleWeather({
		    location: location,
		    woeid: woeid,
		    unit: 'f',
		    success: function(weather) {
		    	if (((weather.high - weather.temp) > 25) && (weather.high >= 60)) {
		      		$("#jqBriskMessage").html("Oh yes, it will.");

		    	} else {
		    		$('#jqBriskMessage').html("Not tomorrow. :(");
		    	}
			      
		    },
		    error: function(error) {
		      	$("#jqBriskMessage").html('<p>'+error+'</p>');
		    }
	  	});
	}
});