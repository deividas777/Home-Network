 $(document).ready(function(){

      if(!$('#controller').length){
            $('head').append($('<script/>',{'src':'js/controller/controller.js','id':'controller'}));
        }

        performCheck();

        /*
         *Load Data
         */

        if(!$('#data').length){
          $('head').append($('<script/>',{'src':'js/data/data.js','id':'data'}));
        }


        $('body').append($('<div/>',{'class':'container-fluid','id':'images'}));
        $('#images').append($('<div/>',{'class':'row pull-right','id':'image'}));
        $('#images').append($('<div/>',{'class':'row pull-left','id':'row-side-bar'}));

	//CSS

      $('body').css({'max-width':'98%','height':'auto','margin':'3% 1% 1.5% 1%','padding':'1%'});
      $('.row').css({'max-width':'80%','height':'auto','margin':'1px','margin':'2px','pading':'1%'});

  	  $('#image').css({'background-image':'url(./images/backgrounds/bg.jpg)',
                       'background-size':'cover',
                       'background-repeat':'no-repeat',
                       'max-width':'84%',
                       'overflow-x':'hidden'});
	    $('#row-side-bar').css({'max-width':'10%','overflow-x':'hidden'});





	  var data = {"info":[
		                    {"cat":"Family","color":"info"},
		                    {"cat":"Summer","color":"warning"},
		                    {"cat":"Holidays","color":"success"},
		                    {"cat":"Random","color":"default"},
		                    {"cat":"Abroad","color":"info"},
		                    {"cat":"Lithuania","color":"danger"},
		                    {"cat":"Show","color":"primary"}
		             ]};//end data

          /**
          *CSS
          */
		             $('#row-side-bar').append($('<ul/>',{'class':'row-side-ul'}));
                 $('.row-side-ul').css({'list-style-type':'none'});
		   /**
		    * Build Side bar from data
		    */

		     $.each(data, function(i, val){

		     			  for(var t in val){

		     				 $('.row-side-ul').append($('<li/>',{'id':'li-'+t}));
		     				 $('#li-'+t).append($('<div/>',{'id':'container-'+t}));
		     				 $('#container-'+t).append($('<span/>',{'class':'btn btn-md pull-left btn-'+val[t].color,'id':'myBtn'+t, text:val[t].cat+ " ","cat":val[t].cat}));
		     				 $('#myBtn'+t).css({'margin':'0px 5px 5px -40px','opacity':'0.7','max-width':'120px','width':'120px'});
		     				}
		     			 });//end each


    /**
     * Sort Pictures by Category
     */

      		var sortPictures = function(collection,sort){

          			$('#image').html("");
          			var tmp = [];

          			for(var x in collection){
          				if(collection[x].cat == sort){
          				   tmp.push(collection[x]);
          				}
          			}
          			  build_images(tmp);
                  setTimeout(function(){
                    footer('#image');
                  },700);
      		 }//end SortPictures

		 /*
		  *Execute sortPictures function
		  */
            $('#row-side-bar span').click(function(){
                var sort = $(this).attr('cat');
                sortPictures(images,sort);
            });



	/**
	 * Collection of image files will be created
	 * soon as page loads
	 */


	 var build_images = function(collection){

		   var count = collection.length

	/**
	 * Get Number of required links to open ==> pagination
	 */
		 var links = Math.floor((count/12)) + 1;
		 console.log('Collection size: ' + count +'  Links shoud be created: '+links + '  Remainder: ' + (count % 12));

		if(count > 12){

			for(var t = 1; t < 13; t++){

				 var image = new Image(250,180);
				 image.src = collection[t].path + "Thumb/re_" + collection[t].image;
				 image.alt = collection[t].cat;
				 image.className = "img-responsive";

				 var path_length = collection[t].path.length;
				 var path = collection[t].path.substring(2,path_length);

				  $('#image').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4','id':'images_'+ t,'style':'margin-top:12px'}));
					$('#images_'+t).append($('<div/>',{'class':'panel panel-default','id':'panel_'+t}));
					$('#panel_'+t).append($('<div/>',{'class':'panel-heading','id':'panel-heading-'+t}));
					$('#panel-heading-'+t).append($('<span/>',{'class':'glyphicon glyphicon-tags', text:"  " + collection[t].cat}));
					$('#panel_'+t).append($('<div/>',{'class':'panel-body','id':'panel-body-'+t}));
					$('#panel-body-'+t).append(image);

					 $(image).attr({'data-toggle':'tooltip','title':collection[t].cat});
					 $('#panel_'+t).append($('<div/>',{'class':'panel-footer',
                                             'id':'panel-footer-'+t,
                                             html:'<a href="'+collection[t].path  + collection[t].image +'" target="_blank" data-tooltip="toggle" title="High Quality Image"><span class="glyphicon glyphicon-download-alt"></span></a>'}));
                     //$('#panel-footer-'+t).append($('<div/>',{'class':'pull-right','id':'footer-container-'+t}));
                     //$('#footer-container-'+t).append($('<div/>',{'class':'fb-share-button','data-href':window.location.href.substring(0,(window.location.href.length - 11)) + path + collection[t].image,'data-layout':'button_count','data-mobile-iframe':'true'}));


			}

			    showImagesInWindow();

		/**
		 * Append at bottom pagination
		 */
		  $('#pagination').html("");
			$('body').append($('<ul/>',{'class':'pagination pagination-sm pull-right','id':'pagination','style':'margin-right:37%;'}));

			for(var s = -1; s < links; s++){

				$('#pagination').append($('<li/>',{'id':'pagination-'+ s,'data-index': s}));

			    if(s == 0){
                         $('#pagination-'+ s).append($('<a/>',{'href':'#','id':'a-'+s,
                                                       html:'<span class="glyphicon glyphicon-chevron-left"></span>','style':'margin-right:10px;'}));
                     }
                     else if(s == links - 1){
                         $('#pagination-'+ s).append($('<a/>',{'href':'#','id':'a-'+s,
                                                                html:'<span class="glyphicon glyphicon-chevron-right"></span>','style':'margin-left:10px;'}));
                     }
                     else if(s > 0 && s < 6 || s > (links - 7)) {
                          $('#pagination-'+ s).append($('<a/>',{'href':'#',text:s,'id':'a-'+s,'color':'red'}));
                        }
                     else if(s > 6 && s < (links -7)){

                          //$('#pagination-'+ s).append($('<a/>',{'href':'#',text:s,'id':'a-'+s,'style':'visibility: hidden;'}));
                          continue;
                     }
			 }

			$('#pagination li').click(function(){

		      var child = $(this).children('a').attr('id');
		      $(this).css({'color':'red'});

				  var id = $(this).attr('data-index');
				  $(id).css({'visibility':'hidden','color':'red'});

				  paginate_images(collection,id);
			});
		}
	  }//end buil_images()


	 /**
	  * Paginate pictures at bottom of page
	  */
	 var paginate_images = function(collection,index){


		 $('#image').html("");

		 var count = (index * 12) + 1;

		 for(var t = count ; t < (count + 12); t++){

			 console.log("Variable: " + t + "    Index: " + count);

			 var image = new Image(250, 180);
			 image.src = collection[t].path + "Thumb/re_" + collection[t].image;
			 image.alt = collection[t].cat;
			 image.className = "image-responsive";

			        var path_length = collection[t].path.length;
              var path = collection[t].path.substring(2,path_length);

			  $('#image').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-4','id':'images_'+ t,'style':'margin-top:12px'}));
				$('#images_'+t).append($('<div/>',{'class':'panel panel-default','id':'panel_'+t}));
				$('#panel_'+t).append($('<div/>',{'class':'panel-heading','id':'panel-heading-'+t}));
				$('#panel-heading-'+t).append($('<span/>',{'class':'glyphicon glyphicon-tags', text:"    " + collection[t].cat}));
				//$('#panel-heading-'+t).append($('<a/>',{'href':image.src,'target':'_blank','id':'image_'+t,text:"    " + collection[t].cat}));
				$('#panel_'+t).append($('<div/>',{'class':'panel-body','id':'panel-body-'+t}));
				$('#panel-body-'+t).append(image);

				$(image).attr({'data-toggle':'tooltip','title':images[t].cat,'max-width':'250px','max-height':'180px'});
        $('#panel_'+t).append($('<div/>',{'class':'panel-footer',
                                          'id':'panel-footer-'+t,
                                          html:'<a href="'+collection[t].path  + collection[t].image +'" target="_blank" data-tooltip="toggle" title="High Quality Image"><span class="glyphicon glyphicon-download-alt"></span></a>'}));

		}//end for

		    showImagesInWindow();
        setTimeout(function(){
          footer('#image');
        },700);

	 }//end paginate_images()


/**
 *Show Images in separate window
 */
	 var showImagesInWindow = function(){

		 /**
		   * Click the image
		   */
				$('img').click(function(){

					var source = $(this).attr('src');
					var info = $(this).attr('alt');
					var image = new Image(500,400);
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
					  $('.modal-header').append($('<h4/>',{'class':'modal-title',text:''}));
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

					  $('.modal-footer').append($('<button/>',{'class':'btn btn-success','data-dismiss':'modal',text:'exit'}));
					 /*
					  *Modal Toggle function
					  */
					    $('#myModal').modal("toggle");

				});
		 }//end showImagesInWindow()

	 /**
	  *Read json file and create collection that holds info about it
	  *Call build_video() function with displays video files and info about it
	  *on the page
	  */



                       let loadImageArray = function(){
                            return new Promise(function(resolve, reject){
                              loadImages();
                              resolve('Image Array loaded');
                           });
                         };

                       let loadFavArray = function(message){
                             return new Promise(function(resolve, reject){
                               loadFavourites();
                               resolve(message + ' FAV Array loaded');
                             });
                            };

                       let loadCommentArray = function(message){
                          return new Promise(function(resolve, reject){
                            loadComments();
                            resolve(message + ' Comment Array Loaded');
                          });
                        };



                /*
                 *Load Promises
                 */
                        loadImageArray().then(function(result){
                           return loadFavArray();
                         }).then(function(result){
                           return loadCommentArray(result);
                         }).then(function(result){
                           console.log('Finished ' + result);
                         });

                         setTimeout(function(){
                           build_images(images);
                         },300);

           /*
            *Footer
            */
               setTimeout(function(){
                 footer('#image');
               },700);




  });
