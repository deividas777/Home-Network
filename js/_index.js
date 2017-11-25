$(document).ready(function(){

       if(!$('#controller').length){
         $('head').append($('<script/>',{'src':'js/controller/controller.js'}));
       }

       if(!$('#hash').length){
          $('head').append($('<script/>',{'src':'js/helpers/_hash.js','id':'hash'}));
      }

      /*
       *Load Data
       */

      if(!$('#data').length){
        $('head').append($('<script/>',{'src':'js/data/data.js','id':'data'}));
      }

    /**
     *Insert movie window script into page
     */
		$('head').append($('<script/>',{'src':'js/video/_movie_window.js'}));


	$('title').text('Home Network');
	$('body').css({'max-width':'100%'});
	$('body').append($('<hr>',{'style':'width:95%;'}));


	/*
	 * Create Tabs on Main ==> (index.html) page
	 */
		var text = [
		            {"image":"./images/icons/music_tab.png","des":"Music","id":"tab-Music"},
		            {"image":"./images/icons/musician_tab.png","des":"Songs","id":"tab-Songs"},
		            {"image":"./images/icons/albums_tab.png","des":"Albums","id":"tab-Albums"},
		            {"image":"./images/icons/vide_tab.png","des":"Video","id":"tab-Video"},
		            {"image":"./images/icons/magazines_tab.png","des":"Books","id":"tab-Books"},
		            {"image":"./images/icons/images_tab.png","des":"Images","id":"tab-Images"}];

	//create multiple tabs
		$('body').append($('<div/>',{'class':'container-fluid','id':'body-container-fluid'}));
		$('#body-container-fluid').append($('<div/>',{'id':'tabs', 'class':'row','style':'max-width:100%;margin:3% 2%'}));
		$('#tabs').append($('<ul/>',{'id':'tab_ul','class':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}));

		/**
		 * Build Layout Tabs
		 */

		for(var i in text){

			$('#tab_ul').append($('<li/>',{'id':'li'+i,'type':'pointer','width':'10%'}));
				 var image = new Image(35,35);
				 image.src =text[i].image;
				 image.alt = text[i].des;

				$(image).attr({'data-tooltip':'toggle','title':text[i].des});

			$('#li'+i).append($('<a/>',{'class':'col-md-4 col-xs-12 col-md-4-offset-3 col-xs-12-offset-3','href':'#tabs-'+i, html: image}));
			$('#tabs').append($('<div/>',{'id':'tabs-'+i}));
			$('#tabs-'+i).append($('<i/>',{'data-toggle':'tooltip',
			                               'title':'Search',
			                               html:'<div class="btn btn-sm btn-warning" style="margin-top:10px;">Total: <badge class="paragraph-search" data-val="'+ text[i].des +'" id="'+ text[i].id+'">'+ text[i].des+'</badge></div>'}));
		}//end Build Layout


       /*
        *Insert Search function
        */

           $('body').append($('<script/>',{'src':'./js/_search.js'}));


     /*
      *Display Nummber of files available
      */
		var display_info = function(id,collection){
               $('#'+id).attr({'class':'badge badge-md'});
		       $('#'+id).text(collection.length);
		}

	/*
	 * Function changes tabs
	 */
		$(function() {
			    $( "#tabs" ).tabs();
			});

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

                         setTimeout(function(){
                           display_info("tab-Music",music);
                         }, 700);

					var uniqueNames = [];
					var tracks = [];

					$('#row-music').remove();
					$('#tabs-0').css({'background-image':'url("https://s-media-cache-ak0.pinimg.com/736x/e5/08/79/e5087964012dc3feacc67a834832986d.jpg")','background-repeat':'no-repeat','background-position':'-15% -90%'});
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
						$('#panel-'+i).append($('<div/>',{'class':'panel-heading panel-primary','id':'panel-heading-'+i,html:'<h6><span class="glyphicon glyphicon-music"> ' + title + '</span></h6>'}));
						$('#panel-'+i).append($('<div/>',{'class':'panel-body','id':'panel-body-'+i}));

						  var image = new Image(200,200);
							image.src = uniqueNames[i].image;
							image.alt = uniqueNames[i].artist;
							image.className = "image-responsive";
							image.id = "image-artist";


						$(image).attr({'data-toggle':'tooltip','title':`${uniqueNames[i].des}`});
						
						$('#image-artist').bind('cut copy paste', function(e){
							e.preventDefault();
							return false;
						});

						$('#panel-body-'+i).append(image).append('<hr>');
						$('#panel-body-'+i).append($('<label/>',{'class':'label label-md label-info',text:`${uniqueNames[i].cat}`,'data-tooltip':'toggle','title':`${uniqueNames[i].artist}`}));
						$('#panel-'+i).append($('<div/>',{'class':'panel-footer','id':'panel-footer-'+i}));

						//$('#panel-footer-'+i).append($('<button/>',{'class':'btn btn-info',text:music[ran].id,'data-id':i}));
					if(session){
						$('#panel-footer-'+i).append($('<div/>',{'class':'container-fluid','id':'audio-'+i,'data-tooltip':'toggle','title':`${uniqueNames[i].artist}`}));
						$('#audio-'+i).append($('<audio/>',{'src':uniqueNames[i].music,'preload':'none'}));
			        	}
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

			   display_info("tab-Songs",music);
			   var uniqueNames = [];
			   var artist_coll2 = [];

			  $('#container_artist').remove();
				$('#tabs-1').css({'background-image':'url("https://s.s-bol.com/imgbase0/imagebase/large/FC/2/4/8/0/9200000023430842.jpg")','background-repeat':'no-repeat','background-position':'110% 21%'});

				$('#tabs-1').append($('<div/>',{'class':'container', 'id':'container_artist'}));
				$('#container_artist').append($('<div/>',{'class':'row','id':'row-artist','style':'width:100%;margin:0.3% 0.2%;background-image:url("./images/backgrounds/10e39f13ddfb80570f3e44fb2016cb76.jpg");background-size:cover;background-repeat:no;'}));

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

					    var title = $.trim(music[x].title).substring(0,16);

						$('#panel-artist-'+i).append($('<div/>',{'class':'panel-heading panel-primary',
						                                         'id':'panel-artist-heading-'+i,
						                                         'data-toggle':'tooltip',
						                                         'title':`${music[x].artist}`,
						                                         html:'<h6><span class="glyphicon glyphicon-music"> '+ title + '</span></h6>'}));
						$('#panel-artist-'+i).append($('<div/>',{'class':'panel-body','id':'panel-body-artist-'+i}));

					  var image = new Image(200,200);
						image.src = music[x].image;
						image.alt = music[x].artist;
						image.className = "image-responsive";

					$(image).attr({'data-tooltip':'toggle','title':`${music[x].des}`});


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

                   /**
                    * Check for session
                    */
					  if(session){
					    $('#panel-footer-artist-'+i).append($('<button/>',{'class':'btn btn-info','id':'artist_music',text:'Play','data-track':music[x].music,'data-artist':music[x].artist}));
						  $('#panel-footer-artist-'+i).append($('<input/>',{'type':'checkbox','class':'checkbox  pull-right','id':'checkbox-'+i}));
				      }
				    }
				  }
				}//end of loop

			/*
			 *Check if check box checked
			 */
			 $('.checkbox').prop('checked',false);


			/*
			 * Hover show tracks associated with artist
			 */
				$('label').hover(function(e){

					e.preventDefault();
					var artist = $(this).children('span').attr('data-artist');

					var tracks = [];

					for(var x in music){
						if(artist == music[x].artist){
							tracks.push(`\n${music[x].title}`);
						}
					}
				/*
				 * Display tracks when user's mouse enters label
				 */
					$(this).attr({'data-toggle':'tooltip','title':tracks.slice(0,-4)});

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
					             collection.push(new Object({"mp3":music[x].music,
					                                         "oga":music[x].music,
					                                         "title":music[x].title,
					                                         "artist":music[x].artist,
					                                         "rating":music[x].year,
					                                         "cover":music[x].image}));
						   }
						  if(artist == music[x].artist && collection.length <= 3){
					            collection.push(new Object({"mp3":music[x].music,
					                                        "oga":music[x].music,
					                                        "title":music[x].title,
					                                        "artist":music[x].artist,
					                                        "rating":music[x].year,
					                                        "cover":music[x].image}));
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

                jQuery('.close').on('click', function(){
                  jQuery('#li1')[1].click();
                });

						/*
						 * Toggle modal
						 */
								$('#myModal').modal("toggle");

							$('.close').click(function(){
								  $('#myModal').remove();
						    	  $('footer').remove();
							});

							/*
							 * Call music player function
							 */
					    	    music_player(collection);

				});//end $('#artist-music').click(function()
		     };//end load_tab1()


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

                   display_info("tab-Albums",albums_collection);
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
						$('#panel-albums-'+i).append($('<div/>',{'class':'panel-heading panel-primary',html:'<h6><span class="glyphicon glyphicon-music"> ' + albums_collection[uniqueNames[i]].artist + '</span></h6>'}));
						$('#panel-albums-'+i).append($('<div/>',{'class':'panel-body','id':'panel-body-album-'+i,html:'<label class="label label-lg label-default">'+albums_collection[uniqueNames[i]].album_title+'</label><br><br>'}));

						  var image = new Image(200,200);
							image.src = albums_collection[uniqueNames[i]].image;
							image.alt = albums_collection[uniqueNames[i]].artist;
							image.className = "image-responsive";

						$(image).attr({'data-toggle':'tooltip',
                           'title':albums_collection[uniqueNames[i]].artist + ' Music genre: ' +albums_collection[uniqueNames[i]].genre.toUpperCase()});
						$('#panel-body-album-'+i).append(image).append('<br><br>');
				/*
				 * Print Stars --> Rating from collection
				 */
				for(var u = 0;u < albums_collection[uniqueNames[i]].rating;u++){
						$('#panel-body-album-'+i).append($('<span/>',{'class':'glyphicon glyphicon-star-empty','style':'color:gold;heigth:20px;'}));
					}//end print stars

					    $('#panel-body-album-'+i).append($('<div/>',{'class':'label label-lg label-danger pull-right',
                                                            'id':'album-tracks',
                                                            'data-artist':albums_collection[uniqueNames[i]].artist,
                                                            'data-album':albums_collection[uniqueNames[i]].album_title,
                                                            html:'Tracks: <span class="badge">' + albums_collection[uniqueNames[i]].number_tracks + '</badge>'}));

                  /**
                   * Check if session exist
                   */
					if(session){
						$('#panel-albums-'+i).append($('<div/>',{'class':'panel-footer','id':'panel-footer-albums-'+i}));
						$('#panel-footer-albums-'+i).append($('<button/>',{'class':'btn btn-warning',
                                                               'id':'artist_albums',
                                                               text:'Play',
                                                               'data-album':albums_collection[uniqueNames[i]].album_title}));
					}

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
				        			var trackName = albums_collection[x].tracks[y].replace(/[^0-9]/|/\D/|/_|-/g, " ").slice(0,-4);

				        		  collection.push(new Object({"mp3":albums_collection[x].path+albums_collection[x].tracks[y],
                                                  "oga":albums_collection[x].path+albums_collection[x].tracks[y],
                                                  "title":trackName,
                                                  "artist":albums_collection[x].artist,
                                                  "rating":albums_collection[x].rating,
                                                  "cover":albums_collection[x].image}));
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
								  $('.modal-header').append($('<h4/>',{'class':'modal-title',text:`${collection[0].artist}`}));
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

						display_info("tab-Video",video);
						var video_collection = [];
						var uniqueNames = [];

                        getUser();

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

						for(var i in uniqueNames){

							$('#row-video').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4', 'id':'video-'+i,'style':'margin-top:1%;'}));
							$('#video-'+i).append($('<div/>',{'class':'panel panel-default','id':'panel-video-'+i}));


                if(session && user_id !== null){

                    for(var t in favourites){

                            if(favourites[t].user === $.sha1(user_id)){
                              console.log('User:'  + favourites[t].user + ' == ' + $.sha1(user_id));
                            if(favourites[t].loved === $.sha1(video[uniqueNames[i]].title)){
                              console.log('Loved: ' +favourites[t].loved +' == '+ $.sha1(video[uniqueNames[i]].title));
                             }
                            }

                            //console.log('Loved: ' +favourites[t].loved +' == '+ $.sha1(video[uniqueNames[i]].title));

                            var str1 = favourites[t].loved.toString();
                            var str2 = $.sha1(video[uniqueNames[i]].title).toString();
                            var n = str2.localeCompare(str1);
                          if(n == 0){
                            console.log('Equal: =>' +n);

                          }

                           if(favourites[t].user == $.sha1(user_id) && favourites[t].loved == $.sha1(video[uniqueNames[i]].title)){
                             $('#panel-video-'+i).append($('<div/>',{'class':'panel-heading panel-primary',html:'<i data-title="'+ video[uniqueNames[i]].title +'" id="fav" class="fa fa-heartbeat fa-2x pull-right" style="color:red;"></i><h6> <span class="glyphicon glyphicon-film"> ' + video[uniqueNames[i]].title.substring(0,16) + '</span></h6>'}));
                             break;
                          }else{
                            $('#panel-video-'+i).append($('<div/>',{'class':'panel-heading panel-primary',html:'<i data-title="'+ video[uniqueNames[i]].title +'" id="fav" class="fa fa-heart-o fa-2x pull-right"></i><h6> <span class="glyphicon glyphicon-film"> ' + video[uniqueNames[i]].title.substring(0,16) + '</span></h6>'}));
                            break;
                          }
                    }
               }else{

                $('#panel-video-'+i).append($('<div/>',{'class':'panel-heading panel-primary',html:'<i data-title="'+ video[uniqueNames[i]].title +'" id="fav" class="fa fa-heart fa-2x pull-right"></i><h6> <span class="glyphicon glyphicon-film"> ' + video[uniqueNames[i]].title.substring(0,16) + '</span></h6>'}));

               }


							$('#panel-video-'+i).append($('<div/>',{'class':'panel-body','id':'video-panel-body-'+i}));

							    var image = new Image(200,200);
								image.src = video[uniqueNames[i]].image;
								image.alt = video[uniqueNames[i]].title;
								image.className = "image-responsive";
							/*
							 * Add attributes description of movie
							 */
								$(image).attr({'data-toggle':'popover', 'data-placement':'bottom','title':`${video[uniqueNames[i]].des}`});
								$(image).popover();


                            $('#video-panel-body-'+i).append($('<i/>',{'class':'fa fa-comments fa-2x pull-right','id':'comments','data-index':video[uniqueNames[i]].id}));
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

							$(icon).attr({'data-tooltip':'toggle','title':`Video Format:  ${video[uniqueNames[i]].format}`});
							$('#video-panel-body-'+i).append($('<label/>',{'class':'label label-md label-info pull-right','data-tooltip':'toggle','title':`Genre: ${video[uniqueNames[i]].cat}`, text:`${video[uniqueNames[i]].cat}`}));

					    if(session){
                            $('#video-panel-footer-'+i).append($('<button/>',{
                                                                 'data-loading-text':'Loading...',
                                                                 'class':'btn btn-info',
                                                                 text:'Watch',
                                                                 'data-title':video[uniqueNames[i]].title}));
                            $('#video-panel-footer-'+i).append(icon);
					    }

					}//end for loop

          /*
           *Comments and Favourites function
           */

						$('.fa').bind({

                          click: function(){

                              var id = $(this).attr('id');
                              var movieId = parseInt($(this).attr('data-index'));
                              var fav = $(this).attr('id');

                          switch(true){


                             case(session && id === 'fav'):

                                  /*
                                   *Check for existing div
                                   */

                                       if(!$('#hash').length){
                                           $('head').append($('<script/>',{'src':'js/helpers/_hash.js','id':'hash'}));
                                       }


                                var loved = $(this).attr('data-title');
                                console.log(loved +' : '+ user_id);

                                for(var t in favourites){

                                   if(favourites[t].user == $.sha1(user_id) && favourites[t].loved == $.sha1(loved)){

                                     $(this).removeClass().addClass('fa fa-heartbeat fa-2x pull-right');
                                     $(this).css({'color':'red'});
                                     $(this).attr({'data-toggle':'tooltip','title':'It is in your favourite list'});

                                     return false;

                                   }else{
                                     $(this).css({'color':'gold'});
                                   }
                                }

                                    var data = {
                                            'user':$.sha1(user_id),
                                            'loved':$.sha1(loved)
                                       };

                                       data = $(this).serialize() + "&" + $.param(data);

                                       $.ajax({
                                            type: "POST",
                                            dataType: "json",
                                            url: "../js/video/favourites.php",
                                            data: data,
                                            success: function(){
                                              loadFavourites();
                                            },
                                            error: function(){
                                             loadFavourites();
                                            }
                                          });


                   				 break;




                              case(session && id === 'comments'):

                                 $('#myModal').html("");
                                 $('footer').remove();
                                 $('body').append($('<footer/>'));
                                 $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));

                                 $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
                                 $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
                                 $('.modal-content').append($('<div/>',{'class':'modal-header'}));
                                 $('.modal-header').append($('<button/>',{'class':'close','data-dismiss':'modal','aria-label':'Close'}));
                                 $('.close').append($('<span/>',{'aria-hidden':true,text:'X'}));
                                 $('.modal-header').append($('<h2/>',{'class':'modal-title',html:'<label class="label label-lg label-info">' + 'Comment Form' + '<label/>','style':'font-size:1.7em;font-family: "Gill Sans Extrabold", Helvetica, sans-serif;'}));
                                 $('.modal-content').append($('<div/>',{'class':'modal-body'}));


                                   var formData = [
                                                {'type':'hidden','name':'title','id':'title','value':movieId},
                                                {'type':'text','name':'comment','id':'comment'}
                                              ];


                                    $('.modal-body').append($('<form/>',{}));

                                            for(var s in formData){

                                              if(formData[s].name !== 'comment'){
                                                  $('form').append($('<div/>',{'class':'form-group form-group-lg','id':'form-group-'+s}));
                                                  $('#form-group-'+s).append($('<input/>',{
                                                                                'type':formData[s].type,
                                                                                'name':formData[s].name,
                                                                                'class':'form-control input-sm',
                                                                                'id':formData[s].id,
                                                                                'value':formData[s].value
                                                                                }));

                                              }else{

                                                $('form').append($('<div/>',{'class':'form-group form-group-lg','id':'form-group-'+s}));
                                                $('#form-group-'+s).append($('<label/>',{
                                                                             'class':'col-sm-4 control-label',
                                                                             'for':formData[s].name,
                                                                             text:formData[s].name.toUpperCase()
                                                                             }));

                                                $('#form-group-'+s).append($('<textarea/>',{
                                                                             'type':formData[s].type,
                                                                             'name':formData[s].name,
                                                                             'class':'form-control input-sm',
                                                                             'id':formData[s].id,
                                                                             'placeholder':formData[s].name.toUpperCase(),
                                                                             'width':'80%',
                                                                             'height':'300px'
                                                                             }));
                                                }
                                            }//end for

                                            $('form').append($('<button/>',{
                                                               'class':'btn btn-sm btn-primary clearfix',
                                                               'id':'submit-comment',
                                                               'value':'Send',
                                                               text: 'Submit'}));

                                          /*
                                           *Average movie rating
                                           */
                                               var rating = 3;

                                            for(var p = 10; p != 0; p--){
                                              $('form').append($('<i/>',{
                                                                 'class':'fa fa-star-o fa-lg pull-right',
                                                                 'id':'submit-rating-'+p,
                                                                 'data-rating':p
                                                                 }));
                                            }


                                          /*
                                           *Change rating
                                           */

                                            $('i').click(function(){
                                                var id = $(this).attr('id');
                                                    id = id.substring(0,13);

                                                   if(id === 'submit-rating'){

                                                      rating = $(this).attr('data-rating');

                                                      for(var k = 0; k != rating; k++){
                                                        $('#submit-rating-'+k).removeClass();
                                                        $('#submit-rating-'+k).addClass('fa fa-star-o fa-2x pull-right');
                                                        $('#submit-rating-'+k).css({'color':'gold'});
                                                      }
                                                          for(var d = rating; d != 11; d++){
                                                             $('#submit-rating-'+d).removeClass();
                                                             $('#submit-rating-'+d).addClass('fa fa-shower fa-lg pull-right');
                                                             $('#submit-rating-'+d).css({'color':'#87CEFA'});

                                                          }
                                                   }
                                            });//end i click


                                                  /*
                                                   *Submit comment save to json file
                                                   */

                                                   $('#submit-comment').click(function(){

                                                         var date = new Date();
                                                         var title = $('#title').val();
                                                         var video_id = title;
                                                         var user = $('#user').val();
                                                         var comment = $('textarea').val();
                                                         comment = comment.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                                                         comment = comment.substring(0, 400);
                                                         var comment_id = 0;
                                                         var tmp = [];
                                                         var user = [];
                                                         var movie_rating = rating;


                                                      /*
                                                       *Call function from getUser() => info.js
                                                       *assigns user_id
                                                       */
                                                               getUser();


                                                               for(var s in comments){
                                                                   if(title === comments[s].video_id){
                                                                      tmp.push(comments[s].comment);
                                                                   }
                                                                 }


                                                                 for(var x in video){
                                                                  if(title == video[x].id){
                                                                     title = video[x].title;
                                                                     break;
                                                                  }
                                                                 }

                                                        comment_id = tmp.length;

                                                             var data = {
                                                                   "video_id":video_id,
                                                                   "comment": comment,
                                                                   "title":title,
                                                                   "date":date,
                                                                   "comment_id":comment_id,
                                                                   "user_id":user_id,
                                                                   "movie_rating":movie_rating
                                                             };

                                                         data = $(this).serialize() + "&" + $.param(data);

                                                                 $.ajax({
                                                                   type: "POST",
                                                                   dataType: "json",
                                                                   url: "../js/video/videoComments.php",
                                                                   data: data,
                                                                   success: function(res) {
                                                                       if(res === 'Data successfully saved'){
                                                                         $('#myModal').modal("toggle");
                                                                         loadComments();
                                                                       }
                                                                     },
                                                                   error: function(){
                                                                     $('#myModal').modal("toggle");
                                                                     loadComments();
                                                                   }

                                                                   });
                                                         return false;
                                                    });

                                                       /*
                                                        * Function toggles window
                                                        */
                                                           $('#myModal').modal("toggle");

                                   break;

                                    case(!session):
                                      loginForm();
                                      return;
                                    break;


                                 default:
                                   return;
                                  break;
                             }
                          },

                          mouseenter: function(){


                              var id = $(this).attr('data-index');
                              var comment = $(this).attr('id');
                              var tmp = [];

                                 if(comment !== 'comments'){
                                    return;
                                 }

                             if(id){

                                   if(!comments.length){
                                      loadComments();
                                   }

                                 var avr_rating = 0;
                                   for(var x in comments){
                                     if(comments[x].video_id == id){
                                       tmp.push(comments[x].comment);
                                       avr_rating = Math.floor(avr_rating + parseInt(comments[x].movie_rating));
                                     }
                                   }

                                  avr_rating = Math.floor(avr_rating / tmp.length);

                                   if(tmp.length){
                                       var rand = Math.floor(Math.random() * tmp.length);
                                       $(this).attr({'data-toggle':'tooltip','title':`${tmp[rand]} \nUser's rating: ${avr_rating}`});

                                     }else{
                                          $(this).attr({'data-toggle':'tooltip','title':'No Comments Available'});
                                          id = null;
                                          return;
                                     }
                             }

                         },

                         mouseleave: function(){

                           $(this).removeAttr('title').removeAttr('data-toggle');
                         }
                    });//end fa bind




						/**
						 * Click button function
						 */

				$('button').click(function(){

							var $btn = $(this).button('loading');
							var video_title = $(this).attr('data-title');

						for(var x in video){
								if(video_title == video[x].title){
									var object = new Object({"video":video[x].video,
									                         "drive":video[x].drive,
									                         "title":video[x].title,
									                         "image":video[x].image,
									                         "des":video[x].des,
									                         "cat":video[x].cat});
								    break;
								}
						}



								   /*
								    * Load function movie_window()
								    */
								       setTimeout(function(){

								       	  if(window.Worker){

                                              var myWorker = new Worker('js/webworker/worker.js');
                                              var message = {content: {drive:object.drive,
                                                                       video:object.video,
                                                                       title:object.title,
                                                                       image:object.image,
                                                                       des:object.des,
                                                                       cat:object.cat}};
                                              myWorker.postMessage(message);

                                              myWorker.onmessage = function(e){
                                                movie_window(e.data.result.drive,
                                                             e.data.result.video,
                                                             e.data.result.title,
                                                             e.data.result.image,
                                                             e.data.result.des,
                                                             e.data.result.cat);
                                                     console.dir(e.data.result);
                                                }

                                              }
								       	 ///movie_window(object.drive,object.video,object.title,object.image,object.des,object.cat);
								       	  $btn.button('reset');
								       }, 1000);

						           });
					           }//end load_tab3


					/**
					 * Execute function when button pressed load content to tab4 Books
					 */
							$('#li4').click(function(){
								 load_tab4();
							});


					/**
					 * Function loads journals on page then button clicked
					 */

				        var load_tab4 = function(){

				      	    display_info("tab-Books",magazines);
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

									var book_title = $.trim(magazines[uniqueNames[i]].title).substring(0,16);

									$('#row-books').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4', 'id':'books-'+i,'style':'margin-top:1%;'}));
									$('#books-'+i).append($('<div/>',{'class':'panel panel-default','id':'panel-books-'+i}));
									$('#panel-books-'+i).append($('<div/>',{'class':'panel-heading panel-primary',html:'<h6><span class="glyphicon glyphicon-book"> ' + book_title + '</span></h6>'}));
									$('#panel-books-'+i).append($('<div/>',{'class':'panel-body','id':'books-panel-body-'+i}));

									    var image = new Image(200,200);
										image.src = magazines[uniqueNames[i]].image;
										image.alt = magazines[uniqueNames[i]].title;
										image.className = "image-responsive";
									/*
									 * Add attributes description of book
									 */
										$(image).attr({'data-toggle':'tooltip','title':magazines[uniqueNames[i]].title});

									$('#books-panel-body-'+i).append(image).append('<hr>');
									$('#panel-books-'+i).append($('<div/>',{'class':'panel-footer','id':'books-panel-footer-'+i}));
									$('#books-panel-body-'+i).append($('<label/>',{'class':'label label-md label-info pull-right','data-tooltip':'toggle','title':'Category: ' + magazines[uniqueNames[i]].category, text:magazines[uniqueNames[i]].category}));

                              /**
                               * Only load if session exist
                               */

								if(session){
									$('#books-panel-footer-'+i).append($('<button/>',{
									                                     'class':'btn btn-info',
									                                     text:'Read',
									                                     'data-title':$.sha1(magazines[uniqueNames[i]].title)}));
									$('#books-panel-footer-'+i).append($('<i/>',{'data-toggle':'tooltip','title':magazines[uniqueNames[i]].format,'class':'fa fa-file-pdf-o fa-2x pull-right','aria-hidden':'true','style':'color:red;'}));
							    }
				}//end for loop

							/**
							 * Button press open file
							 */

							$('button').click(function(){
								var title = $(this).attr('data-title');
								for(var x in magazines){
									if($.sha1(magazines[x].title) === title){
										var url = magazines[x].url;
										window.open(url);
										break;
									}
								}

							});
           	};//end load_tab4


				    /**
						* Execute function when button pressed load content to tab5 Images,
						* only if session exists
					    */
							$('#li5').click(function(){
                      if(session){
                         load_tab5();
                           setInterval(function(){
                                  load_tab5();
                           }, 20000);
                      }

							});

					        var load_tab5 = function(){

					        	display_info("tab-Images",images);
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
						      /*
						       *Reverse collection to ensure picked last images will be shown first
						       */
								    uniqueNames.reverse();

								for(var i in uniqueNames){

										$('#row-images').append($('<div/>',{'class':'col-xs-6 col-sm-6 col-md-4 col-lg-4', 'id':'images-'+i,'style':'margin-top:1%;'}));
										$('#images-'+i).append($('<div/>',{'class':'panel panel-default','id':'panel-images-'+i}));
										$('#panel-images-'+i).append($('<div/>',{'class':'panel-heading panel-primary',text:`${images[uniqueNames[i]].name}`}));
										$('#panel-images-'+i).append($('<div/>',{'class':'panel-body','id':'images-panel-body-'+i}));

										  var image = new Image(300,250);
											image.src = `${images[uniqueNames[i]].path}Thumb/re_${images[uniqueNames[i]].image}`;
											image.alt = images[uniqueNames[i]].occasion;
											image.className = "img-responsive";
											image.id = "image-gallery";
										/*
										 * Add attributes description of image
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

													  $(image).mouseenter(function(e){
														  e.preventDefault();

														  width = this.width;
														  height = this.height;

														  $(this).css({'width':width + 70 ,'height':height + 100});

														  }).mouseleave(function(){
															  $(this).css({'width':width,'height':height});
														  });
						                    */
												  $('.modal-footer').append($('<button/>',{'class':'btn btn-success','data-dismiss':'modal',text:'exit'}));
												  $('#myModal').modal("toggle");
							                   }else{
							                	   return;
							                	   }//end if(id == 'image-gallery')
											});
      };//end load_tab5()

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
			     };//end music player

          /*
           *Footer
           */
              setTimeout(function(){
                load_tab0();
                footer('#tabs');
              },700);

                  /*
                   *Promises
                   */

                   let loadCommentArray = function(){
                      return new Promise(function(resolve, reject){
                         loadComments();
                         resolve('Comments Loaded')
                      });
                    };


                    let loadFavArray = function(message){
                     return new Promise(function(resolve, reject){
                       loadFavourites();
                       resolve(message + ' Favourites loaded');
                     });
                    };

                    let loadMusicArray = function(message){
                     return new Promise(function(resolve, reject){
                       load_music();
                       resolve(message + ' Music loaded');
                     });
                    };

                    let loadAlbumArray = function(message){
                     return new Promise(function(resolve, reject){
                       load_albums();
                       resolve(message + ' Albums loaded');
                     });
                    };

                    let loadVideoArray = function(message){
                     return new Promise(function(resolve, reject){
                       load_videos();
                       resolve(message + ' Video loaded');
                     });
                    };

                    let loadTvArray = function(message){
                     return new Promise(function(resolve, reject){
                       load_tvShows();
                       resolve(message + ' TV loaded');
                     });
                    };

                    let loadMagazinesArray = function(message){
                     return new Promise(function(resolve, reject){
                       loadMagazines();
                       resolve(message + ' Magazines loaded');
                     });
                    };

                    let loadImageArray = function(message){
                     return new Promise(function(resolve, reject){
                       loadImages();
                       resolve(message + ' Images loaded');
                     });
                    };

                 /*
                  *Execute Promises
                  */

                    loadCommentArray().then(function(result){
                       return loadFavArray(result);
                     }).then(function(result){
                       return loadMusicArray(result);
                     }).then(function(result){
                       return loadAlbumArray(result);
                     }).then(function(result){
                       return loadVideoArray(result);
                     }).then(function(result){
                       return loadTvArray(result);
                     }).then(function(result){
                       return loadMagazinesArray(result);
                     }).then(function(result){
                       return loadImageArray(result);
                     }).then(function(result){
                       console.log('Finished ' + result);
                     });

});
