

     sort_movies_by_category =  function(sort_category,collection){

              movieCategory = [];
				 /*
				  * Change background image
				  */
					   if(sort_category === "Adult"){
						   $('body').css({
						                 'background-image':'url(./images/backgrounds/women-sexy-white-background-9.jpg)',
						                 'background-repeat':'no-repeat',
						                 'background-size':'cover',
						                 'background-position':'20% 50%'});
					   }else{
						   $('body').css({
						                 'background-image': 'url("./images/backgrounds/a-serbian-film-52d99d57bb8db.jpg")',
						                 'background-repeat':'no-repeat',
						                 'background-size':'cover',
						                 'background-position':'80% 50%'});
					   }


		     		    for(var x in collection){
			     			if(collection[x].cat === sort_category){
			     			    var obj = new Object(video[x]);
			     				movieCategory.push(obj);
			     			}
			     		}

			     		build_sort_window(movieCategory);


			     };//end sort_movies_by_category





                    /*
                     *Separate Functions to achieve better control
                     *over sort movies by category function ==> pagination click event
                     */

                  var build_sort_window = function(collection){

                      $('#video').html('');
                      collection = movieCategory;

                    /**
                     * Display movie Rating show stars
                     */
                        var stars = function(){
                            var rating = collection[x].rating;
                            var u = 0;
                            while(u < rating){
                                $('#panel-body-'+x).append($('<span/>',{'class':'glyphicon glyphicon-star','style':'color:gold;'}));
                                u++;
                            }
                        }


                        var count = 0;
			     		for(var x in movieCategory){

			     		  count++;

			     				var dateAdded = new Date(null);
			    				var time = parseInt(movieCategory[x].date_added);
			    				dateAdded.setTime(time * 1000);

			    				var today = new Date();
			    				var date = JSON.stringify(dateAdded).substring(1,11);

			    				var timeDiff = Math.abs(today.getTime() - dateAdded.getTime());
			    				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
			    				var str = diffDays + ' days ago';

			    				var str = diffDays + " days ago";
                                var label = 'label label-lg label-';

                                        switch(true){

                                             case(diffDays == 1):
                                                str = "Today";
                                                label = label +'danger';

                                               break;

                                             case(diffDays >= 2 && diffDays <= 6):
                                                str = diffDays + " days ago";
                                                label = label +'success';
                                               break;

                                             case(diffDays >= 7 && diffDays <= 28):
                                               str = Math.floor(diffDays / 7) + " weeks ago";
                                               label = label +'info';
                                              break;

                                             case(diffDays >= 30 && diffDays <= 365):
                                               str = Math.floor(diffDays / 30) + " mont's ago";
                                               label = label +'primary';
                                              break;

                                             case(diffDays >= 365):
                                                str = Math.floor(diffDays / 365) + " years ago";
                                                label = label +'warning';
                                               break;

                                             default:
                                                str = "No Air Date";
                                                label = label +'danger';
                                              break;

                                        }

			    				var layout = (movieCategory.length % 4);
			    				var size = movieCategory.length;

                            switch(true){

                                case(layout == 1):
                                 $('#video').append($('<div/>',{
                                                      'class':'col-xs-6 col-sm-6 col-md-3 col-lg-3',
                                                      'id':'videos_'+ x,
                                                      'style':'margin-top:10px;'}));
                                break;

                                case(layout == 2 || layout == 3):
                                 $('#video').append($('<div/>',{
                                                      'class':'col-xs-6 col-sm-6 col-md-4 col-lg-4',
                                                      'id':'videos_'+ x,
                                                      'style':'margin-top:10px;'}));
                                 break;

                                case(layout == 5):
                                 $('#video').append($('<div/>',{
                                                      'class':'col-xs-6 col-sm-6 col-md-6 col-lg-6',
                                                      'id':'videos_'+ x,
                                                      'style':'margin-top:10px;'}));
                                 break;



                                default:
                                 $('#video').append($('<div/>',{
                                                      'class':'col-xs-6 col-sm-6 col-md-3 col-lg-3',
                                                      'id':'videos_'+ x,
                                                      'style':'margin-top:10px;'}));


                            }

			     $('#videos_'+x).append($('<div/>',{'class':'panel panel-default','id':'panel_'+x}));

			     /*
			      *Display video format
			      */

					  if(movieCategory[x].format == "MP4"){
								 var icon = "./images/icons/mp4.png";
					  }
					  else if(movieCategory[x].format == "AVI"){
								icon = "./images/icons/avi.png";
					  }
					  else if(movieCategory[x].format == "MKV"){
								icon = "./images/icons/mkv.png";
					  }
					  else{
								icon = "";
						  }
					  /*
					   *Check or additional player available
					   */
						 if(movieCategory[x].player){
							icon = "./images/icons/jwplayer.png";
					     }

                        /*
                         *Date and quality of video labels
                         */

                         $('#panel_'+x).append($('<div/>',{
                                                   'class':'panel-heading',
                                                   html:'<i data-title="'+ movieCategory[x].title +'" id="fav" class="fa fa-heart fa-2x pull-right"></i><h5><label class="'+ label +'">' + movieCategory[x].title + '</label></h5>'}))
                                                    .append($('<label/>',{
                                                                'class':label,
                                                                text:'Added: ' + str}))
                                                                 .append($('<label/>',{
                                                                  'class':'label label-lg label-default pull-right',
                                                                  'style':'margin:4px;',
                                                                  text:movieCategory[x].quality}));

			                    $('#panel_'+x).append($('<div/>',{'class':'panel-body','id':'panel-body-'+x}));

			                        $('#panel-body-'+x).append($('<img/>',{
                                                                 'class':'img-responsive',
                                                                 'data-toggle':'tooltip',
                                                                 'title':movieCategory[x].des,
                                                                 'src':movieCategory[x].image,
                                                                 'width':'150px',
                                                                 'height':'120px',
                                                                 'alt':movieCategory[x].title})).append('<br>');
                                /*
                                 *Print Rating of Movie
                                 */
                                    stars();

			    				$('#panel-body-'+x).append('<br />').append($('<a/>',{
			    				                             'href':movieCategory[x].url,
			    				                             'target':'_blank',
			    				                             'id':'panel-body-a-'+x}));
								$('#panel-body-a-'+x).append($('<p/>',{
								                               'class':'label label-info',
								                               'id':'btn-'+x,
								                               text:'About Movie',
								                               'aria-hidden':true}));

								/*
                                 * Append Comment icon attach function
                                 */
                                  $('#panel-body-'+x).append($('<i/>',{'class':'fa fa-comments fa-2x pull-right','id':'comments','data-index':movieCategory[x].id}));




			    				$('#panel_'+x).append($('<div/>',{
			    				                        'class':'panel-footer',
			    				                        'id':'panel-footer-'+x}));


          /**
		   * Info for loading movies in separate windows
		   * perform check on availability
		   */


                if(!movieCategory[x].video){
                                   $('#panel-footer-'+x).append($('<button/>',{
                   												 'class':'btn btn-sm pull-left btn-success',
                   												 'data-loading-text':'Loading...',
                   												 'id':'watchMovie',
                   												 text:'Watch Movie',
                   												 'data-drive':movieCategory[x].drive,
                   												 'data-src':movieCategory[x].video2,
                   												 'data-title':movieCategory[x].titleRu,
                   												 'data-image':movieCategory[x].image,
                   												 'data-des':movieCategory[x].desRu,
                   												 'data-cat':movieCategory[x].cat}))
                   												 .append($('<img/>',{
                   												           'class':'img-responsive pull-right',
                   												           'data-toggle':'tooltip',
                   												           'title':'Player 2',
                   												           'src':icon,
                   												           'data-src':movieCategory[x].player,
                   												           'id':icon.substring(15,(icon.length - 4 )),
                   												           'style':'width:30px;height:30px;margin-left:20px;'
                   												                  }));
                } else{

                         $('#panel-footer-'+x).append($('<button/>',{
                                            			'class':'btn btn-sm pull-left btn-success',
                                            			'data-loading-text':'Loading...',
                                            			'id':'watchMovie',
                                            			text:'Watch Movie',
                                            			'data-drive':movieCategory[x].drive,
                                            			'data-src':movieCategory[x].video,
                                            			'data-title':movieCategory[x].title,
                                            			'data-image':movieCategory[x].image,
                                            			'data-des':movieCategory[x].des,
                                            			'data-cat':movieCategory[x].cat}))
                                            			.append($('<img/>',{
                                            					  'class':'img-responsive pull-right',
                                            					  'data-toggle':'tooltip',
                                            					  'title':'Player 2',
                                            					  'src':icon,
                                            					  'data-src':movieCategory[x].player,
                                            					  'id':icon.substring(15,(icon.length - 4 )),
                                            					  'style':'width:30px;height:30px;margin-left:20px;'
                                            					}));
                }


                   /*
                    *Perform check for url and video player availability
                    *if player available display player icon else url icon
                    */

							if(movieCategory[x].online && !movieCategory[x].player){
									$('#panel-footer-'+x).append($('<div/>',{'class':'iframe','id':'iframe-'+x}));
									$('#iframe-'+x).append($('<a/>',{
									                         'href':movieCategory[x].online,
									                         'class':'label label-lg label-warning',
									                         'data-tooltip':'toggle',
									                         'title':'Watch Online',
									                         text:'URL','target':'_blank',
									                         'style':'margin-left:10px;'}));
							}

                    if(count >= 12){
                       break;
                    }
		     	}//end for

		     	   /*
                    *Function comments and favourites
                    */

                     $('.fa').bind({

                        click: function(){

                                     var id = $(this).attr('id');
                                     var movieId = $(this).attr('data-index');
                          /*
                           *Switch
                           */

                            switch(true){

                                 case(session && id === 'fav'):

                                    /*
                                     *Check for existing div
                                     */

                                         if(!$('#hash').length){
                                             $('head').append($('<script/>',{'src':'js/helpers/_hash.js','id':'hash'}));
                                         }


                                  var fav = $(this).attr('data-title');

                                          for(var t in favourites){

                                             if(favourites[t].user == $.sha1(user_id) && favourites[t].loved == $.sha1(fav)){
                                               console.log('It is already in your favourite list');
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
                                              'loved':$.sha1(fav)
                                         };

                                         data = $(this).serialize() + "&" + $.param(data);

                                         $.ajax({
                                              type: "POST",
                                              dataType: "json",
                                              url: "js/video/favourites.php",
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

                                        /*
                                         *Load Comment form from _video_comments.js
                                         */
                                           videoComments(movieId);


                                     break;

                                     case(!session):
                                         loginForm();
                                         return;
                                         break;


                                     default:
                                       return;



                                     }//end switch

                                },

                                       mouseenter: function(){

                                            var id = $(this).attr('data-index');
                                            var comment = $(this).attr('id');
                                            var tmp = [];

                                               if(comment !== 'comments'){
                                                  return;
                                               }

                                           if(id){
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
                                                     $(this).attr({'data-toggle':'tooltip','title':tmp[rand] + '\n'+ 'User`s rating: '+avr_rating});

                                                   }else{
                                                        $(this).attr({'data-toggle':'tooltip','title':'No Comments Available'});
                                                        id = null;
                                                        return;
                                                   }
                                           }

                                       }//end mouse enter

                                    });//end fa bind

		            /*
          		     *Click icon jwplayer redirects to external player
          		     */

          					 $('img').click(function(e){
          						e.preventDefault();
          						var src  = $(this).attr('data-src');
          						var id = $(this).attr('id');

          							if(id == 'jwplayer'){
          							  window.location.href = src;
          							}else{
          							  return;
          							}
          					 });


                    /*
                     *Play Movie in separate window
                     */

		     			$('#video button').click(function(event){

							  event.preventDefault();

                var $btn = $(this).button('loading');
							  var drive = $(this).attr('data-drive');
								var video = $(this).attr('data-src');
								var title = $(this).attr('data-title');
								var image = $(this).attr('data-image');
								var des = $(this).attr('data-des');
								var cat = $(this).attr('data-cat');

							setTimeout(function(){
									movie_window(drive,video,title,image,des,cat);
									$btn.button('reset');
							}, 1200);


							});//end

				  $('.panel-footer').css({'height':'50px'});
            /*
             * Insert Footer from _footer.js
             */
                    setTimeout(function(){
                      footer('#video');
                    },500);

             /*
              *Pagination container
              */

          $('#video').append($('<div/>',{'class':'container-fluid','id':'pagination-container'}));
          $('#pagination-container').append($('<div/>',{'class':'row','id':'pagination-row'}));
          $('#pagination-row').append($('<div/>',{'class':'col-lg-12 col-md-12 col-sm-12 col-xs-12','id':'pagination-col'}));
				  $('#pagination-col').append($('<ul/>',{'class':'pagination','style':'position:fixed; margin-left:32%;'}));

						  var domWidth = $('#video').width();
						  domWidth = Math.round(domWidth / 100);
						  var domHeight = $('#video').height();
						  domHeight = Math.round(domHeight / 100);

              var links = Math.floor(movieCategory.length / 12);

                      if(links >= 1){
                             for(var y = 1;y < links + 1;y++){

                               if(y == 1){
                                 $('.pagination').append($('<li/>',{'id':'pagination-'+y}));
                                                                  $('#pagination-'+y).append($('<a/>',{
                                                                   'href':'#',
                                                                   'style':'background-color:#ADD8E6',
                                                                   'id':'pagination-li-'+y,
                                                                   'class':'pagination-li',
                                                                   'data-index':y,
                                                                   'data-category':movieCategory[y].cat,
                                                                   html:'<i data-toggle="tooltip" title="Next page" class="fa fa-hand-o-right fa-lg" style="color:green;"></i>'}));
                                      break;
                               }
                             }

                      }else if(links == 0){
                           $('.pagination').append($('<li/>',{'id':'pagination-'+y}));
                           $('#pagination-'+y).append($('<a/>',{
                                                         'href':'#',
                                                         text:'Back',
                                                         'id':'pagination-li-back',
                                                         'class':'pagination-li',
                                                         'data-index':0,
                                                         'data-category':movieCategory[0].cat,
                                                         html:'<i data-toggle="tooltip" title="Back To Start" class="fa fa-hand-o-left fa-lg" style="color:orange;"></i>'}));
                            }else{
                                return;
                            }




							  $('.pagination-li').click(function(e){

								   e.preventDefault();

								   var cat = $(this).attr('data-category');
								   var identifier = $(this).attr('id');
								   identifier = identifier.substring(identifier.length - 4,identifier.length);

								   var id = parseInt($(this).attr('data-index'));
								   var size  = parseInt(movieCategory.length);
								   var cut = id * 12;

								   var category = $(this).attr('data-category');

								   switch(true){

								       case(identifier === 'back'):
								           sort_movies_by_category(cat,video);
								       break;

                       case(id == 0):
                         return;
                       break;

                       case(id >= 1):
                        build_sort_window(movieCategory.splice(cut - 12, cut));
                       break;


                       default:
                        break;

								   }//end switch
							  });//end $('.pagination-li')

                      $('.pagination').css({'position':'relative','bottom':domHeight+'%','left':domWidth+'%','width':(domWidth + 400)+'px'});

			   };//end function sort_movies_by_category()

			          /**
               		   * Sort by category and display then span clicked on main page
               		   * call sort_movies_by_category() function
               		   */

               		    $('#row-side-bar span').bind({



                            click: function(){


                                   var category = $(this).attr('cat');
                                   var $btn = $(this).button('loading');
                                   var age_18 = sessionStorage.getItem('age');

                                   switch(true){

                                     case(category !== 'TV' && category !== 'Adult'):

                                         setTimeout(function(){
                                            $('#video').html("");
                                            sort_movies_by_category(category,video);
                                            $btn.button('reset');
                                         },800);
                                      break;

                                      case(category == "TV"):

                                          setTimeout(function(){
                                            $('#video').html("TV SHOWS");
                                            build_tvShows();
                                            $btn.button('reset');
                                          }, 800);
                                      break;

                                      case(age_18 == null):
                                          age_verification();
                                          $btn.button('reset');
                                      break;

                                      case(age_18 == 'false'):
                                        alert('You are under age to view this material!');
                                        $btn.button('reset');
                                       return;
                                      break;

                                      case(category === "Adult" && age_18 == 'true'):

                                           setTimeout(function(){
                                               $('#video').html("");
                                                   sort_movies_by_category("Adult",video);
                                                   $btn.button('reset');
                                           }, 800);
                                      break;

                                      default:
                                         console.log('Error Default');
                                         $btn.button('reset');
                                        return;
                                      break;
                                   }
                            },

                            mouseenter: function(){

                                var category = $(this).attr('cat');
                                var numberOfObject = 0;

                                 if(category !== "TV"){
                                   for(var x in video){
                                       if(category == video[x].cat){
                                           numberOfObject++;
                                       }
                                   }
                                  }else if(category == "TV"){
                                     numberOfObject = tv_shows.length;
                                  }else{
                                     return;
                                  }

                                   $(this).html(category + ' <div class="badge badge-sm">' + numberOfObject + '</div>');


                            },

                            mouseleave: function(){

                                var category = $(this).attr('cat');
                                $(this).html(category);
                            }

               		    });
