function menuClick(){
	$(".dm-menu-icon").toggleClass('open');
}

function hideArrow(){
	$("#cm-arrow-down").css("opacity", "0");
	setTimeout(function(){
		$("#cm-arrow-down").css("display", "none");},2000)
}
function cmGoBack(){
	window.history.back();
}
var clicked = false;
function clicker(){
	var x=window.innerWidth;
	if ((!clicked) && (x >= 768)){
		clicked = true;
		setTimeout(function(){ clicked = false; },1010);
		if ($("#cm-click-enlarge").hasClass("col-md-6")){
			$("#cm-click-enlarge").toggleClass("col-md-6 cm-out-of-column");
			$("#cm-click-enlarge .cm-tile-text").css({"top": "30%", "transition" : "top 1s", "transform" : "translateY(0)"});
			$("#cm-click-enlarge .cm-form").css({"top": "50%", "transition" : "top 1s"});
			setTimeout(function(){
				$("#cm-click-enlarge").css({"width": "100%", "transition" : "width 1s"});},10);
			setTimeout(function(){
				$("#cm-click-enlarge .cm-form").css({"z-index" : "3"});},500);
			$('html, body').animate({
				scrollTop: $(".cm-tile-main").offset().top
			}, 1000);
		}
		else {
			$("#cm-click-enlarge").css({"width" : "50%", "transition" : "width 1s"});
			$("#cm-click-enlarge .cm-tile-text").css({"top": "50%", "transition" : "top 1s", "transform" : "translateY(-50%)"});
			$("#cm-click-enlarge .cm-form").css({"top": "100%", "transition" : "top 1s", "z-index" : "0"});
			setTimeout(function(){
				$("#cm-click-enlarge").toggleClass("col-md-6 cm-out-of-column");},1000)
		}
	}
	else if ((!clicked) && (x < 768)){
		$('html, body').animate({
				scrollTop: $("#cm-click-enlarge").offset().top
			}, 1000);
		$("#cm-click-enlarge .cm-tile-text").css({"top": "10%", "transition" : "top 1s", "transform" : "translateY(0)"});
		$("#cm-click-enlarge .cm-form").css({"top": "50%", "transition" : "top 1s"});
		setTimeout(function(){
				$("#cm-click-enlarge .cm-form").css({"z-index" : "3"});},500);
	}
}
