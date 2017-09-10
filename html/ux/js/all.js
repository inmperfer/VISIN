$(document).ready(function() {
	$(".tile-section>ul>li").click(function(){
		if($(this).is('[loadData]')){
			$(".default-header").removeClass("active");
			$(".project-header").addClass("active");
			$(".header-wrapper").addClass("active");
			$(".project-content").addClass("active");
			$(".project-header h1").html($(this).children("span.Details").children(".projectTitle").text());
			$(".project-header .project-desc").html($(this).children("span.Details").children(".projectBrief").text());
			$(".project-header .projectType").html($(this).children("span.moreDetails").children(".projectType").text());
			$('html,body').animate({scrollTop:0},400);
			var referenceDiv = "#"+$(this).attr("loadData");
			$(".project-content").html($(referenceDiv).html());
			$(".project-content").css("min-height",$(this).attr("loadHeight")+"px");
		}
	});
	$("#home").click(function(){
		$(".default-header").addClass("active");
		$(".project-header").removeClass("active");
		$(".header-wrapper").removeClass("active");
		$(".project-content").removeClass("active");
		$(".project-content").html("");
		$(".project-content").css("height","0px");
		$('html,body').animate({scrollTop:0},400);
		$(".project-content").removeAttr("style");
	});
	

	$(window).scroll(function(){
		var fromTop = $(this).scrollTop();
		if (fromTop > 60 && $(".project-header").hasClass("active")){
			console.log(true);
			$(".project-header").addClass("fixed");
			$(".header-wrapper").addClass("fixed");
		} else {
			$(".project-header").removeClass("fixed");
			$(".header-wrapper").removeClass("fixed");
		}
	});
	


	 $(window).on('scroll', function() {
		var id = "nothing";
		var menuHeight = $(".menu").attr('adjust-data');		
          $('.section').each(function() {
              if(($(window).scrollTop() + 380 - menuHeight) >= $(this).position().top) {
                   id = $(this).attr('id');
		  //$('.bottomMenu > ul').children('li[class="active"]').removeAttr('class');
              }
          });
		if(($(window).scrollTop() + $(window).height() - 100) >= $(".footerProduct").position().top) {
			id = "nothing";
		}
		if($(window).scrollTop() < 338){
			$('.header-project-dummy').css('display','none');
			$('.header-project').removeClass('active');
		} else {
			$('.header-project-dummy').css('display','block');
			$('.header-project').addClass('active');
		}
		if (id == "nothing"){
			$('.bottomMenu').css('display','none');
		} else {
			$('.bottomMenu').css('display','block');
		}
		$('.bottomMenu > ul').children('li').each(function() {
			if($(this).attr('data') == id){
				$(this).addClass('active');
				//changeUrlSection(id);
				//console.log($(this).attr('data'));
			} else {
				$(this).removeAttr('class');
			}
			});
      });


	$(".bottomMenu > ul > li").on('click',function(){
		var target = $(this).attr('data');
		$('html, body').animate({
		        scrollTop: $("#"+target).offset().top - 100
    		}, 500);
		//changeUrlSection(target);
	});



	$(document).ready(function() {
	$('.zoom-gallery').each(function() { // the containers for all your galleries
   	 $(this).magnificPopup({
		delegate: 'a.img-link',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});
});


  $('img').imagesLoaded()
  .always( function( instance ) {
//    console.log('all images loaded');
  })
  .done( function( instance ) {
    $(".loading-content img").attr( 'src','images/giphy-2.gif');
    $(".statusImage").html( 'All done. Cheers!');
    $(".loading-stuff").html( 'All done. Cheers!');
    $('.loading-content').delay(1000).fadeOut(500); 
    setTimeout(function(){
	    $('.header-wrapper').removeClass('initial');
	    $("body").removeClass("noscroll");
    },500);
    $('.tile-section-disable').delay(500).fadeOut(500);
    $('.loading-stuff').delay(500).fadeOut(500);
//    $('.loading-content').fadeOut(100);  
  })
  .fail( function() {
//    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';	
    $(".statusImage").html( 'Loading image ' + instance.progressedCount + ' of '+ instance['images'].length + ' images');
    $(".loading-stuff").html( 'Loading image ' + instance.progressedCount + ' of '+ instance['images'].length + ' images');
  });


});


