requirejs.config({
	baseUrl:'js/define',
	paths:{
		jquery:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min',
		TweenMax:'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min'
	}
});
require(['jquery','main','platform','TweenMax','getdata','getsjsmodule','filldata'],function($,main,platform,tweenMax,datas,getsjsmodule,filldata){
		$(function(){
			datas();
			getsjsmodule();
			main();
			platform();
			filldata.fill();
		});
});

console.log('sjsjscossssssssssssssss');
// is ok
