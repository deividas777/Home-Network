$(document).ready(function(){

          if(!$('#controller').length){
               $('head').append($('<script/>',{'src':'js/controller/controller.js','id':'controller'}));
           }

           performCheck();
	
	/**
	 * Global Variables
	 */

                users = [];
                music = [];
                video = [];
                images = [];
                magazines = [];
                tv_shows = [];
                albums_collection = [];
                favourites = [];

            $('title').text(user_id);
            $('body').css({'max-width':'100%'});
            $('body').append($('<hr>',{'style':'max-width:90%;'}));
	
	 
	/*
	 * Create Tabs on Main ==> (index.html) page
	 */
		var data = [
		            {"image":'<i class="fa fa-music fa-2x" aria-hidden="true" ></i>',"des":"Fav Tracks"},
		            {"image":'<i class="fa fa-play fa-2x" aria-hidden="true"></i>',"des":"Fav Artist"},
		            {"image":'<i class="fa fa-headphones fa-2x" aria-hidden="true"></i>',"des":"Albums"},
		            {"image":'<i class="fa fa-film fa-2x" aria-hidden="true">',"des":"Fav Movies"},
		            {"image":'<i class="fa fa-book fa-2x" aria-hidden="true"></i>',"des":"Fav Books"},
                    {"image":'<i class="fa fa-picture-o fa-2x" aria-hidden="true"></i>',"des":"Fav Gallery"}		   ,
                    {"image":'<i class="fa fa-user fa-2x" aria-hidden="true"></i>',"des":"Fav User"},
                    {"image":'<i class="fa fa-user fa-2x" aria-hidden="true"></i>',"des":"Fav User 2"}
		          ];
		
        //create multiple tabs
            $('body').append($('<div/>',{'class':'container-fluid','id':'body-container-fluid'}));
            $('#body-container-fluid').append($('<div/>',{'id':'tabs', 'class':'row','style':'max-width:100%;margin:3% 2%'}));
            $('#tabs').append($('<ul/>',{'id':'tab_ul','class':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}));
	
            /**
             * Build Layout Tabs
             */

            for(var i in data){
                $('#tab_ul').append($('<li/>',{'id':'li'+i,'type':'pointer','width':'10%'}));
                $('#li'+i).append($('<a/>',{'class':'col-md-3 col-xs-12','href':'#tabs-'+i, html: data[i].image}));
                $('#tabs').append($('<div/>',{'id':'tabs-'+i}));
                $('#tabs-'+i).append($('<p/>',{'id':'paragraph',html: '<h3 style="color:red;">'+data[i].des+'</h3>'}));
            }//end Build Layout
	
	/*
	 * Function changes tabs
	 */
		$(function() {
			    $( "#tabs" ).tabs();
			});



        /**
         * Execute function when button pressed load content to tab7
         */
            $('#li7').click(function(){
                 //e.preventDefault();
                 load_tab7();
            });


            var load_tab7 = function(){


            var text = ['Customize your tiles','Customize your tiles','Text, Icons, Images','Combine them and create your metro style'];

            var slider = [
                        {
                         'image':'http://handsontek.net/demoimages/tiles/twitter1.png',
                         'image2':'http://handsontek.net/demoimages/tiles/twitter2.png'
                        },
                        {
                         'image':'http://handsontek.net/demoimages/tiles/twitter1.png',
                         'image2':'http://handsontek.net/demoimages/tiles/twitter2.png'
                        },
                        {
                         'image':'http://handsontek.net/demoimages/tiles/hot.png',
                         'image2':'http://handsontek.net/demoimages/tiles/hot2.png',
                         'image3':'http://handsontek.net/demoimages/tiles/hot3.png'
                        },
                        {
                        'image':'http://handsontek.net/demoimages/tiles/weather2.png',
                        'image2':'http://handsontek.net/demoimages/tiles/weather.png',
                        },
                        {
                        'image':'http://handsontek.net/demoimages/tiles/facebook3.png',
                        'image2':'http://handsontek.net/demoimages/tiles/facebook2.png'
                        },
                        {
                        'image':'http://handsontek.net/demoimages/tiles/neews.png',
                        'image2':'http://handsontek.net/demoimages/tiles/neews2.png'
                        },
                        {
                        'image':'http://handsontek.net/demoimages/tiles/skype.png',
                        'image2':'http://handsontek.net/demoimages/tiles/skype2.png'
                        },
                        {
                        'image':'http://handsontek.net/demoimages/tiles/gallery.png',
                        'image2':'http://handsontek.net/demoimages/tiles/gallery2.png',
                        'image3':'http://handsontek.net/demoimages/tiles/gallery3.png'
                        },
                        {
                        'image':'http://handsontek.net/demoimages/tiles/music.png',
                        'image2':'http://handsontek.net/demoimages/tiles/music2.png'
                        },
                        {
                        'image':'http://handsontek.net/demoimages/tiles/calendar.png',
                        'image2':'http://handsontek.net/demoimages/tiles/calendar2.png'
                        },
                        {
                        'image':'http://handsontek.net/demoimages/tiles/calendar.png',
                        'image2':'http://handsontek.net/demoimages/tiles/calendar2.png'
                        }
                      ];//end data

                 $('head').append($('<link/>',{'href':'http://netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css','rel':'stylesheet'}));

                $('#row-favourites2').remove();
                $('#tabs-7').append($('<div/>',{'class':'container dynamicTile', 'id':'container_favourites-2'}));
                $('#container_favourites-2').append($('<div/>',{
                                                    'class':'row',
                                                    'id':'row-favourites2'}));


                for(var x = 0; x < slider.length;x++){

                    $('#row-favourites2').append($('<div/>',{'class':'col-sm-2 col-xs-4','id':'col-sm-'+x}));
                    $('#col-sm-'+x).append($('<div/>',{'class':'tile','id':'tile'+x}));
                    $('#tile'+x).append($('<div/>',{'class':'carousel slide','data-ride':'carousel','id':'carousel-data'+x}));
                    $('#carousel-data'+x).append($('<div/>',{'class':'carousel-inner','id':'carousel-inner'+x}));

                    $('#carousel-inner'+x).append($('<div/>',{'class':'item','id':'item'+x}));
                    $('#item'+x).append($('<img/>',{'src':slider[x].image,'class':'img-responsive'}));

                    $('#carousel-inner'+x).append($('<div/>',{'class':'item','id':'item-'+x}));
                    $('#item-'+x).append($('<img/>',{'src':slider[x].image2,'class':'img-responsive'}));

                    if(slider[x].image3){
                        $('#carousel-inner'+x).append($('<div/>',{'class':'item','id':'item'+x}));
                        $('#item'+x).append($('<img/>',{'src':slider[x].image3,'class':'img-responsive'}));
                    }


                    if(x == 0){
                        $('#item'+x).removeClass().addClass('item active');
                    }

                    if(x == 10){
                        $('#row-favourites2').append($('<div/>',{'class':'col-sm-4 col-xs-8','id':'col-sm-'+(x+1)}));
                        $('#col-sm-'+(x+1)).append($('<div/>',{'class':'tile','id':'tile'+(x+1)}));
                        $('#tile'+(x+1)).append($('<div/>',{'class':'carousel slide','data-ride':'carousel','id':'carousel-data'+(x+1)}));
                        $('#carousel-data'+(x+1)).append($('<div/>',{'class':'carousel-inner','id':'carousel-inner'+(x+1)}));

                          for(var t = 0; t < text.length;t++){
                            if(t == 0){
                              $('#item'+(x+1+t)).append($('<h3/>',{'class':'tilecaption',html:'<i class="fa fa-child fa-4x"></i>'}));
                              $('#item'+(x+1+t)).removeClass().addClass('item active');
                            }
                            $('#carousel-inner'+(x+1)).append($('<div/>',{'class':'item','id':'item'+(x+1+t)}));
                            $('#item'+(x+1+t)).append($('<h3/>',{'class':'tilecaption',text:text[t]}));

                          }
                    }

                }

                $(".tile").height($("#tile0").width());
                    $(".carousel").height($("#tile0").width());
                     $(".item").height($("#tile0").width());

                    $(window).resize(function() {
                    if(this.resizeTO) clearTimeout(this.resizeTO);
                	this.resizeTO = setTimeout(function() {
                		$(this).trigger('resizeEnd');
                	}, 10);
                    });

                    $(window).bind('resizeEnd', function() {
                    	$(".tile").height($("#tile0").width());
                        $(".carousel").height($("#tile0").width());
                        $(".item").height($("#tile0").width());
                    });




            $('.dynamicTile').css({'padding':'5px'});
            $('#tile1').css({'background':'rgb(0,172,238)'});
            $('#tile2').css({'background':'rgb(243,243,243)'});
            $('#tile3').css({'background':'rgb(71,193,228)'});
            $('#tile4').css({'background-image':'url("http://handsontek.net/demoimages/tiles/facebook.png")','background-size': 'cover'});
            $('#tile5').css({'background':'rgb(175,26,63)'});
            $('#tile6').css({'background':'rgb(62,157,215)'});
            $('#tile7').css({'background':'white'});
            $('#tile8').css({'background':'rgb(209,70,37)'});
            $('#tile9').css({'background':'rgb(0,142,0)'});
            $('#tile10').css({'background':'rgb(0,93,233)'});

            $('.tilecaption').css({

                  'position': 'relative',
                  'top': '50%',
                  'transform': 'translateY(-50%)',
                  '-webkit-transform': 'translateY(-50%)',
                  '-ms-transform': 'translateY(-50%)',
                  'margin':'0!important',
                  'text-align': 'center',
                  'color':'white',
                  'font-family': 'Segoe UI',
                  'font-weight': 'lighter'
            });

            };


        /**
         * Execute function when button pressed load content to tab6
         */
            $('#li6').click(function(e){
                 e.preventDefault();
                 load_tab6();
            });

		var load_tab6 = function(){

                setTimeout(function(){
                  loadFavourites();
                }, 200);

                 displayFavourites = function(){

                    var tmp = [];
                    var uniqueNames = [];
                    var fav = [];
                    var favMovies = [];

                    if(!$('#hash').length){
                        $('head').append($('<script/>',{'src':'js/helpers/_hash.js','id':'hash'}));
                    }

                    $('#row-favourites').remove();
					$('#tabs-6').append($('<div/>',{'class':'container', 'id':'container_favourites'}));
					$('#container_favourites').append($('<div/>',{
					                                    'class':'row',
					                                    'id':'row-favourites',
					                                    'style':'width:100%;margin:0.3% 0.2%;background-image:url("./images/backgrounds/spots_background_light_circles_69100_2560x1440.jpg");background-size:cover;background-repeat:no;'}));

                                  for(var i in favourites){
                                    if($.sha1(user_id) == favourites[i].user){
                                          tmp.push(favourites[i]);
                                       }
                                      }

                            for(var c in tmp){
                              while(uniqueNames.length != 12){
                                    var ran = Math.floor(Math.random() * tmp.length);
                                         fav.push(tmp[ran]);
                                         $.each(fav, function(i, el) {
                                               if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                                             });
                                        }//end while loop
                                       }

                                        //console.log(uniqueNames);

                            for(var s in video){
                             for(var k in uniqueNames){
                               if($.sha1(video[s].title) === uniqueNames[k].loved){
                                  favMovies.push(video[s]);
                                }
                             }
                            }

                            console.log(favMovies);

                              for(var i in favMovies){

                              $('#row-favourites').append($('<div/>',{
                                                            'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4 ',
                                                            'id':'fav-'+i,
                                                            'style':'margin-top:10px;'}));

                                $('#fav-'+i).append($('<div/>',{'class':'panel panel-info','id':'fav-panel-'+i}));

                                $('#fav-panel-'+i).append($('<div/>',{'class':'panel-heading panel-primary','id':'fav-panel-heading-'+i,html:'<h5><span class="glyphicon glyphicon-music"> ' + favMovies[i].title + '</span></h5>'}));
                                $('#fav-panel-'+i).append($('<div/>',{'class':'panel-body','id':'fav-panel-body-'+i}));

                                $('#fav-panel-body-'+i).append($('<label/>',{
                                                             'class':'label label-md label-info',
                                                             text:favMovies[i].title,
                                                             'data-tooltip':'toggle',
                                                             'title':favMovies[i].format}));

                                $('#fav-panel-'+i).append($('<div/>',{'class':'panel-footer','id':'fav-panel-footer-'+i,text:i}));

                                $('#fav-panel-footer-'+i).append($('<div/>',{
                                                               'class':'container-fluid',
                                                               'id':'audio-'+i,
                                                               'data-tooltip':'toggle',
                                                               'title':favMovies[i].date}));

                               }




                };//end displayFavourites()

        /**
        *Read json file and create collection that holds info about it
        *Call build_video() function with displays video files and info about it
        *on the page
        */

         loadFavourites = function(){

           favourites = [];
           var favouritesPrototype = function(){

           };

               favouritesPrototype.prototype.user = 'none';
               favouritesPrototype.prototype.loved = 'none';


                     $.ajax({
                            url:'js/video/favourites.json',
                            dataType: 'json',
                            success: function(data){

                                var str = "obj";

                              for(var x in data){

                               var str = new favouritesPrototype();
                                   str.user = data[x].user;
                                   str.loved = data[x].loved;
                                   favourites.push(str);

                              }
                                favourites.reverse();
                                console.log(favourites);
                                displayFavourites();
                            },
                            statusCode: {
                               404: function(){
                                   alert('Problem with server, please come back later!');
                               }
                           }
                         });
           };//end loadFavourites

		};//end load_tab6()





		/**
		 * Execute function when button pressed load content to tab0
		 */	
			$('#li0').click(function(e){
				 e.preventDefault();
				 load_tab0();
			});	
			
		/**
		 * Load tab0 picks 6 random tracks from music collection
		 */
				var load_tab0 = function(){	
					
					var uniqueNames = [];
					var tracks = [];
					
					$('#row-music').remove();
					$('#tabs-0').append($('<div/>',{'class':'container', 'id':'container_music'}));
					$('#container_music').append($('<div/>',{'class':'row','id':'row-music','style':'width:100%;margin:0.3% 0.2%;background-image:url("./images/backgrounds/spots_background_light_circles_69100_2560x1440.jpg");background-size:cover;background-repeat:no;'}));
				/*
				 * Add audio plugin
				 */
					$('#row-music').append($('<script/>',{'src':'./plugins/audiojs/audio.min.js'}));
					
					
					   /*
					    * Pick random 6 tracks and perform check on dublicates
					    */
							for(var i in music){
								 
								while(uniqueNames.length !== 6){									
										var ran = Math.floor(Math.random() * music.length);			
									         tracks.push(music[ran]);		
									         $.each(tracks, function(i, el) {
												   if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
												 });							         
									        }//end while loop						      
								       }//end for loop
			
          /*
           * Iterate through random picked tracks
           */
							
			for(var i in uniqueNames){
					
						var title = uniqueNames[i].title;
					/*
					 * Perform check on title
					 */	
						if(title.length > 24){
							title = title.substring(0,24);
						}
						
						$('#row-music').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4', 'id':'music-'+i,'style':'margin-top:1%;'}));
						$('#music-'+i).append($('<div/>',{'class':'panel panel-info','id':'panel-'+i}));
						$('#panel-'+i).append($('<div/>',{'class':'panel-heading panel-primary','id':'panel-heading-'+i,html:'<h5><span class="glyphicon glyphicon-music"> ' + title + '</span></h5>'}));
						$('#panel-'+i).append($('<div/>',{'class':'panel-body','id':'panel-body-'+i}));
							
						    var image = new Image(200,200);
							image.src = uniqueNames[i].image;
							image.alt = uniqueNames[i].artist;
							image.className = "image-responsive";
                            						
							 
						$(image).attr({'data-toggle':'tooltip','title':uniqueNames[i].des});
							
						$('#panel-body-'+i).append(image).append('<hr>');
						$('#panel-body-'+i).append($('<label/>',{'class':'label label-md label-info',text:uniqueNames[i].cat,'data-tooltip':'toggle','title':uniqueNames[i].artist}));
						$('#panel-'+i).append($('<div/>',{'class':'panel-footer','id':'panel-footer-'+i}));
						
						//$('#panel-footer-'+i).append($('<button/>',{'class':'btn btn-info',text:music[ran].id,'data-id':i}));
						$('#panel-footer-'+i).append($('<div/>',{'class':'container-fluid','id':'audio-'+i,'data-tooltip':'toggle','title':uniqueNames[i].artist}));
						$('#audio-'+i).append($('<audio/>',{'src':uniqueNames[i].music,'preload':'none'}));
				
					}//end of loop
			/*
			 * Audio Plugin
			 */
					audiojs.events.ready(function() {
					    var as = audiojs.createAll();
					  });
				}//end load_tab0
	
	
	   /**
	    * Execute function when button pressed load content to tab1
	    */
			$('#li1').click(function(e){
					e.preventDefault();
					load_tab1();
			   });//$('#li1').click(function()
			

		   var load_tab1 = function(){	
			   
			   var uniqueNames = [];
			   var artist_coll2 = [];
			   
			   $('#container_artist').remove();
				
				$('#tabs-1').append($('<div/>',{'class':'container', 'id':'container_artist'}));
				$('#container_artist').append($('<div/>',{'class':'row','id':'row-artist','style':'width:90%;margin:2%;background-image:url("./images/backgrounds/10e39f13ddfb80570f3e44fb2016cb76.jpg");background-size:cover;background-repeat:no;'}));
				
				   /*
				    * Pick random 6 Titles for music collection and perform check on dublicates
				    */
						for(var i in music){							 
							while(uniqueNames.length !== 6){									
									var ran = Math.floor(Math.random() * music.length);											
									if(music[ran].title !== "" || music[ran].title !== null ){
								         artist_coll2.push(music[ran].title);		
								         $.each(artist_coll2, function(i, el) {
											   if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
											 });		
								          }
								        }						      
							       }//end for loop
						
					
			for(var i in uniqueNames){
					
				for(var x in music){
						
					if(music[x].title == uniqueNames[i]){
								  
						$('#row-artist').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4', 'id':'artist-'+i,'style':'margin-top:0.5%;'}));
						$('#artist-'+i).append($('<div/>',{'class':'panel panel-primary','id':'panel-artist-'+i}));
						
					    var title = music[x].title;
					    
					   if(title.length > 24){
						   title = title.substring(0,24);
					     }
					
						$('#panel-artist-'+i).append($('<div/>',{'class':'panel-heading panel-primary','id':'panel-artist-heading-'+i,html:'<h5><span class="glyphicon glyphicon-music"> '+ title + '</span></h5>'}));
						$('#panel-artist-'+i).append($('<div/>',{'class':'panel-body','id':'panel-body-artist-'+i}));
						
					    var image = new Image(200,200);
						image.src = music[x].image;
						image.alt = music[x].artist;
						image.className = "image-responsive";	
						
					$(image).attr({'data-tooltip':'toggle','title':music[x].artist});
					
					
					/*
					 * Display Total number of Tracks in DB associated with Artist
					 */	
						var track_number = 0;
						
						for(var s in music){
								if(music[s].artist == music[x].artist){
									track_number++;
								}
						      }
					
			            						
						$('#panel-body-artist-'+i).append(image).append('<hr>');
						$('#panel-body-artist-'+i).append($('<label/>',{'class':'label label-md label-info',text:music[x].cat}));
						$('#panel-body-artist-'+i).append($('<label/>',{'class':'label label-md label-danger pull-right',html:'<span id="artist-tracks" data-artist="'+ music[x].artist +'" class="glyphicon glyphicon-pencil"></span>  Tracks <div class="badge badge-info">'+ track_number +'</div>'}));
						$('#panel-artist-'+i).append($('<div/>',{'class':'panel-footer','id':'panel-footer-artist-'+i}));
						$('#panel-footer-artist-'+i).append($('<button/>',{'class':'btn btn-info','id':'artist_music',text:'Play','data-track':music[x].music,'data-artist':music[x].artist}));
						$('#panel-footer-artist-'+i).append($('<input/>',{'type':'checkbox','class':'checkbox  pull-right','id':'checkbox-'+i}));
				     }	
				   }
				}//end of loop	
			
			/*
			 * Hover show tracks associated with artist
			 */
				$('label').hover(function(e){
					
					e.preventDefault();					
					var artist = $(this).children('span').attr('data-artist');
					 
					var tracks = [];
					
					for(var x in music){
						if(artist == music[x].artist){
							tracks.push(music[x].title);	
						}						
					}
				/*
				 * Display tracks when user's mouse enters label
				 */
					$(this).attr({'data-toggle':'tooltip','title':tracks});
					
				}, function(){
					$(this).removeAttr('data-toggle').removeAttr('title');
				});
				
				
				$('button').click(function(){
					  
					var parent = $(this).parent().attr('id');

					   var artist = $(this).attr('data-artist');
					   var track = JSON.stringify($(this).attr('data-track'));
					   
					   var collection = [];		
					   var counter = 0;
					   
					 for(var x in music){
						   if(JSON.stringify(music[x].music) == track){
					             collection.push(new Object({"mp3":music[x].music,"oga":music[x].music,"title":music[x].title,"artist":music[x].artist,"rating":music[x].year,"cover":music[x].image}));					       					     							  
						   }
						  if(artist == music[x].artist && collection.length <= 3){
					            collection.push(new Object({"mp3":music[x].music,"oga":music[x].music,"title":music[x].title,"artist":music[x].artist,"rating":music[x].year,"cover":music[x].image}));					       					     							  
						   }						   
					  }
				/*
				 * Reverse collection displayed tracks plays first
				 */	 
					 collection.reverse();
					   
					   
					     /*
					      * Remove DOM elements from html
					      */
					    	  $('#myModal').remove();
					    	  $('footer').remove();
						/*
						 * Add to body footer and other containers
						 */		
							  $('body').append($('<footer/>'));
							  $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));
							  $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
							  $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
							  $('.modal-content').append($('<div/>',{'class':'modal-header'}));
							  $('.modal-header').append($('<button/>',{'class':'close', 'data-dismiss':'modal',text:'X'}));
							  $('.modal-header').append($('<h4/>',{'class':'modal-title',text:collection[0].artist}));
							  $('.modal-content').append($('<div/>',{'class':'modal-body'}));					       						 
							  $('.modal-body').append($('<p/>',{'class':'label label-info label-md'}));
							  	     						  
							  $('.modal-body').append($('<div/>',{'class':'modal-footer'}));
					    	
						/*
						 * Toggle modal
						 */							
								$('#myModal').modal("toggle");  
							
							$('.close').click(function(){
								  $('#myModal').remove();
						    	  $('footer').remove();					    	  
						    	  location.reload();
						    	  
							});
				
							/*
							 * Call music player function
							 */
					    	    music_player(collection);	
					    	    
				});//end $('#artist-music').click(function()
		     }//end load_tab1()
		   
		   
		   /**
		    * Execute function when button pressed load content to tab2
		    */
				$('#li2').click(function(e){
						e.preventDefault();
						load_tab2();
				   });//$('#li2').click(function()
				
						
			/**
			 * Load Tab 2
			 */   
				
			var load_tab2 = function(){	

				   var albums_coll2 = [];
				   var uniqueNames = [];
				   
				   $('#myModal').remove();
			       $('footer').remove();	
				   $('#container_albums').remove();
					
					$('#tabs-2').append($('<div/>',{'class':'container', 'id':'container_albums'}));
					$('#container_albums').append($('<div/>',{'class':'row','id':'row-albums','style':'width:90%;margin:2%;background-image:url("./images/backgrounds/10e39f13ddfb80570f3e44fb2016cb76.jpg");background-size:cover;background-repeat:no;'}));
				
			   /*
			    * Pick random 6 albums and perform check on dublicates
			    */
					for(var i in albums_collection){
						 
						while(uniqueNames.length !== 6){							
								var ran = Math.floor(Math.random() * albums_collection.length);											
							         albums_coll2.push(ran);					         
							         $.each(albums_coll2, function(i, el) {
										   if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
										 });							         
							        }						      
						       }//end for loop
									
				/*
				 * Iterate through collection
				 */	
					for(var i in uniqueNames){
											
						$('#row-albums').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4', 'id':'albums-'+i,'style':'margin-top:0.5%;'}));
						$('#albums-'+i).append($('<div/>',{'class':'panel panel-primary','id':'panel-albums-'+i}));
						$('#panel-albums-'+i).append($('<div/>',{'class':'panel-heading panel-primary',html:'<h5><span class="glyphicon glyphicon-music"> ' + albums_collection[uniqueNames[i]].artist + '</span></h5>'}));
						$('#panel-albums-'+i).append($('<div/>',{'class':'panel-body','id':'panel-body-album-'+i,html:'<label class="label label-lg label-default">'+albums_collection[uniqueNames[i]].album_title+'</label><br><br>'}));
							
						    var image = new Image(200,200);
							image.src = albums_collection[uniqueNames[i]].image;
							image.alt = albums_collection[uniqueNames[i]].artist;
							image.className = "image-responsive";
							
						$(image).attr({'data-toggle':'tooltip','title':albums_collection[uniqueNames[i]].artist + ' Music genre: ' +albums_collection[uniqueNames[i]].genre.toUpperCase()});
						$('#panel-body-album-'+i).append(image).append('<br><br>');
				/*
				 * Print Stars --> Rating from collection
				 */		
				for(var u = 0;u < albums_collection[uniqueNames[i]].rating;u++){
						$('#panel-body-album-'+i).append($('<span/>',{'class':'glyphicon glyphicon-star-empty','style':'color:gold;heigth:20px;'}));
					}//end print stars
							
					    $('#panel-body-album-'+i).append($('<div/>',{'class':'label label-lg label-danger pull-right','id':'album-tracks','data-artist':albums_collection[uniqueNames[i]].artist,'data-album':albums_collection[uniqueNames[i]].album_title,html:'Tracks: <span class="badge">' + albums_collection[uniqueNames[i]].number_tracks + '</badge>'}));
						$('#panel-albums-'+i).append($('<div/>',{'class':'panel-footer','id':'panel-footer-albums-'+i}));
						$('#panel-footer-albums-'+i).append($('<button/>',{'class':'btn btn-warning','id':'artist_albums',text:'Play','data-album':albums_collection[uniqueNames[i]].album_title}));
						
					 
					}//end of loop	
					
					/*
					 * Hover show tracks associated with artist
					 */
					
					$('div .label').hover(function(e){
							 e.preventDefault();				
							 var id = $(this).attr('id');
							
						if(id == "album-tracks"){
							
							var artist = $(this).attr('data-artist');
							var album = $(this).attr('data-album');
							var tracks = [];
							
							for(var x in albums_collection){
								if(artist == albums_collection[x].artist && album == albums_collection[x].album_title){								
									tracks.push(albums_collection[x].tracks);	
								}						
							}
							var length = albums_collection[0].tracks[0].length;
							var format = albums_collection[0].tracks[0].substring(length - 3,length);
							
						if(format == "mp3"){
								$('.panel-footer').append($('<img/>',{'class':'image-responsive pull-right','src':'./images/icons/mp3.png','width':'40px'}));
							}
							/*
							 * Add tracks
							 */
								$(this).attr({'data-toggle':'tooltip','title':tracks});							
						}
						
						}, function(){
							$(this).removeAttr('data-toggle').removeAttr('title');
							$('.panel-footer img:last-child').remove();
						});
					
					
			/**
			 * Click to play Album
			 */
					$('button').click(function(){
						  
						   var album = $(this).attr('data-album');
					       
						   var collection = [];		
						   				        	
				        	
				        	for(var x in albums_collection){
				        		
				        		if(albums_collection[x].album_title == album){
				        		  
				        		  for(var y in albums_collection[x].tracks){
				        			  
				        			var title = albums_collection[x].tracks[y].length;
				        			var trackName = albums_collection[x].tracks[y].replace(/_|-/g, " ");
				        		    collection.push(new Object({"mp3":albums_collection[x].path+albums_collection[x].tracks[y],"oga":albums_collection[x].path+albums_collection[x].tracks[y],"title":trackName,"artist":albums_collection[x].artist,"rating":albums_collection[x].rating,"cover":albums_collection[x].image}));
				        		  }
				        		}else if(!albums_collection[x].album_title == album){
				        			alert("Not Found " + album);
				        		}
				        	}
				        	
				        	 /*
						      * Remove DOM elements
						      */
						    	  $('#myModal').remove();
						    	  $('footer').remove();
							/*
							 * Add to body footer and other containers
							 */		
								  $('body').append($('<footer/>'));
								  $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));
								  $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
								  $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
								  $('.modal-content').append($('<div/>',{'class':'modal-header'}));
								  $('.modal-header').append($('<button/>',{'class':'close', 'data-dismiss':'modal',text:'X'}));
								  $('.modal-header').append($('<h4/>',{'class':'modal-title',text:collection[0].artist}));
								  $('.modal-content').append($('<div/>',{'class':'modal-body'}));					       						 
								  //$('.modal-body').append($('<h1/>',{text:collection[0].album_title,'class':'label label-default label-lg'}));
								  	     						  
								  $('.modal-body').append($('<div/>',{'class':'modal-footer'}));
						    	
							/*
							 * Toggle modal
							 */
								  $('#myModal').modal("toggle");  
								  
								  $('.close').click(function(){
									  $('#myModal').remove();
							    	  $('footer').remove();					    	  
							    	  location.reload();
								});
					
								/*
								 * Call music player function
								 */ 
						    	    music_player(collection);
						   
						   					    	 				 	
					});//end $('#artist-music').click(function()
			     }//end load_tab2()
			
			
			
			/**
			 * Execute function when button pressed load content to tab3 Video
			 */	
				$('#li3').click(function(){
					 load_tab3();
				});	
			
					var load_tab3 = function(){	

						var video_collection = [];
						var uniqueNames = [];
						
						$('#row-video').remove();
						$('#tabs-3').append($('<div/>',{'class':'container', 'id':'container_video'}));
						$('#container_video').append($('<div/>',{'class':'row','id':'row-video','style':'width:100%;margin:0.3% 0.2%;background-image:url("./images/backgrounds/spots_background_light_circles_69100_2560x1440.jpg");background-size:cover;background-repeat:no;'}));
						
						
						for(var i in video){
							 
							while(uniqueNames.length != 6){								
									var ran = Math.floor(Math.random() * video.length);
								if(video[ran].cat !== "Adult"){
								         video_collection.push(ran);	
								         $.each(video_collection, function(i, el) {
											   if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
											 });								         
									}
								}
							}//end for loop
						
						console.log(uniqueNames);
						
						for(var i in uniqueNames){
						   													
							$('#row-video').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4', 'id':'video-'+i,'style':'margin-top:1%;'}));
							$('#video-'+i).append($('<div/>',{'class':'panel panel-default','id':'panel-video-'+i}));		
							$('#panel-video-'+i).append($('<div/>',{'class':'panel-heading panel-primary',html:'<h5> <span class="glyphicon glyphicon-film"> ' + video[uniqueNames[i]].title + '</span></h5>'}));
							$('#panel-video-'+i).append($('<div/>',{'class':'panel-body','id':'video-panel-body-'+i}));
								
							    var image = new Image(200,200);
								image.src = video[uniqueNames[i]].image;
								image.alt = video[uniqueNames[i]].title;
								image.className = "image-responsive";
							/*
							 * Add attributes description of movie
							 */	
								$(image).attr({'data-toggle':'tooltip','title':video[uniqueNames[i]].des});
								
							$('#video-panel-body-'+i).append(image).append('<hr>');
							
							/*
							 * Append rating print stars
							 */
								for(var x =0; x < video[uniqueNames[i]].rating;x++){
									$('#video-panel-body-'+i).append($('<span/>',{'class':'glyphicon glyphicon-star-empty','style':'color:gold;'}));
								}
							$('#panel-video-'+i).append($('<div/>',{'class':'panel-footer','id':'video-panel-footer-'+i}));
							
							var icon = new Image(30,30);
							icon.className = "img-responsive pull-right";
							
							
								if(video[uniqueNames[i]].format == "MP4"){
									icon.alt = "MP4";
									icon.src = "./images/icons/mp4.png";
								}
								if(video[uniqueNames[i]].format == "AVI"){
									icon.alt = "MP4";
									icon.src = "./images/icons/avi.png";
								}
								if(video[uniqueNames[i]].format == "MKV"){
									icon.alt = "MP4";
									icon.src = "./images/icons/mkv.png";
								}
								
							$(icon).attr({'data-tooltip':'toggle','title':'Video Format ' + video[uniqueNames[i]].format});
							$('#video-panel-body-'+i).append($('<label/>',{'class':'label label-md label-info pull-right','data-tooltip':'toggle','title':'Genre: ' + video[uniqueNames[i]].cat,text:video[uniqueNames[i]].cat}));
							
							$('#video-panel-footer-'+i).append($('<button/>',{'class':'btn btn-info',text:'Watch','data-title':video[uniqueNames[i]].title}));
							$('#video-panel-footer-'+i).append(icon);
				
						
						}//end of loop
						
						
						/**
						 * Click button function
						 */
						
				$('button').click(function(){
							
							var video_title = $(this).attr('data-title');
							
						for(var x in video){	
								if(video_title == video[x].title){
									var object = new Object({"video":video[x].video,"title":video[x].title,"image":video[x].image,"des":video[x].des,"cat":video[x].cat});
								    break;  
								}
						}	
												
							/**
							 * Display Movie in Modal window
							 */
									  
							    var movie_window = function(video,title,image,des,cat){
							    	 							    	
							    	      						    	
										  $('#myModal').html("");
										  $('footer').remove();										  
										  $('body').append($('<footer/>'));
										  $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));	
																			  
										  $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
										  $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
										  $('.modal-content').append($('<div/>',{'class':'modal-header'}));					  
										  $('.modal-header').append($('<button/>',{'class':'close','data-dismiss':'modal','aria-label':'Close'}));
										  $('.close').append($('<span/>',{'aria-hidden':true,text:'X'}));					  
										  $('.modal-header').append($('<h2/>',{'class':'modal-title',html:'<label class="label label-lg label-info">' + title + '<label/>','style':'font-size:1.7em;font-family: "Gill Sans Extrabold", Helvetica, sans-serif;'}));
										  $('.modal-content').append($('<div/>',{'class':'modal-body'}));
										  $('.modal-body').append($('<img/>',{'src':image,'class':'img-responsive','width':'250px','height':'280px','id':'poster-image'})).append('<br />');		
										  											  
										  $('.modal-body').append($('<button/>',{'type':'button','class':'btn btn-primary',text:"About Movie",'data-container':'body','data-toggle':'popover','data-placement':'right','data-content':des})).append('<br><br />');												  
										  $('.modal-body').append($('<div/>',{'class':'player_modal'}));
										  $('.player_modal').append($('<video/>',{'id':'video-player','width':'350','height':'220','controls':'controls', 'preload':'metadata'})).css({'margin':'2px'});
										  $('#video-player').append($('<source/>',{'src':video}));
										  							  										    
										/*
										 * Change background image, depends on category
										 * look to cahnge background() function
										 */
										    change_background_image('.modal-body',cat);
										 
										/*
										 * Function toggles window
										 */  
										    $('#myModal').modal("toggle"); 
										/*
										 * Function toggles popover
										 */
										    $('.modal-body button').mouseenter(function(){
										    	$('.modal-body button').popover('show');
										    }).mouseleave(function(){
										    	$('.modal-body button').popover('hide');
										    });
										  /*
										   * Remove video player from window, stop downloading video from server
										   */
										    
										    $('.modal-header button').click(function(event){
										    	event.preventDefault();					    	
										    	$('.player_modal video').remove();	
										    	return;
										    });
										    										    
									  }//end movie_window()	
								   /*
								    * Load function movie_window()
								    */ 
								        movie_window(object.video,object.title,object.image,object.des,object.cat);
						           });						
					           }//end load_tab3
		   

					/**
					 * Execute function when button pressed load content to tab3 Books
					 */	
							$('#li4').click(function(){								
								 load_tab4();                              
							});
							
						
					/**
					 * Function loads journals on page then button clicked
					 */
						
				        var load_tab4 = function(){
				      	
				        	var book_collection = [];
				        	var uniqueNames = [];
				        	
				        	$('#row-books').remove();
							$('#tabs-4').append($('<div/>',{'class':'container', 'id':'container_books'}));
							$('#container_books').append($('<div/>',{'class':'row','id':'row-books','style':'width:100%;margin:0.3% 0.2%;background-image:url("./images/backgrounds/spots_background_light_circles_69100_2560x1440.jpg");background-size:cover;background-repeat:no;'}));
				     
				/*
				 * Function picks random magazines from collection performs check and sorts by uniqueness 
				 */
					for(var i in magazines){								 
							while(uniqueNames.length != 6){
									var ran = Math.floor(Math.random() * magazines.length);
								if(magazines[ran].category !== "Adult"){
								         book_collection.push(ran);	
								         $.each(book_collection, function(i, el) {
											   if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
											 });								         
									}
								}
							}//end for loop
							
							
					for(var i in uniqueNames){
												
									var book_title = magazines[uniqueNames[i]].title;
								/*
								 * Check length of Title
								 */
									if(book_title.length >= 24){
										book_title = book_title.substring(0,24);
									}
									
									$('#row-books').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4', 'id':'books-'+i,'style':'margin-top:1%;'}));
									$('#books-'+i).append($('<div/>',{'class':'panel panel-default','id':'panel-books-'+i}));		
									$('#panel-books-'+i).append($('<div/>',{'class':'panel-heading panel-primary',html:'<h5><span class="glyphicon glyphicon-book"> ' + book_title + '</span></h5>'}));
									$('#panel-books-'+i).append($('<div/>',{'class':'panel-body','id':'books-panel-body-'+i}));
										
									    var image = new Image(200,200);
										image.src = magazines[uniqueNames[i]].image;
										image.alt = magazines[uniqueNames[i]].title;
										image.className = "image-responsive";
									/*
									 * Add attributes description of book
									 */	
										$(image).attr({'data-toggle':'tooltip','title':magazines[uniqueNames[i]].des});
										
									$('#books-panel-body-'+i).append(image).append('<hr>');
									
							
									$('#panel-books-'+i).append($('<div/>',{'class':'panel-footer','id':'books-panel-footer-'+i}));
									
									var icon = new Image(30,30);
									icon.className = "img-responsive pull-right";
									icon.alt = magazines[uniqueNames[i]].format;
									
										if(magazines[uniqueNames[i]].format == "PDF"){
											icon.alt = "PDF";
											icon.src = "./images/icons/pdf.png";
										}
																				
									$(icon).attr({'data-tooltip':'toggle','title':'Format ' + magazines[uniqueNames[i]].format});
									$('#books-panel-body-'+i).append($('<label/>',{'class':'label label-md label-info pull-right','data-tooltip':'toggle','title':'Category: ' + magazines[uniqueNames[i]].category,text:magazines[uniqueNames[i]].category}));
									
									$('#books-panel-footer-'+i).append($('<button/>',{'class':'btn btn-info',text:'Read','data-title':magazines[uniqueNames[i]].title}));
									$('#books-panel-footer-'+i).append(icon);
									
								}//end of loop
							
							/**
							 * Button press open file
							 */
							
							$('button').click(function(){
								var title = $(this).attr('data-title');								
								for(var x in magazines){
									if(magazines[x].title == title){
										var url = magazines[x].url;
										break;
									}
								}
								window.open(url);
							});
           			     }//end load_tab4
				        
				        
				      /**
						* Execute function when button pressed load content to tab5 Images
					    */	
							$('#li5').click(function(){							 
								 load_tab5();
							});
							
					        var load_tab5 = function(){
					        	
					        	var image_coll = [];
					        	var uniqueNames = [];
					        						        	
					        	$('#row-images').remove();
								$('#tabs-5').append($('<div/>',{'class':'container', 'id':'container_images'}));
								$('#container_images').append($('<div/>',{'class':'row','id':'row-images','style':'width:100%;margin:0.3% 0.2%;background-image:url("./images/backgrounds/spots_background_light_circles_69100_2560x1440.jpg");background-size:cover;background-repeat:no;'}));
					        	
								/*
								 * Function picks random magazines from collection performs check and sorts by uniqueness 
								 */
									for(var i in images){								 
											while(uniqueNames.length != 6){
													var ran = Math.floor(Math.random() * images.length);
												         image_coll.push(ran);	
												         $.each(image_coll, function(i, el) {
															   if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
														   });								         
														}
													}//end for loop
								
								
								for(var i in uniqueNames){
								 		
										$('#row-images').append($('<div/>',{'class':'col-xs-6 col-sm-6 col-md-4 col-lg-4', 'id':'images-'+i,'style':'margin-top:1%;'}));
										$('#images-'+i).append($('<div/>',{'class':'panel panel-default','id':'panel-images-'+i}));		
										$('#panel-images-'+i).append($('<div/>',{'class':'panel-heading panel-primary',text:images[i].name}));
										$('#panel-images-'+i).append($('<div/>',{'class':'panel-body','id':'images-panel-body-'+i}));
																
										    var image = new Image(300,250);
											image.src = images[uniqueNames[i]].path + images[uniqueNames[i]].image;
											image.alt = images[uniqueNames[i]].occasion;
											image.className = "img-responsive";
											image.id = "image-gallery";
										/*
										 * Add attributes description of book
										 */	
											$(image).attr({'data-toggle':'tooltip','title':images[uniqueNames[i]].cat});
											
										$('#images-panel-body-'+i).append(image).append('<hr>');
										$('#panel-images-'+i).append($('<div/>',{'class':'panel-footer','id':'images-panel-footer-'+i}));								
										$('#images-panel-body-'+i).append($('<label/>',{'class':'label label-md label-info pull-right','data-tooltip':'toggle','title':'Category: ' + images[uniqueNames[i]].cat,text:images[uniqueNames[i]].year}));										
										$('#images-panel-footer-'+i).append($('<span/>',{'class':'glyphicon glyphicon-camera',text:'  ' + images[uniqueNames[i]].cat,'data-title':images[uniqueNames[i]].name}));
																									  
									}//end of loop
								
					/*
					 * Click image,get id and open in modal window
					 */		
						$('img').click(function(e){
							
							e.preventDefault();
							
							   var id = $(this).attr('id');
							         
							   if(id == 'image-gallery'){
								   							   
									 var source = $(this).attr('src');
									 var info = $(this).attr('alt');
															
												var image = new Image(600,500);
												image.src = source;
												image.className="img-responsive";
										
											var parent = $(this).parent().attr('id');
												 
												  $('footer').remove();
												  $('#myModal').html("");
												  
												  $('body').append($('<footer/>'));
												  $('footer').append($('<script/>',{'src':'./js/jqueryrotate.js'}));
												  $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));
												  $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
												  $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
												  $('.modal-content').append($('<div/>',{'class':'modal-header'}));
												  $('.modal-header').append($('<button/>',{'class':'close', 'data-dismiss':'modal',text:'X'}));
												  $('.modal-header').append($('<h4/>',{'class':'modal-title',text:'Image'}));
												  $('.modal-content').append($('<div/>',{'class':'modal-body'}));
												  $('.modal-body').append(image);
												  $('.modal-body').append($('<div/>',{'class':'modal-footer'}));												  
												  $('.modal-footer').append($('<span/>',{'class':'glyphicon glyphicon-repeat pull-left','id':'rotate'}));												  
											
											/*
											 * Rotate image function
											 */
												  		
												  
												  var rotation = 0;  
													  $('#rotate').click(function(){  
														  
													        rotation = (rotation - 90) % 360;
													        $(image).rotate({angle:rotation});
													        
													
													  });	
                                           /*
                                            * Enlarge image after mouse enters
                                            */
													  $(image).mouseenter(function(e){
														  e.preventDefault();
														  
														  width = this.width;
														  height = this.height;
														  
														  $(this).css({'width':width + 70 ,'height':height + 100});
														  
														  }).mouseleave(function(){
															  $(this).css({'width':width,'height':height});
														  });
						             
												  $('.modal-footer').append($('<button/>',{'class':'btn btn-success','data-dismiss':'modal',text:'exit'}));
												  $('#myModal').modal("toggle");  
							                   }else{
							                	   return;
							                	   }//end if(id == 'image-gallery')
											});		
								        }//end load_tab5()
					
					
					/**
				     * Function changes background images dependant on category
				     */
							  
					   var change_background_image = function(element,category){
						   
						   var tmp_coll = [];
						   this.element = element;
						   var backgrounds = [
						                       {"cat":"Adult","image":"./images/backgrounds/peta_kissa_skin.jpg"},
						                       {"cat":"Adult","image":"./images/backgrounds/a-serbian-film-52d99d57bb8db.jpg"},
						                       {"cat":"Adult","image":"./images/backgrounds/peta_kissa_skin.png"},
						                       {"cat":"Adult","image":"./images/backgrounds/porn-wallpaper-98262.jpg"},
						                       {"cat":"Adult","image":"./images/backgrounds/Sexy Hot Nude Porn Girls Wallpapers (106).jpg"},
						                       {"cat":"Adult","image":"./images/backgrounds/sexy-nude-women-desktop-backgrounds.jpg"},
						                       {"cat":"Action","image":"./images/backgrounds/action1.jpeg"},
						                       {"cat":"Action","image":"./images/backgrounds/action2.jpeg"},
						                       {"cat":"Action","image":"./images/backgrounds/action3.jpeg"},
						                       {"cat":"Action","image":"./images/backgrounds/action4.jpeg"},
						                       {"cat":"Action","image":"./images/backgrounds/action5.jpeg"},
						                       
						                       ];
						   
						   //$('#back').animate({opacity: 0}, 0).css({'background-image': 'url(http://vaughnroyko.com/jsfiddle/back.png)'}).animate({opacity: 1}, 2500);
						   
						   
						   for(var x in backgrounds){
							   if(backgrounds[x].cat == category){					  
								   tmp_coll.push(backgrounds[x]);
								   var tmp = Math.floor(Math.random() * tmp_coll.length);
								   $(element).css({'background-image': 'url("'+ tmp_coll[tmp].image +'")','background-repeat':'no-repeat','background-size':'cover','opacity':'0'}).animate({'opacity':'1'}, 3500);   
							   }
						   }
						    
						  // $(element).append($('<img/>',{'src':tmp_coll[tmp].image,'style':'width:100px;height:200px;top:-600;left:100;'}))
						   console.log( tmp);
						   console.log(tmp_coll);
						   if(tmp == null){
							   $(element).css({'background-image': 'url("./images/backgrounds/a-serbian-film-52d99d57bb8db.jpg")','background-repeat':'no-repeat','background-size':'cover','background-position':'80% 50%','opacity':'0'}).animate({'opacity':'1'}, 3500);
						   }
						   
					   }

		

	
	
	  /**
	   * Main page load from json 
	   */
	    var load_page = function(collectionId,fileJson){	
		    
			 $.ajax({						
				url: fileJson,
				dataType: 'json',
				success: function(data){
					
					if(collectionId == 'video'){	
				        for(var x in data.video){		        			     
				        	var obj = new Object({"id":data.video[x].id,"title":data.video[x].title,"format":data.video[x].format,"url":data.video[x].url,"des":data.video[x].des,"image":data.video[x].image,"video":data.video[x].video,"cat":data.video[x].cat,"rating":data.video[x].rating});
				        	video.push(obj);	
				        }
					}
					
				    if(collectionId == 'TV Shows'){ 
				           for(var x in data.TV_SHOWS){		        			     				        	   
					        	for(var z in data.TV_SHOWS[x].series){
					        		var obj = new Object({"id":data.TV_SHOWS[x].id,"title":data.TV_SHOWS[x].title,"des":data.TV_SHOWS[x].des,"season":data.TV_SHOWS[x].series[z].season,"videos":data.TV_SHOWS[x].series[z].videos,"image":data.TV_SHOWS[x].series[z].image});
						        	tv_shows.push(obj);	
					        	}					        	
					        }
				          }
				    if(collectionId == 'Music'){
				    	for(var x in data.music){	
				    	  var obj = new Object({"id":data.music[x].id,"album":data.music[x].album,"title":data.music[x].title,"artist":data.music[x].artist,"format":data.music[x].format,"url":data.music[x].url,"des":data.music[x].des,"image":data.music[x].image,"music":data.music[x].music,"cat":data.music[x].cat});
			 			  music.push(obj);
				       }
				    	
				     }
				    
				    if(collectionId == "Albums"){
				    for(var x in data.albums){
				        	
				        	for(var z in data.albums[x].collection){
				        		var obj = new Object({"artist":data.albums[x].artist,"album_title":data.albums[x].collection[z].album_title.replace(/[0-9]/g, ''),"year":data.albums[x].collection[z].year,"image":data.albums[x].collection[z].image,"rating":data.albums[x].collection[z].rating,"number_tracks":data.albums[x].collection[z].number_tracks,"path":data.albums[x].collection[z].path,"genre":data.albums[x].collection[z].genre,"tracks":data.albums[x].collection[z].tracks});
				        		albums_collection.push(obj);
				        	}		 				        	
				        	
				        }
				    }
				    
				    if(collectionId == 'Documents'){
				    	for(var x in data.document){		        			     
				        	var obj = new Object({"id":data.document[x].id,"title":data.document[x].title,"format":data.document[x].format,"year":data.document[x].year,"month":data.document[x].month,"category":data.document[x].category,"author":data.document[x].author,"rating":data.document[x].rating,"publisher":data.document[x].publisher,"url":data.document[x].url,"image":data.document[x].image,"torrent":data.document[x].torrent,"count":0,"countClicks":function(){var count = this.count; count+= 1; this.count = count;},"date":"","open":function(){var date = new Date(); this.date = date;}});
				        	magazines.push(obj);
				        }
				    }
				    
				    if(collectionId == 'images'){
				    	for(var x in data.gallery){		        			     
				        	
				        	var count = data.gallery[x].numberOfFiles;
				        	var image = ".JPG";
				        	
				        	for(var t = 0; t < count; t++){
				        		var obj = new Object({"name":data.gallery[x].name,"path":data.gallery[x].path,"year":data.gallery[x].year,"occasion":data.gallery[x].occasion,"people":data.gallery[x].people,"city":data.gallery[x].city,"country":data.gallery[x].country,"cat":data.gallery[x].cat,"numberOfFiles":data.gallery[x].numberOfFiles,"image": t + image});
				        		images.push(obj);
				        	}
				        }
				    }
				    if(collectionId == 'Users'){
				    	for(var x in data.persons){	
				    		var obj = new Object(data.persons[x]);
				    		users.push(obj);
				        	//var obj = new Object({"id":data.document[x].id,"title":data.document[x].title,"format":data.document[x].format,"year":data.document[x].year,"month":data.document[x].month,"category":data.document[x].category,"author":data.document[x].author,"rating":data.document[x].rating,"publisher":data.document[x].publisher,"url":data.document[x].url,"image":data.document[x].image,"torrent":data.document[x].torrent,"count":0,"countClicks":function(){var count = this.count; count+= 1; this.count = count;},"date":"","open":function(){var date = new Date(); this.date = date;}});
				        	//magazines.push(obj);
				    		
				        }
				    	console.log(users);
				    }
				           
				        
				},
				statusCode: {
					404: function(){
						alert('Problem with server, please come back later!');
					}
				}
			});//end ajax
		}//end load_page()
	
	
	
	    var callBacks = $.Callbacks();
			callBacks.add(load_page('video','json/videos.json'));
			callBacks.add(load_page('TV Shows','json/videos.json'));
			callBacks.add(load_page('Music','json/music.json'));
			callBacks.add(load_page('Albums','json/music.json'));
			callBacks.add(load_page('images','json/images.json'));
			callBacks.add(load_page('Documents','json/documents.json'));
			callBacks.add(load_page('Users','json/users.json'));

		 window.onload = function(){	
			  load_tab0();
		   }
	
	    /**
		 * Music player function plays music from collection tmp_collection page
		 */ 
						  
			var music_player = function(collection){
				  	
				
						 //$('.modal-body').append($('<script/>',{'src':'./plugins/demo/js/jquery-1.6.1.min.js','type':'text/javascript'}));
						 $('.modal-body').append($('<script/>',{'src':'./plugins//plugin/jquery-jplayer/jquery.jplayer.js','type':'text/javascript'}));     
						 $('.modal-body').append($('<script/>',{'src':'./plugins/plugin/ttw-music-player-min.js','type':'text/javascript'}));   
						 $('.modal-body').append($('<script/>',{'src':'./plugins/demo/js/myplaylist.js','type':'text/javascript'}));
						 $('.modal-body').append($('<link/>',{'rel':'stylesheet','type':'text/css','href':'./plugins/plugin/css/style.css'}));
						 $('.modal-body').append($('<link/>',{'rel':'stylesheet','type':'text/css','href':'./plugins/demo/css/demo.css'}));
					 
						 $('.modal-body').append($('<body/>',{'id':'player-body'}));
						   							
				            var description = "Player";
          /**
           * Play from collections
           */
				            $('#player-body').ttwMusicPlayer(collection, {
				                autoPlay:true, 
				                description:description,
				                jPlayer:{
				                    swfPath:'./plugins/plugin/jquery-jplayer/'
				                }
				            });
			     }//end music player
	
	
});
	   