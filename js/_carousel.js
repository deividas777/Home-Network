

$(document).ready(function(){
	
	  var music = [
						"./images/sharedImages/music/join1.png",
						"./images/sharedImages/music/join2.png",
						"./images/sharedImages/music/join3.png"
	               ];
	
	  var documents = [
						"./images/sharedImages/documents/join1.png",
						"./images/sharedImages/documents/join2.png",
						"./images/sharedImages/documents/join3.png"
	                   ];   
	
	   var video = [
	                 "./images/sharedImages/join1.png",
	                 "./images/sharedImages/join2.png",
	                 "./images/sharedImages/join3.png",
	                 "./images/sharedImages/join4.png"
	                 ];
	                 
	  var carousel = function(collection){ 
	   
		$('body').prepend($('<br><hr/>',{'class':'m-y-5','style':'width:99%;'}));
		$('body').append($('<div/>',{'class':'jumbotron'}));
		//$('.jumbotron').append($('<h1/>',{'class':'display-1',text:'Tramore Stained Glass'}));
		$('.jumbotron').append($('<div/>',{'class':'carousel slide', 'data-ride':'carousel','id':'myCarousel'}));
		$('#myCarousel').append($('<ol/>',{'class':'carousel-indicators'}));
		//$('.carousel-indicators').append($('<li/>',{'data-target':'#myCarousel','data-lide-to':'0','class':'active'}));
		  for(var x in collection){	
			  if(x == 0){
			   $('.carousel-indicators').append($('<li/>',{'data-target':'#myCarousel','data-lide-to':'0','class':'active'}));
			  }
			   $('.carousel-indicators').append($('<li/>',{'data-target':'#myCarousel','data-lide-to':x}));
			   //$('.carousel-indicators').append($('<li/>',{'data-target':'#myCarousel','data-lide-to':'2'}));
			   //$('.carousel-indicators').append($('<li/>',{'data-target':'#myCarousel','data-lide-to':'3'}));
		   }
		  
		  $('#myCarousel').append($('<div/>',{'class':'carousel-inner','role':'listbox'}));
		  
		  for(var x in collection){
			  
			  if(x == 0){
				  $('.carousel-inner').append($('<div/>',{'class':'item active','id':'item-active'}));
				    $('#item-active').append($('<img/>',{'src':collection[0],'alt':collection[0],'data-toggle':'tooltip','title':'Latest Additions'}));
			  }
			  
			    $('.carousel-inner').append($('<div/>',{'class':'item','id':'item-'+x}));
			    $('#item-'+x).append($('<img/>',{'src':collection[x],'alt':collection[0],'data-toggle':'tooltip','title':'Latest Additions'}));
		  }
		  
		  /*
		   *
		    $('.carousel-inner').append($('<div/>',{'class':'item active','id':'item-active'}));
		    $('#item-active').append($('<img/>',{'src':'./images/icons/avi.png'}));
		    $('.carousel-inner').append($('<div/>',{'class':'item','id':'item-1'}));
		    $('#item-1').append($('<img/>',{'src':'./images/icons/mp4.png'}));
		    $('.carousel-inner').append($('<div/>',{'class':'item','id':'item-2'}));
		    $('#item-2').append($('<img/>',{'src':'./images/icons/mkv.png'}));
		    $('.carousel-inner').append($('<div/>',{'class':'item','id':'item-3'}));
		    $('#item-3').append($('<img/>',{'src':'./images/icons/network.png'}));
		   */
		    
		  $('#myCarousel').append($('<a/>',{'class':'left carousel-control','id':'left-control','href':'#myCarousel','role':'button','data-slide':'prev'}));
		    $('#left-control').append($('<span/>',{'class':'glyphicon glyphicon-chevron-left','aria-hidden':'true'}));
		    $('#left-control').append($('<span/>',{'class':'sr-only',text:'Prev'}));
		  
		 $('#myCarousel').append($('<a/>',{'class':'right carousel-control','id':'right-control','href':'#myCarousel','role':'button','data-slide':'next'}));
		    $('#right-control').append($('<span/>',{'class':'glyphicon glyphicon-chevron-right','aria-hidden':'true'}));
		    $('#right-control').append($('<span/>',{'class':'sr-only',text:'Next'}));
		    
		    
		$('body').append($('<hr/>',{'class':'m-y-5','style':'color:lime;width:99%;heigth:2px;'}));
		//$('.jumbotron').append($('<p/>',{text:'It uses utility classes for typography and spacing to space content out within the larger container.'}));
		//$('.jumbotron').append($('<p/>',{'class':'lead'}));
		    //$('.lead').append($('<a/>',{'class':'btn btn-primary btn-lg','href':'#','role':'button',text:'Learn More'}));
		    
		       /*
			    *CSS
			    */			    
			        //$('.jumbotron').css({'max-width':'90%','position':'fixed','top':'15%','left':'35%','transform': 'translate(-35%, -15%)'});
		          //$('.jumbotron').css({'width':'99%','margin':'0.7% 0.5%','border':'2px solid Linen','border-radius':'5px','background-image': 'url("./images/backgrounds/vector-floral-green-colorful-background.jpg")','background-repeat':'no-repeat','background-size':'cover'});
		          $('.carousel-inner > .item > img').css({'width':'800px','margin':'auto'});
		          $('.carousel-inner > .item > a > img').css({'width':'800px','margin':'auto'});
	  }
	  
	  
	  if(window.location.href.indexOf("documents") != -1){		  
          carousel(documents);
          $('.jumbotron').css({'width':'99%','margin':'0.7% 0.5%','border':'2px solid Linen','border-radius':'5px','background-image': 'url("./images/backgrounds/desktop-background-hd.jpg")','background-repeat':'no-repeat','background-size':'cover'});
      }
	  if(window.location.href.indexOf("video") != -1){
		            carousel(video);
		            $('.jumbotron').css({'width':'99%','margin':'0.7% 0.5%','border-radius':'5px','background-image': 'url("./images/backgrounds/a-serbian-film-52d99d57bb8db.jpg")','background-repeat':'no-repeat','background-size':'cover','background-position':'60% 60%'});
      }
	  if(window.location.href.indexOf("music") != -1){
          carousel(music);
          $('.jumbotron').css({'width':'99%','margin':'0.7% 0.5%','border':'2px solid Linen','border-radius':'5px','background-image': 'url("./images/backgrounds/download-girl-listening-to-music-wallpaper-full-size.jpg")','background-repeat':'no-repeat','background-size':'cover','background-position':'50% 70%'});
      }
		          	          
   });



