$(document).ready(function () {
	if ($(".splash").is(":visible")) {
		$(".wrapper").css({ "opacity": "0" });
	}
	$(".bg-gradient1").click(function () {
		$(".splash").slideUp("800", function () {
			$(".intro-content").hide()
			$(".wrapper").delay(100).animate({ "opacity": "1.0" }, 800);
		});
		$(".down-content").hide()
	});
});

/*
$(window).scroll(function() {
  var windTop = $(window).scrollTop();
  var splashHeight = $(".splash").height();
  
  if(windTop>(100)){
  	 $(window).off("scroll");
  	  $(".splash").slideUp("800", function() {
	     $("html, body").animate({"scrollTop":"0px"},100);
     });
     $(".wrapper").animate({"opacity":"1.0"},800);
  } 
  else {
  
  }  
});
*/

$(window).scroll(function () {
	$(window).off("scroll");
	$(".splash").slideUp("800", function () {
		$("html, body").animate({ "scrollTop": "0px" }, 100);
		$(".wrapper").delay(100).animate({ "opacity": "1.0" }, 800);
		$(".intro-content").hide()
		$(".down-content").hide()

	});
});