                            /**
							 * Display Movie in Modal window
							 */

							     var movie_window = function(drive,movie,title,image,des,cat){

                                          var category = cat;
                                          var videoTitle = title;
                                          var tmp =[];


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

                                   if(!drive){

                                     setTimeout(function(){
											var image = new Image(50,35);
											image.src = './images/icons/public.png';
											image.className = 'img-responsive pull-right';
											image.alt = "Secure Icon";

											$(image).bind({
                                            	mouseenter: function(){
                                            		$(image).attr({'margin':'auto','data-toggle':'tooltip','title':'Available to everyone'});
                                            	},
                                            	mouseleave: function(){
                                            		$(this).removeAttr('data-toggle').removeAttr('title');
                                            	}
                                            });

											$(image).attr({'margin':'auto','data-toggle':'tooltip','title':'Available to everyone'});
											$('.modal-title').fadeIn(2000, function(){ $(this).append(image)});
                                     	}, 1200);//end setTimeout

										  $('.modal-body').append($('<div/>',{'class':'player_modal'}));
										  $('.player_modal').append($('<video/>',{'id':'video-player','width':'350','height':'220','controls':'controls', 'controlsList':'nodownload','preload':'metadata'})).css({'margin':'2px'});
										  $('#video-player').append($('<source/>',{'src':movie}));

                                      }else if(drive === 'g'){

                                      setTimeout(function(){
											var image = new Image(50,35);
											image.src = './images/icons/secure.png';
											image.className = 'img-responsive pull-right';
											image.alt = "Secure Icon";

								$(image).bind({
										 mouseenter: function(){
										    $(this).attr({'margin':'auto','data-toggle':'tooltip','title':'Protected: Only Users with Permissions can view this file'});
										 },
										 mouseleave: function(){
										    $(this).removeAttr('data-toggle').removeAttr('title');
										 },
										 copy: function(e){
                                             e.preventDefault();
                                             return false;
										 },
										 paste: function(e){
										 	e.preventDefault();
										 	return false;
										 }
										});

											$('.modal-title').append(image);

												$(image).click(function(e){
												   e.preventDefault();
												   window.open("mailto:deividas777@gmail.com?subject=I%20wish%20to%20view%20content%20of%20your%20site.");
												});

                                      }, 1200);

                                          $('.modal-body img').remove('');
                                          $('.modal-body').append($('<iframe/>',{'src':image, 'width':'200','height':'180'}));
                                          $('.modal-body').append($('<div/>',{'class':'player_modal'}));
                                      	  $('.player_modal').append($('<iframe/>',{'src':movie,'id':'video-player','width':'350','height':'220','controls':'controls', 'preload':'metadata','frameborder':0, 'scrolling':'auto', 'allowfullscreen': true})).css({'margin':'2px'});

                                             /*
                                              *Stop Playing video
                                              */
												 $('.close').click(function(){
													  $('#video-player').removeAttr('src');
												 });
                                      }else{
                                              return;
                                      }//end if(!drive)

										  $('.modal-content').append($('<div/>',{'class':'modal-footer'}));
										  $('.modal-footer').append($('<p/>',{'class':'label label-warning label-lg pull-left','id':'similar-movies',text:'Latest Movies In this Category'}));
										  $('#similar-movies').append($('<hr/>'));


										  for(var x in video){

										    if(video[x].cat == category && video[x].title !== videoTitle){
										       if(tmp.length >= 5){
										          break;
										       }else{
										         tmp.push(video[x].title);
										       }
										    }
										  }

										var displayInfo = function(){
										  for(var s in tmp){
											 $('#similar-movies').append($('<p/>',{
																		   'class':'label label-info label-lg pull-left',
																		   'style':'margin:4px;',
																		   'id':s,
																		   text:tmp[s]}));
										  }
										 };//end

                                        //Call Display info function
                                         displayInfo();



                          $('#similar-movies p').hover(function(e){

									  e.preventDefault();

									  var id = $(this).attr('id');
									  var image = new Image(80, 60);

									  for(var x in video){
											if(video[x].title == tmp[id]){
											   image.src = video[x].image;
											   image.className = "img-responsive";
											   image.alt = tmp[id];
											   image.id = "similarMovies";
											}
								  }

                                  $(this).html(image);

                                                 $('img').mouseenter(function(e){

                                                      e.preventDefault();
                                                      var title = $(this).attr('alt');

                                                      for(var x in video){
                                                          if(video[x].title === title){
                                                             var watchMovie = video[x];
                                                             $(this).attr({'data-tooltip':'toggle','title':watchMovie.des});
                                                                 break;
                                                          }
                                                      }

                                                      $(this).click(function(e){
                                                           e.preventDefault();
                                                           movie_window(watchMovie.drive,watchMovie.video,watchMovie.title,watchMovie.image,watchMovie.des,watchMovie.cat);
                                                         });

                                                 }).mouseleave(function(){
                                                      $(this).removeAttr('title');
                                                      id = null;

                                                 });
                                          });//end $('#similar-movies p').hover

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
						                       {"cat":"Horror","image":"./images/backgrounds/horror1.jpeg"},
						                       {"cat":"Horror","image":"./images/backgrounds/horror2.jpeg"},
						                       {"cat":"Horror","image":"./images/backgrounds/horror3.jpeg"},
						                       {"cat":"Horror","image":"./images/backgrounds/horror4.jpeg"},
						                       {"cat":"Horror","image":"./images/backgrounds/horror5.jpeg"},
						                       {"cat":"Drama","image":"./images/backgrounds/drama1.jpeg"},
						                       {"cat":"Drama","image":"./images/backgrounds/drama2.jpeg"},
						                       {"cat":"Drama","image":"./images/backgrounds/drama3.jpeg"},
						                       {"cat":"Drama","image":"./images/backgrounds/drama4.jpeg"},
						                       {"cat":"Drama","image":"./images/backgrounds/drama5.jpeg"},
																	  {"cat":"Comedy","image":"https://drive.google.com/file/d/0B1QfHow5azyIczVGZ1ZKWjBhUFk/preview"},
																	  {"cat":"Comedy","image":"https://drive.google.com/file/d/0B1QfHow5azyIZ29QeHJSMlA2UE0/preview"},
																	//  {"cat":"Comedy","image":"https://drive.google.com/file/d/0B1QfHow5azyILVlneGFJaXhWODA/preview"}
						                      ];

						   //$('#back').animate({opacity: 0}, 0).css({'background-image': 'url(http://vaughnroyko.com/jsfiddle/back.png)'}).animate({opacity: 1}, 2500);


						   for(var x in backgrounds){
							   if(backgrounds[x].cat == category){
								   tmp_coll.push(backgrounds[x]);
									 var tmp = Math.floor(Math.random() * tmp_coll.length);
									 $(element).css({'background-image': 'url("'+ tmp_coll[tmp].image +'")',
									 				 'background-repeat':'no-repeat',
									 				 'background-size':'cover','opacity':'0'}).animate({'opacity':'1'}, 2500);
								  }
						   }


						   if(tmp == null){
							   $(element).css({
							              'background-image': 'url("./images/backgrounds/a-serbian-film-52d99d57bb8db.jpg")',
							              'background-repeat':'no-repeat',
							              'background-size':'cover',
							              'background-position':'80% 50%',
							              'opacity':'0'}).animate({'opacity':'1'}, 2500);
						   }

					   };
