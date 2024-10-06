$(document).ready(function(){	
var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:205,//mandatory property for decktop
		bottomMargin:88,//mandatory property for decktop
		bodyMinHeight: 900,
		topMarginMobileDevices:0,//mandatory property for mobile devices
		bottomMarginMobileDevices:0,//mandatory property for mobile devices
		menuInit:function (classMenu, classSubMenu){
			classMenu.find(">li").each(function(){
				var conText = $(this).find('.mText').text();
				$(">a", this).append("<div class='_area'></div><div class='_overPl'></div><div class='_overLine'></div><div class='mTextOver'>"+conText+"</div>"); 
			})
		},
		buttonOver:function (item){
			$(".mText",item).stop(true).animate({top:"160px"}, 600, 'easeOutCubic');
            $(".mTextOver", item).stop(true).delay(150).animate({top:"15px"}, 500, 'easeOutCubic');
			$("._overPl", item).stop(true).animate({bottom:"0px"}, 500, 'easeOutCubic');
			$("._overLine", item).stop(true).animate({opacity:1}, 500, 'easeOutCubic');
		},
		buttonOut:function (item){
			$(".mText", item).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
			$(".mTextOver", item).stop(true).delay(20).animate({top:"-100px"}, 400, 'easeOutCubic');
			$("._overPl", item).stop(true).animate({bottom:"100px"}, 400, 'easeOutCubic');
			$("._overLine", item).stop(true).animate({opacity:0}, 500, 'easeOutCubic');
		},
		subMenuButtonOver:function (item){
			
		},
		subMenuButtonOut:function (item){
		
		},
		subMenuShow:function(subMenu){
			if(MSIE8){
				
				subMenu.css({"display":"block", "margin-top":0});
			}else{
				
				subMenu.stop(true).css({"display":"block", "margin-top":0}).animate({"opacity":"1"}, 600, "easeInOutCubic");
			}
		},
		subMenuHide:function(subMenu){
			if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				subMenu.stop(true).delay(300).animate({"opacity":"0"}, 600, "easeInOutCubic", function(){
					$(this).css({"display":"none"})
				});
			}
		},
		pageInit:function (pages){
		},
		currPageAnimate:function (page){
		
			
			page.css({top:'-1400px'}).stop(true).delay(900).animate({top:0}, 500, "easeOutExpo", function(){
					$(".main_pic").stop(true).animate({marginTop:"0px"}, 500, 'easeOutCubic');
					
				});
		},
		prevPageAnimate:function (page){

		
			$(".main_pic").stop(true).animate({marginTop:"637px"}, 500, 'easeOutCubic', function(){
					page.stop(true).animate({top:'-1400px'}, 400, "easeInExpo");
					$(".splashHolder").stop(true).animate({top:"-1000px"}, 500, 'easeOutCubic');
				});

		},
		backToSplash:function (){

			setTimeout(function() {
				$(".splashHolder").stop(true).animate({top:"240px"}, 500, 'easeOutCubic');
			},600);
		},
		pageLoadComplete:function (){
		},
	});
	
	
})
$(window).load(function(){	
	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});

	$(".image_resize").image_resize({align_img:"center", mobile_align_img:"center"});
	
	});