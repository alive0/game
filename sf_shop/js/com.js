$(function(){

	$('a').bind('focus',function() {
		if(this.blur){this.blur()};
	});

	$('.search_list li').click(function(){
		$(this).addClass('on').siblings('li').removeClass('on');
	});

	$('.nav_list>li').hover(function() {
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.drop_box').hide();
		$(this).find('.drop_box').show();
	}, function() {
		$(this).removeClass('on');
		$(this).find('.drop_box').hide();
	});
})