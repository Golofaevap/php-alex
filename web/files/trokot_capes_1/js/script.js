$(document).ready(function() {
	
	$('[name="country"]').on('change', function() {
	    var geoKey = $(this).find('option:selected').val();
	    var data = $jsonData.prices[geoKey];
	    var price = data.price;
	    var oldPrice = data.old_price;
	    var currency = data.currency;
	    $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

	    $('.price_land_s1').text(price);
	    $('.price_land_s2').text(oldPrice);
	    $('.price_land_curr').text(currency);
	});

	lastpack(2, 60, 'lastpack');
	
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* timer */

	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

});

$(window).on("load", function(){

	/* sliders */
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		autoHeight: true,
		pullDrag: false,
		nav: true,
		navText: ""
	});

});