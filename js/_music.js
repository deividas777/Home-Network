
  $(document).ready(function(){

          if(!$('#controller').length){
              $('head').append($('<script/>',{'src':'js/controller/controller.js','id':'controller'}));
          }

          performCheck();
	
	  /**
	   * Main collection that holds info from json file (music.json)
	   */
		var music= [];
		var albums_collection = [];
		
		/*
		 * Body Containers
		 */
			  $('body').append($('<div/>',{'class':'container-fluid','id':'musics'}));
			  $('title').html("");
			  $('title').append("Music Network");
		 
		/*
		 * Create 3 containers main and side bar left and side bar right
		 */
			  $('#musics').append($('<div/>',{'class':'row pull-left','id':'row-side-bar'}));
		      $('#musics').append($('<div/>',{'class':'row pull-right','id':'row-music'}));
		     	  
		 /*
		  * CSS
		  */		      
			   $('body').css({'max-width':'98%','height':'auto','margin':'1%','padding':'1%'});
		       $('#musics').css({'max-width':'99%'});		  
			   $('#row-side-bar').css({'max-width':'14.7%','height':'auto'});
			   $('#row-music').css({'max-width':'88%','height':'auto','background-image':'url(./images/backgrounds/bg.jpg)','background-size':'cover','background-repeat':'no-repeat'});
		  
	/**
	 * Build side-bar with genre info
	 */
			  
		  var data = {"info":[
			                    {"genre":"Hard Rock","color":"default"},
			                    {"genre":"Rock","color":"info"},
			                    {"genre":"Soul","color":"danger"},
			                    {"genre":"Jazz","color":"success"},
			                    {"genre":"Blues","color":"warning"},
			                    {"genre":"R & B","color":"info"},
			                    {"genre":"Lithuanian","color":"warning"},
			                    {"genre":"Soundtrack","color":"danger"},
			                    {"genre":"Party","color":"primary"},
			                    {"genre":"Rock & Roll","color":"primary"},
			                    {"genre":"Dance","color":"primary"},
			                    {"genre":"Hip-Hop","color":"primary"},
			                    {"genre":"Relax","color":"primary"},
			                    {"genre":"Punk","color":"primary"}
			             ]};//end data
		  
		 /**
		  * Side Bar with info from data
		  */
		     $('#row-side-bar').append($('<ul/>',{'style':'list-style-type:none;'}));
		  
        /**
         * Iterate through data
         */
		  
		$.each(data, function(i, val){ 
				
			  for(var t in val){				 
					 $('#row-side-bar ul').append($('<li/>',{'id':'li-'+t}));		
					 
			   if(val[t].genre == "Party" || val[t].genre == "Dance" || val[t].genre == "Soul" || val[t].genre == "Relax" || val[t].genre == "Rock" || val[t].genre == "Punk"){
				      $('#row-side-bar ul').append($('<li/>',{'id':'li-'+ val[t].genre}));
					  $('#li-'+val[t].genre).append($('<span/>',{'class':'btn btn-md btn-'+val[t].color,'id':'myBtn'+val[t].genre, text:val[t].genre+ " ","cat":val[t].genre,'style':'margin:0px 5px 5px -40px;opacity:0.7;width:100px;'}));
			   }else{
			         $('#row-side-bar ul').find('#li-'+t).append($('<span/>',{'class':'btn btn-md btn-'+val[t].color,'id':'myBtn'+t, text:val[t].genre+ " ","cat":val[t].genre}));
			         $('#row-side-bar ul').find('#li-'+t).find('span').css({'margin':'0px 5px 5px -40px','opacity':'0.7','width':'100px'});
				  }
				} 
			 });//end each 

        /*
         *Display ramdom album image after window loads
         */
           window.onload = function(){

              setInterval(function(){
                 $('.albums').html("");
                  for(var x = 0; x < 3;x++){
                  	$('#row-side-bar ul').append($('<li/>',{'id':'li-albums-'+x,'class':'albums'}));
                  	   var ran = Math.floor(Math.random() * albums_collection.length);
                  	   var image = new Image(98,80);
                  	    image.src = albums_collection[ran].image;
                  		image.alt = albums_collection[ran].album_title;
                  		image.className = "img-responsive";
                  		image.id = "Albums";
                  		$('#li-albums-'+x).append(image).attr({'data-toggle':'tooltip','title':albums_collection[ran].album_title});
                  		$('#li-albums-'+x).css({'margin':'5px 5px 5px -40px','opacity':'1','width':'100px'});
                  }
              },10000);
           }//end window.onload


	     /**
	      *Play music by genre, limited number of tracks
	      */

	      var diffTracks = function(genre1,genre2){

	       var tmp = [];
	       var uniqueNames = [];
	       var tracks = [];


	       for(var x in music){
	         if(music[x].cat == genre1 || music[x].cat1 == genre2){
                 tmp.push(new Object({"mp3":music[x].music,"oga":music[x].music,"title":music[x].title,"artist":music[x].artist,"rating":music[x].year,"cover":music[x].image}));
                }
           }//end for loop

           for(var x in albums_collection){
           	  if(albums_collection[x].genre == genre1 || albums_collection[x].genre == genre2){
           		for(var y in albums_collection[x].tracks){
           			var title = albums_collection[x].tracks[y].length;
           			var trackName = albums_collection[x].tracks[y].replace(/_|-/g, " ");
           			tmp.push(new Object({"mp3":albums_collection[x].path+albums_collection[x].tracks[y],"oga":albums_collection[x].path+albums_collection[x].tracks[y],"title":trackName,"artist":albums_collection[x].artist,"rating":albums_collection[x].rating,"cover":albums_collection[x].image}));
           		}
           	  }
           }
                          while(uniqueNames.length !== 18){
                        		var ran = Math.floor(Math.random() * tmp.length);
                        			tracks.push(tmp[ran]);
                        			$.each(tracks, function(i, el) {
                        			  if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                        			});
                          }//end while loop

			   $('#myModal').html("");

			   $('body').append($('<footer/>'));
			   $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));
			   $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
			   $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
			   $('.modal-content').append($('<div/>',{'class':'modal-header'}));
			   $('.modal-header').append($('<button/>',{'class':'close', 'data-dismiss':'modal'}));
			   $('.modal-header').append($('<h4/>',{'class':'modal-title',text:'Music Player'}));
			   $('.modal-content').append($('<div/>',{'class':'modal-body'}));

			   $('.modal-body').append($('<p/>',{text:'Number of Tracks: ' + uniqueNames.length,'class':'label label-info label-md'}));
			   $('.modal-body').append($('<div/>',{'class':'modal-footer'}));

               $('.modal-body').append($('<body/>',{'id':'player-body'}));

               /**
                *Call music_player() function
                */
			       music_player(uniqueNames);
			    /*
			     *Modal Toggle
			     */
			    $('#myModal').modal("toggle");
	      }
		
		
		  /**
		   * Sort and display music on main page by category
		   */
			   var sort_music_by_category =  function(sort_category){

				    /**
    				 * Remove Play All button from side bar
    				 */
    				    $('#play-all').remove();
    				    $('#pagination').remove();			   
				        $('#row-music').html("");
				  /**
				   * Holds values of collection in separate list
				   */
				        var tmp_collection = [];
				   				   	     			
		     			for(var x in music){
			     			if(music[x].cat == sort_category){
			     		/**
			     		 * Push into tmp_collection 
			     		 */
			     				
			     		  tmp_collection.push(new Object({"mp3":music[x].music,"oga":music[x].music,"title":music[x].title,"artist":music[x].artist,"rating":music[x].year,"cover":music[x].image}));
			     				
			     		 //cache(tmp_collection, music[x].id, music[x].album, music[x].title, music[x].format, music[x].url, music[x].des, music[x].image, music[x].music, music[x].cat);		        	                               
			     				
			     				$('#row-music').append($('<div/>',{'class':'col-xs-6 col-sm-6 col-md-4 col-lg-3','id':'music_'+ x}));
			     				$('#music_'+x).append($('<div/>',{'class':'panel panel-default','id':'panel_'+x}));
			    				$('#panel_'+x).append($('<div/>',{'class':'panel-heading',text:music[x].title.substring(0,18)}));
			    				$('#panel_'+x).append($('<div/>',{'class':'panel-body','id':'panel-body-'+x}));
			    				$('#panel-body-'+x).append($('<img/>',{'class':'img-responsive','data-toggle':'tooltip','title':music[x].des,'src':music[x].image, 'width':'150px','height':'120px','alt':music[x].title}));
			    				
			    				$('#panel_'+x).append($('<div/>',{'class':'panel-footer','id':'panel-footer-'+x}));
			    				$('#panel-footer-'+x).append($('<div/>',{'class':'player_'+x}));
			    				$('.player_'+x).append($('<audio/>',{'src':music[x].music,'id':'player_'+x,'width':'10%','height':'3%','controls':true})).css({'margin':'2px'});
	
			     		}//end if
		     		}//end for	

		     /**
		      * Add button to side bar play all
		      */
		     	$('#row-side-bar').append($('<span/>',{'class':'btn btn-default btn-md pull-left','id':'play-all',text:' '}));
		     	
		     			
				     /**
				      * Click to play all tracks
				      */
		     					     			
		     			$('#play-all').click(function(){
		     						     				
		     				var play_counter = false;
		     				
		     						if(play_counter == false){
		     							
		     							  $('#myModal').html("");
		     							
			     						  $('body').append($('<footer/>'));
			     						  $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));
			     						  $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
			     						  $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
			     						  $('.modal-content').append($('<div/>',{'class':'modal-header'}));
			     						  $('.modal-header').append($('<button/>',{'class':'close', 'data-dismiss':'modal'}));
			     						  $('.modal-header').append($('<h4/>',{'class':'modal-title',text:'Music Player'}));
			     						  $('.modal-content').append($('<div/>',{'class':'modal-body'}));
			     						       						 
			     						  $('.modal-body').append($('<p/>',{text:'Number of Tracks: ' + tmp_collection.length,'class':'label label-info label-md'}));
			     						  $('.modal-body').append($('<div/>',{'class':'modal-footer'}));
			     					/*
			     					 * Buttons
			     					 */  
			     						  $('.modal-body').append($('<button/>',{'class':'btn btn-success',text:'Play','id':'play-yes','style':'margin-right:2px;'}));
			     						  $('.modal-body').append($('<button/>',{'class':'btn btn-danger','data-dismiss':'modal',text:'Dismiss','id':'play-no'}));
			     						  play_counter = true;
			     				   /*
			     				    * Remove Play All Button from side Bar
			     				    */  
			     						  $('#row-side-bar span #play').remove();
		     							
		     						}else{
		     							  location.reload();
		     						}
		     						  
		     						/**
		     						 * Click to to play all music
		     						 */
		     						  
		     						  $('.modal-body button').click(function(){
											  var id = $(this).attr('id');

											  switch(true){

												case(id == "play-yes"):
												  $('#play-yes').remove();
												  music_player(tmp_collection);
												  break;

												case(id == "play-no"):
												  location.reload();
												  break;

												default:
												  return;
												  break;
											  }
		     						  });//end modal click function

		     						  $('#myModal').modal("toggle");
		     			});
			   }//end function sort_music_by_category
			   
			   
			   /**
	     		 * Music player function plays music from collection tmp_collection page
	     		 * 
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
                      * Play from tmp_collections
                      */
    					            $('#player-body').ttwMusicPlayer(collection, {
    					                autoPlay:true, 
    					                description:description,
    					                jPlayer:{
    					                    swfPath:'./plugins/plugin/jquery-jplayer/'
    					                }
    					            });
    						  }//end music player
			   

		  /**
		   * Sort by category and display then span clicked on main page
		   * call sort_music_by_category() function
		   */
		     		
			     $('#row-side-bar li span').click(function(){
		 
			     			var category = $(this).attr('cat');

			     			switch(true){
			     			   case(category == "Hard Rock"):
			     			   sort_music_by_category("Hard Rock");
			     			   break;

			     			   case(category == "Rock"):
			     			   sort_music_by_category("Rock");
			     			   break;

			     			   case(category == "Soul"):
			     			   sort_music_by_category("Soul");
			     			   break;

			     			   case(category == "Jazz"):
			     			   sort_music_by_category("Jazz");
			     			   break;

			     			   case(category == "Blues"):
			     			   sort_music_by_category("Blues");
			     			   break;

			     			   case(category == "R & B"):
			     			   sort_music_by_category("R & B");
			     			   break;

			     			   case(category == "Lithuanian"):
			     			   sort_music_by_category("Lithuanian");
			     			   break;

			     			   case(category == "Soundtrack"):
			     			   sort_music_by_category("Soundtrack");
			     			   break;

			     			   case(category == "Party"):
			     			   diffTracks("Disco","Pop");
			     			   break;

			     			   case(category == "Rock & Roll"):
                               diffTracks("Rock","Pop Rock");
                               break;

                               case(category == "Dance"):
                               diffTracks("Dance","Pop");
                               break;

                               case(category == "Hip-Hop"):
                               diffTracks("R & B","Soul");
                               break;

                               case(category == "Relax"):
                               diffTracks("Soul","Pop");
                               break;

                               case(category == "Punk"):
                               diffTracks("Ska-punk","Electronic");
                               break;

			     			   default:
			     			     return;
			     			     break;
			     			}
			         });//end click span
			     

			     /**
			 	 * Function Cache
			 	 */
			 		var cache = function(collection,id,album,title,artist,format,url,des,image,music,cat){
			 			
			 			 var obj = new Object({"id":id,"album":album,"title":title,"artist":artist,"format":format,"url":url,"des":des,"image":image,"music":music,"cat":cat});
			 			 collection.push(obj);
			 			 
			 		}//end cache

			 	/**
			 	 * Function Build_music, 
			 	 * picks random 12 tracks from collection ans displays on main screen
			 	 */
			 		var build_music = function(collection){

			 		     var uniqueNames = [];
			 		     var tracks = [];
			 			
			 			 while(uniqueNames.length !== 12){
                                 var ran = Math.floor(Math.random() * collection.length);
                                 tracks.push(collection[ran]);
                                 $.each(tracks, function(i, el) {
                                   if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
                                  });
                         }//end while loop

			             for(var x in uniqueNames){
							   $('#row-music').append($('<div/>',{'class':'col-xs-6 col-sm-6 col-md-3 col-lg-3','id':'music_'+ x,'style':'margin-top:10px;'}));
							   $('#music_'+x).append($('<div/>',{'class':'panel panel-default','id':'panel_'+x}));
							   $('#panel_'+x).append($('<div/>',{'class':'panel-heading',text:uniqueNames[x].album.substring(0,18)}));
							   $('#panel_'+x).append($('<div/>',{'class':'panel-body','id':'panel-body-'+x}));
							   $('#panel-body-'+x).append($('<img/>',{'class':'img-responsive','data-toggle':'tooltip','title':uniqueNames[x].title,'src':uniqueNames[x].image, 'width':'150px','height':'120px','alt':uniqueNames[x].title}));
							   $('#panel_'+x).append($('<div/>',{'class':'panel-footer','id':'panel-footer-'+x}));
							   $('#panel-footer-'+x).append($('<div/>',{'class':'player_'+x}));
							   $('.player_'+x).append($('<audio/>',{'src':uniqueNames[x].music,'id':'player_'+x,'width':'10%','height':'3%','controls':true})).css({'margin':'2px'});
			 			 }
                     /*
                      *Display reload image
                      */
			 			 $('#row-music').append($('<div/>',{'class':'col-xs-6 col-sm-6 col-md-3 col-lg-3','id':'music-reload','style':'margin-top:10px;'}));
							 var reload =new Image(30,30);
							 reload.src = "./images/icons/reload.png";
							 reload.id = "reload";
							 reload.alt = "Reload png";
			 			 $('#music-reload').append(reload).css({'margin':'10px','align':'middle'});

                             /**
                              *Functionality of reload image
                              **/
								 $('#reload').bind({
									 click: function(){
											$('#row-music').html("");
											build_music(music);
									 },
									 mouseenter: function(){
												 $(this).attr({'data-toggle':'tooltip','title':'Reload Tracks'});
									 },
									 mouseleave: function(){
												 $(this).removeAttr('data-toggle').removeAttr('title');
									 }
								 });
			 		}//end build music

			 	/**
			 	 * Function ajax
			 	 */

			 		 
			 		var call_ajax = function(collection){
			 			$.ajax({	
			 				url: 'json/music.json',
			 				dataType: 'json',
			 				success: function(data){
			 		
			 				        for(var x in data.music){				 				        	
			 				        	cache(collection, data.music[x].id, data.music[x].album, data.music[x].title, data.music[x].artist,data.music[x].format, data.music[x].url, data.music[x].des, data.music[x].image, data.music[x].music, data.music[x].cat);		        	
			 				        }	
			 				        
			 				        for(var x in data.albums){
		 				        	
			 				        	for(var z in data.albums[x].collection){
			 				        		var obj = new Object({"artist":data.albums[x].artist,"album_title":data.albums[x].collection[z].album_title.replace(/[0-9]/g, ''),"year":data.albums[x].collection[z].year,"image":data.albums[x].collection[z].image,"rating":data.albums[x].collection[z].rating,"number_tracks":data.albums[x].collection[z].number_tracks,"path":data.albums[x].collection[z].path,"genre":data.albums[x].collection[z].genre,"tracks":data.albums[x].collection[z].tracks});
			 				        		albums_collection.push(obj);
			 				        	}		 				        	
			 				        	
			 				        }

			 		           /*
			 		            *Call Function build_music()
			 		            */
			 				         build_music(collection);
			 				},
			 				statusCode: {
			 					404: function(){
			 						alert('Problem with server, please come back later!');
			 					}
			 				}
			 			});
			 		}//end ajax
			 		
			 	/*
			 	 * Call Main builds music from collection Function call_ajax();
			 	 */
			 		
			 		var callbacks = $.Callbacks();
			 		callbacks.add( call_ajax(music) );
			 		
			 		callbacks.fire( music );
			 		
			 		
	}); //End Of Document