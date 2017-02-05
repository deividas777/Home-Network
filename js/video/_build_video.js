
	 /**
	  * Build video on main page function
	  */

	    build_video = function(collection){

				/*
				 *Check for existing div
				 */

						 if(!$('#hash').length){
								 $('head').append($('<script/>',{'src':'js/helpers/_hash.js','id':'hash'}));
						 }

							var createCombainedCollection = function(){
										//console.log('User ID:' + user_id);
										var combained = [];
										for(var x in favourites){
											if($.sha1(user_id) === favourites[x].user){
												combained.push(favourites[x].loved);
											}
										}
										video.push(new Object({'favourites':combained}));
										console.log(video[video.length - 1]);

										for(var t in video[video.length - 1]){
											console.log(video[video.length - 1][t]);
										}
							};//end createCombainedCollection()

				       createCombainedCollection();



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
				};

				//console.log(`${$.sha1(user_id)}  ${$.sha1(collection[x].title)}`);
				//console.log(collection[collection.length -1].favourites);

				//for(var g in collection){
				var rt = 0;
					for(var d in collection[collection.length - 1]){
						//console.log(collection[collection.length - 1].favourites.length);

						for(var z = 0; z < collection.length; z++){

							var title = $.trim(collection[z].title);
							title = $.sha1(title);


							//console.log(collection[collection.length - 1].favourites[z]);

							if(collection[collection.length - 1].favourites[z] === title){
								rt += 1;
								console.log(collection[collection.length - 1].favourites[z]);
							}
						}
					}
					console.log(rt);
				//}
					//if(collection[collection.length -1].favourites[g] === $.sha1(collection[x].title)){

					//}
				//}
						for(var d in favourites){
							if($.sha1(user_id) == favourites[d].user.toString()){
								//console.log(favourites[d].loved);
								var faClass = 'fa fa-heartbeat fa-2x pull-right';
								var color = 'color:red;';
								$('#fav').off();
							}else{
								var faClass = 'fa fa-heart fa-2x pull-right';
								var color = 'color:black;';
							}
						}

		    /**
			 * Control number of videos display on main page max 12 on one page
			 */
			 	var counter = 0;
		    for(var x in collection){

			/*
			 * Do not allow to show on main page Adult movies
			 * Control
			 */

			if(collection[x].cat !== "Adult"){

			/*
			 * Count videos on main page counter++
			 */
				 counter++;

				$('#video').append($('<div/>',{'class':'col-xs-6 col-sm-6 col-md-4 col-lg-3','id':'videos_'+ x,'style':'margin-top:12px;'}));
				$('#videos_'+x).append($('<div/>',{'class':'panel panel-default','id':'panel_'+x}));

		/*
		 * Compare Dates Today and date of insertion of file
		 */
				var dateAdded = new Date(null);
				var time = parseInt(collection[x].date_added);
				dateAdded.setTime(time * 1000);

				var today = new Date();
				var date = JSON.stringify(dateAdded).substring(1,11);

				var timeDiff = Math.abs(today.getTime() - dateAdded.getTime());
				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
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



		     var icon = "";

			if(collection[x].format == "MP4"){
				 icon = "./images/icons/mp4.png";
	         }
	        else if(collection[x].format == "AVI"){
				icon = "./images/icons/avi.png";
	         }
	        else if(collection[x].format == "MKV"){
	    		icon = "./images/icons/mkv.png";
	         }
	         else{
	    		icon = "";
	         }
          /*
           *Check or additional player available
           */
	         if(collection[x].player){
                 icon = "./images/icons/jwplayer.png";
              }

         /*
          *Date and quality of video labels
          */



          $('#panel_'+x).append($('<div/>',{
                                    'class':'panel-heading',
                                    html:'<i style="'+ `${color}`+'" data-title="'+ collection[x].title +'" id="fav" class="'+ `${faClass}`+ '"></i><h5><label class="'+ label +'">' + `${collection[x].title}` + '</label></h5>'}))
                                     .append($('<label/>',{
                                                 'class':label,
                                                 text:'Added: ' + str}))
                                                  .append($('<label/>',{
                                                   'class':'label label-lg label-default pull-right',
                                                   'style':'margin:4px;',
                                                   text:`${collection[x].quality}`}));
          /*
           *Image
           */



				$('#panel_'+x).append($('<div/>',{'class':'panel-body','id':'panel-body-'+x}));
			    $('#panel-body-'+x).append($('<img/>',{
			                                 'class':'img-responsive',
			                                 'data-toggle':'tooltip',
			                                 'title':collection[x].des,
			                                 'src':collection[x].image,
			                                 'width':'150px',
			                                 'height':'120px',
			                                 'alt':collection[x].title})).append('<br/>');

			   /**
		        * Print Ratings of movies
		        */
				    stars();
                /*
                 * Append Comment icon attach functions
                 */
				    $('#panel-body-'+x).append($('<i/>',{'class':'fa fa-comments fa-2x pull-right','id':'comments','data-index':collection[x].id}));
				    $('#panel-body-'+x).append('<br><br />');


		  /**
		   * Info for loading movies in separate windows
		   */

				$('#panel_'+x).append($('<div/>',{'class':'panel-footer','id':'panel-footer-'+x}));

                    /*
							var response = $.ajax({
                                              url: collection[x].video,
                                              type: 'GET',
                                              async: false
                                       }).status;


                if(response !== 404){

                */


                          $('#panel-footer-'+x).append($('<button/>',{
         												 'class':'btn btn-sm pull-rigth btn-success',
         												 'data-loading-text':'Loading...',
         												 'id':'watchMovie',
         												  text:'Watch Movie',
         												 'data-drive':collection[x].drive,
         												 'data-src':collection[x].video,
         												 'data-title':collection[x].title,
         												 'data-image':collection[x].image,'data-des':collection[x].des,
         												 'data-cat':collection[x].cat}))
         												 .append($('<img/>',{
         												                  'class':'img-responsive pull-right',
         												                  'data-toggle':'tooltip',
         												                  'title':'Player 2',
         												                  'src':icon,
         												                  'data-src':collection[x].player,
         												                  'id':icon.substring(15,(icon.length - 4 )),
         												                  'style':'width:30px;height:30px;margin-left:20px;'
         												                  }));
             /*

                }

                else{

                                   var response2 = $.ajax({
                                                          url: collection[x].video2,
                                                          type: 'GET',
                                                          async: false
                                                        }).status;
                                   console.log("Response 2:" + response2);

                            if(response2 !== 404){

                                    $('#panel-footer-'+x).append($('<button/>',{
                   												 'class':'btn btn-sm pull-rigth btn-success',
                   												 'data-loading-text':'Loading...',
                   												 'id':'watchMovie',
                   												 text:'Watch Movie',
                   												 'data-drive':collection[x].drive,
                   												 'data-src':collection[x].video2,
                   												 'data-title':collection[x].titleRu,
                   												 'data-image':collection[x].image,
                   												 'data-des':collection[x].desRu,
                   												 'data-cat':collection[x].cat}))
                   												 .append($('<img/>',{
                   												                  'class':'img-responsive pull-right',
                   												                  'data-toggle':'tooltip',
                   												                  'title':'Player 2',
                   												                  'src':icon,
                   												                  'data-src':collection[x].player,
                   												                  'id':icon.substring(15,(icon.length - 4 )),
                   												                  'style':'width:30px;height:30px;margin-left:20px;'
                   												                  }));


                            }


                }


		          /**
		           * Display IMDB icon and director label
		           */

				 for(var y in data.info){
					 if(collection[x].cat == data.info[y].cat){
							$('#panel-body-'+x).append($('<a/>',{'href':collection[x].url,'target':'_blank','id':'panel-body-a-'+x}));
                            $('#panel-body-a-'+x).append($('<label/>',{'class':'label label-lg label-'+data.info[y].color,'id':'btn-'+x,'data-toggle':'tooltip','title':'IMDb'}));
                            $('#btn-'+x).append($('<i/>',{'class':'fa fa-imdb fa-lg','style':'margin-top:5px;'}));
						    $('#panel-body-'+x).append($('<label/>',{'class':'label label-lg label-primary pull-right','id':'movieDirector','data-director':collection[x].director,text:collection[x].director}));
						}
				 }//end for(var y in data.info)


			      }//end if(collection[x].cat !== "Adult")

					if(counter >= 12){
						break;
					}//count videos on main window

		       }//end for()


              /*
               *Show Movie Director information
               */
                 $('.label').hover(function(){

                     var director = $(this).attr('data-director');

                      if(director){
												var tmp = [];
														for(var x in video){
															if(director === video[x].director){
																 tmp.push(`\n${video[x].title}`);
															}
														}

														//$(this).removeAttr('onclick');
														$(this).attr({'data-toggle':'popover','data-placement':'bottom','title':`Movies: ${tmp}`});
														$(this).popover();
                      }

                 });//end label hover

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

                          var fav = $.trim($(this).attr('data-title'));

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
             				  break;


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
                            if(session){
                               var src  = $(this).attr('data-src');
                               var id = $(this).attr('id');

                                if(id == 'jwplayer'){
                                  window.location.href = src;
                                }else{
                                  return;
                                }
                            }else{
                               setTimeout(function(){
                                    loginForm();
                               }, 700);
                               return;
                            }
					 });

		    /**
		     * Click function #video button only if session set to true
		     */


				 $('#video button').click(function(event){

                     event.preventDefault();

                       if(!session){
                         askQuestion();
                         return;
                       }

					    var $btn = $(this).button('loading');
                        var drive = $(this).attr('data-drive');
                        var video = $(this).attr('data-src');
                        var title = $(this).attr('data-title');
                        var image = $(this).attr('data-image');
                        var des = $(this).attr('data-des');
                        var cat = $(this).attr('data-cat');
                    /**
                     * Call movie_window() function
                     * shows movies in modal window
                     */
                         setTimeout(function(){
                                movie_window(drive,video,title,image,des,cat);
                                $btn.button('reset');
                         },1500);
					});

		  $('.panel-footer').css({'height':'50px'});



		};//end build_video()
