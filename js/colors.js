$(function(){
	var lastColor = 0;
	var $navList = $(".sitenav li");
	
	function GetActiveColor(s) {
		return (s ? $navList.index(s) : $(".sitenav .active").index()) + 1;
	}
	
	function update() {
		var id = GetActiveColor();
		$("body").removeClass("c-" + lastColor);
		$("body").addClass("c-" + id);
	}
	
	update();

});