/*
 * 
  $('body').append($('<div/>',{'class':'jumbotron'}));
   $('.jumbotron').append($('<h1/>',{'class':'display-1',text:'Tramore Stained Glass'}));
   $('.jumbotron').append($('<div/>',{'class':'carousel slide', 'data-ride':'carousel','id':'myCarousel'}));
   $('#myCarousel').append($('<ol/>',{'class':'carousel-indicators'}));
	   $('.carousel-indicators').append($('<li/>',{'data-target':'#myCarousel','data-lide-to':'0','class':'active'}));
	   $('.carousel-indicators').append($('<li/>',{'data-target':'#myCarousel','data-lide-to':'1'}));
	   $('.carousel-indicators').append($('<li/>',{'data-target':'#myCarousel','data-lide-to':'2'}));
	   $('.carousel-indicators').append($('<li/>',{'data-target':'#myCarousel','data-lide-to':'3'}));
     $('#myCarousel').append($('<div/>',{'class':'carousel-inner','role':'listbox'}));
       $('#carousel-inner').append($('<div/>',{'class':'item active','id':'item-active'}));
       $('#item-active').append($('<img/>',{'src':'./images/icons/avi.png'}));
       $('#carousel-inner').append($('<div/>',{'class':'item','id':'item-1'}));
       $('#item-1').append($('<img/>',{'src':'./images/icons/mp4.png'}));
       $('#carousel-inner').append($('<div/>',{'class':'item','id':'item-2'}));
       $('#item-2').append($('<img/>',{'src':'./images/icons/mkv.png'}));
       $('#carousel-inner').append($('<div/>',{'class':'item','id':'item-3'}));
       $('#item-3').append($('<img/>',{'src':'./images/icons/network.png'}));
     $('#myCarouse').append($('<a/>',{'class':'left carousel-control','id':'left-control','href':'#myCarousel','role':'button','data-slide':'prev'}));
       $('#left-control').append($('<span/>',{'class':'glyphicon glyphicon-chevron-left','aria-hidden':'true'}));
       $('#left-control').append($('<span/>',{'class':'sr-only',text:'Prev'}));
     $('#myCarouse').append($('<a/>',{'class':'right carousel-control','id':'right-control','href':'#myCarousel','role':'button','data-slide':'next'}));
       $('#right-right').append($('<span/>',{'class':'glyphicon glyphicon-chevron-right','aria-hidden':'true'}));
       $('#right-control').append($('<span/>',{'class':'sr-only',text:'Next'}));
   $('.jumbotron').append($('<hr/>',{'class':'m-y-2'}));
   $('.jumbotron').append($('<p/>',{text:'It uses utility classes for typography and spacing to space content out within the larger container.'}));
   $('.jumbotron').append($('<p/>',{'class':'lead'}));
       $('.lead').append($('<a/>',{'class':'btn btn-primary btn-lg','href':'#','role':'button',text:'Learn More'}));
  */     
       
       
       