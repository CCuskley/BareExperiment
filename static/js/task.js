$(document).ready(function() {
	$("#welcome").show();
	$("#acceptConsent").click(function() {
		if ($("#yesConsent").is(":checked")) {
			$("#welcome").hide();
		} else {
			//do nothing
		} 
	});
})

//var basic=io.connect("https://exper-tut.herokuapp.com/basic");
//basic.on('connect', function() {
//	console.log("Connected to basic!");
//	$("#welcome").show()
//});
