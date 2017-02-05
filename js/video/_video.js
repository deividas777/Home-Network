  $(document).ready(function(){


      if(!$('#controller').length){
         $('head').append($('<script/>',{'src':'js/controller/controller.js','id':'controller'}));
      }

        performCheck();



        /**
         * Collection of video files will be created
         * soon as the page loads from ==> data.js
         */

	      cat = "";



	     /*
	      *Insert Dependencies scripts
          *Separate TV and Videos into two separate groups
          *Due to Large function this method was moved to separate file
          *Call build_video() function from _build_video.js
          */

	     var dependencies = [
	                          {
                                'id':'#movie_window',
                                'script':'js/video/_movie_window.js'
	                          },
	                          {
	                            'id':'#age_check',
	                            'script':'js/_ageCheck.js'
	                          },
	                          {
	                            'id':'#build_tv',
	                            'script':'js/video/_build_tv_shows.js'
	                          },
	                          {
	                            'id':'#build_video',
	                            'script':'js/video/_build_video.js'
	                          },
	                          {
	                            'id':'#data',
	                            'script':'js/data/data.js'
	                          },
	                          {
	                            'id':'videoComments',
	                            'script':'js/video/_video_comments.js'
	                          }
	                        ];


	             for(var s in dependencies){
	               if(!$(dependencies[s].id).length){
	                 $('head').append($('<script/>',{'src':dependencies[s].script,'id':dependencies[s].id}));
	               }
	             }

      /*
       *Build Window
       */

	    $('body').append($('<div/>',{'class':'container-fluid','id':'videos'}));
      $('#videos').append($('<div/>',{'class':'row pull-right','id':'video'}));
      $('#videos').append($('<div/>',{'class':'row pull-left','id':'row-side-bar'}));
      $('#video').css({'background-image':'url(./images/backgrounds/bg.jpg)','background-size':'cover','background-repeat':'no-repeat','opacity':'0.8'});
      //$('#row-side-bar').css({'background-image':'url(./images/backgrounds/bg.jpg)','background-size':'cover','background-repeat':'no-repeat'});


        /*
         *CSS
         */

          $('body').css({'max-width':'98%','height':'auto','margin':'1%','padding':'1%','background-image': 'url("./images/backgrounds/a-serbian-film-52d99d57bb8db.jpg")','background-repeat':'no-repeat','background-size':'cover','background-position':'80% 50%'});
          $('.row').css({'max-width':'80%','height':'auto','margin':'1px','margin':'2px','pading':'1%'});
          $('#video').css({'max-width':'84%'});
          $('#row-side-bar').css({'max-width':'13%'});


		   $('#row-side-bar').append($('<ul/>',{'position':'fixed','style':'border-right:2px solid #f9f9f9;'}));

		   /**
		    * Build Side bar from data => js/data/data.js
		    */

		     $.each(data, function(i, val){

		     			  for(var t in val){

		     				  $('#row-side-bar ul').append($('<li/>',{'id':'li-'+t}));
		     				  $('#row-side-bar').find('#li-'+t).append($('<div/>',{'id':'container-'+t}));



		     				 $('#row-side-bar').find('#container-'+t).append($('<span/>',{
                                                                               'class':'btn btn-md pull-left btn-'+val[t].color,
                                                                               'data-loading-text':'Loading...',
                                                                               'id':'myBtn'+t,
                                                                                text:val[t].cat,
                                                                                'cat':val[t].cat}));
		     				 $('#row-side-bar').find('#container-'+t).find('span').css({'margin':'0px 5px 5px -50px','opacity':'0.7','width':'100px','max-width':'150px','min-width':'88px'});

		     			   }
		     			 });//end each
		     	//CSS
		     		$('#row-side-bar').find('#container').css({'margin':'5px'});
		     		$('#row-side-bar').find('ul').css({'list-style-type':'none'});


		  /**
		   * Sort and display movies on main page
		   * by category call function sort_movies_by_category
		   * from _sort_by_category.js
		   */

               if(!$('#sort_by_category').length){
                 $('head').append($('<script/>',{'src':'js/video/_sort_by_category.js','id':'sort_by_category'}));
               }



			        /**
					 * Display movie Rating show stars
					 */
						var stars = function(collection){
							var rating = collection[x].rating;
							var u = 0;
							while(u < rating){
								$('#panel-body-'+x).append($('<span/>',{'class':'glyphicon glyphicon-star','style':'color:gold;'}));
								u++;
							}
						};

                    /*
                     *Promises
                     *
                     */



                         let loadVideoArray = function(){
                           return new Promise(function(resolve, reject){
                              load_videos();
                              resolve('Video From File loaded')
                           });
                         };

                         let loadTvArray = function(message){
                          return new Promise(function(resolve, reject){
                            load_tvShows();
                            resolve(message + ' TV Array loaded');
                          });
                         };

                         let loadCommentArray = function(message){
                           return new Promise(function(resolve, reject){
                             loadComments();
                             resolve(message + ' Comment Array Loaded');
                           });
                         };

                         let loadFavArray = function(message){
                          return new Promise(function(resolve, reject){
                            loadFavourites();
                            resolve(message + ' FAV Array loaded');
                          });
                         };




                             loadVideoArray().then(function(result){
                               return loadTvArray(result);
                             }).then(function(result){
                               return loadCommentArray(result);
                             }).then(function(result){
                               return loadFavArray(result);
                             }).then(function(result){
                               console.log('Finished ' + result);
                             });



               /*
                *Footer And Video Content
                */
                  setTimeout(function(){
                    build_video(video);
                    footer('#video');

                  },1000);

  });
