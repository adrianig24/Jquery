(function($)){
$fn.vsroll = function(){
	$window.scroll(function(){
		var = posicion = $(window).scrollTop;
		console.log(posicion);

		if(posicion >=400){
			video.css({position: "fixed", width:"280px", bottom:"10px", left:"10px"});
		}else{
			video.css({position: "relative"});
		}

	});
};
}(Jquery))