
$(document).ready(function(){
	setInterval(function(){
		var date = new Date();
		var h = date.getHours();
		var m = date.getMinutes();
		var s = date.getSeconds();
		var l = date.getMilliseconds();

		// date.setTime(1332403582588);
		$("#zero_min").hide();
		$("#zero_hour").hide();
		$("#zero_second").hide();
// if statement regarding modulus
	if (h == 12 || h == 0) { 
		// $("#hour").text(h % 12 + 12); 
		h = 12;

	} else {
		h = h % 12;

	}


	// if statement to add a 0 if the value of m is less than 10
	if (m < 10) {
		// if m is less than 10 it will show the zero
		$("#zero_min").show();
	} else {
		// do nothing
	}

	if (h < 10) {
		// if m is less than 10 it will show the zero
		$("#zero_hour").show();
	} else {
		// do nothing
	}


	if (s < 10) {
		// if m is less than 10 it will show the zero
		$("#zero_second").show();
	} else {
		// do nothing
	}

		// $("#hour").text(h);
		
			// if this equals 12 or 24 do something

			// else run modulus on it 

		$("#hour").text(h);
		$("#minute").text(m);

		// If minutes >10 append 0 to the front of the number
		// else do nothing
		$("#second").text(s);
		$("#milliseconds").text(l);


	}, 1000);

	// set the clock to be on 12 hour not 24
	// hint use %
	// Hours 1-12 will display correct. focus hours 13-24/25





});

