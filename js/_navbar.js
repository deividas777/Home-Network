
$(document).ready(function(){


	$('body').append($('<div/>',{'class':'navbar-wrapper'}));

	$('.navbar-wrapper').append($('<div/>',{'class':'container','id':'navbar-wrapper'}));
	$('#navbar-wrapper').append($('<nav/>',{'class':'navbar navbar-inverse navbar-fixed-top', 'role':'navigation'}));
	$('nav').append($('<div/>', {'class':'container'}));
	$('.container').append($('<div/>',{'class':'navbar-header','id':'navbar-header'}));
	$('#navbar-header').append($('<a/>',{'class':'navbar-brand','href':'#',html:'<img src="./images/icons/network.png" id="network-icon" data-toggle="tooltip" title="Home Network" class="img-responsive" width="35" height="35"/>'}));

	$('.navbar-header').append($('<button/>',{'id':'nav-button','type':'button','class':'navbar-toggle collapsed','data-toggle':'collapse','data-target':'#navbar','aria-expand':'false','aria-controls':'navbar'}));
	$('#nav-button').append($('<span/>',{'class':'sr-only'}));
	$('#nav-button').append($('<span/>',{'class':'icon-bar'}));
	$('#nav-button').append($('<span/>',{'class':'icon-bar'}));
	$('#nav-button').append($('<span/>',{'class':'icon-bar'}));
	$('#nav-button').append($('<span/>',{'class':'icon-bar'}));

	$('.container').append($('<div/>',{'id':'navbar','class':'collapse navbar-collapse'}));
	$('#navbar').append($('<ul/>',{'class':'nav navbar-nav'}));

	/**
	 * Rotate icon (home network)
	 */
		image = $('.navbar-brand img ').attr('id');

		$('#'+image).hover(function(){
	        $(this).css('transform','rotate(360deg)');
	        setTimeout(function () {
	            this.css({'transform': 'rotate(0deg)', 'transition': '0'});
	            setTimeout(function () {
	                this.css('transition', 'all 3s ease-in-out');
	            }.bind(this), 10);
	        }.bind($(this)), 3000);
	    });



	var data = {"nav":[
	                   {
		                	 "name":"Home",
		                	 "href":"/index.html",
		                	 "icon":"glyphicon glyphicon-home"
	                   },
	                   {
		                	 "name":"Video",
		                	 "href":"video.html",
		                	 "icon":"glyphicon glyphicon-film"
		               },
	                   {
	                	   "name":"Music",
	                	   "href":"music.html",
	                	   "icon":"glyphicon glyphicon-music"
	                   },
	                   {
	                	   "name":"Gallery",
	                	   "href":"images.html",
	                	   "icon":"glyphicon glyphicon-picture"
	                   },
	                   {
	                	   "name":"User",
	                	   "href":"user.html",
	                	   "icon":"glyphicon glyphicon-user"
	                   },
	                   {
	                	   "name":"Documents",
	                	   "href":"documents.html",
	                	   "icon":"glyphicon glyphicon-book"
	                   },
	                   {
	                      "name":"Logout",
                        "href":"/",
                        "icon":"fa fa-sign-out fa-lg"
	                   }
	                  ]};

	 var session = sessionStorage.getItem('session');
	 var counter = 0;

	 for(var i in data.nav){
	     if(!session && counter <= 2){
             $('ul').append($('<li/>',{'id':'nav-li-'+i}));
             $('#nav-li-'+i).append($('<div/>',{'class':'btn btn-lg btn-inverse','data-toggle':'tooltip','data-placement':'bottom','title':data.nav[i].name,'data-id':i,'id':'button_'+i})).css({'margin':'7px','color':'#ffffb3'});
             $('#nav-li-'+i).find('#button_'+i).append($('<span/>',{'class':data.nav[i].icon,'data-name':data.nav[i].name}));
             counter++;
	     }else if(session){
	        $('ul').append($('<li/>',{'id':'nav-li-'+i}));
            $('#nav-li-'+i).append($('<div/>',{'class':'btn btn-lg btn-inverse','data-toggle':'tooltip','data-placement':'bottom','title':data.nav[i].name,'data-id':i,'id':'button_'+i})).css({'margin':'7px','color':'#ffffb3'});
            $('#nav-li-'+i).find('#button_'+i).append($('<span/>',{'class':data.nav[i].icon,'data-name':data.nav[i].name}));
	     }else{
	      break;
	     }
       }//end for


	//CSS
	  $('.navbar-wrapper').css({'margin':'5 0 20 0','max-width':'95%'});
	  $('.navbar').css({'max-width':'95%','margin':'0.2% 2.5% 2% 2.5%','border-radius':'5px','padding':'auto'});



   //CSS hover method and click method

           $("#navbar li div").bind({

                   click: function(){

                         var url = $(this).attr('data-url');
                         if(url !== "/"){
                           window.open(url,'_top');
                         }else{
                           sessionStorage.clear();
                                 setTimeout(function(){
                                    window.location.replace("/");
                                 }, 200);

                         }
                   },

                   mouseenter: function(){
                          $(this).css({'color':'#ff9933'});
                          var id = $(this).attr('data-id');
                          $(this).attr({'data-url':data.nav[id].href});
                   },

                   mouseleave:function(){

                          $(this).css({'color':'gold'});
                          $(this).removeAttr('data-url');
                   }

           });



	});
