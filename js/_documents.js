$(document).ready(function(){

         'use strict';

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
           
    /*
     *Get nav from data.js
     */


      $('body').append($('<div/>',{'class':'container','id':'sideContainer'}));
      $('#sideContainer').append($('<ul/>',{'id':'navigation'}));
       for(var x in nav){
          $('#navigation').append($('<li/>',{'class':nav[x].class,'data-cat':nav[x].cat}));
          $('.'+nav[x].class).append($('<a/>',{'title':nav[x].title,'id':'a'+x}));
          $('#a'+x).append($('<span/>',{'id':'span'+x,'style':'color:'+nav[x].color+';'}));
          $('#span'+x).append($('<i/>',{'class':nav[x].fa + ' pull-right','style':'color:'+nav[x].color+';'}));
       }

      //$(function() {
           $('#navigation a').stop().animate({'marginLeft':'-55px'},1000);

           $('#navigation > li').hover(function () {
               $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
           },function () {
               $('a',$(this)).stop().animate({'marginLeft':'-55px'},200);
           });
        // });

    /**
     *Build View
     */
	
        $('body').append($('<div/>',{'class':'container','id':'documents'}));
        $('#documents').append($('<div/>',{'class':'row justify-content-center"','id':'document'}));

	  
	//CSS

      $('body').css({'max-width':'98%','height':'auto','margin':'1%','padding':'1%'});
	  $('#document').css({'background-image':'url(./images/backgrounds/bg.jpg)','background-size':'cover','background-repeat':'no-repeat','overflow-x':'hidden'});

	  

			/**
			 * Click buttons on side bar to sort files by category,
			 * check if user is not under age to view material
			 */     		
			     		
			    $('#navigation  li').click(function(){
			    	
			    	var cat = $(this).attr('data-cat');

                        switch(true){

                            case(!session):
                                 askQuestion();
                            break;

                            case(cat !== 'Adult' && cat != 'undefined'):
                                  sortCategory(magazines,cat);
                            break;

                            case(sessionStorage.getItem('age') == null && cat === 'Adult'):
                                 age_verification();
                            break;

                            case(sessionStorage.getItem('age') === 'true' && cat === 'Adult'):
                                    setTimeout(function(){
                                        sortCategory(magazines,cat);
                                    }, 500);
                            break;

                            case(sessionStorage.getItem('age') === 'false' && cat === 'Adult'):
                                alert('You are under age to view this material!');
                                return;
                            break;

                            default:
                             return;
                             break;
                        }
			    

			    });//end click
			    
			  /**
			   * Function displays last date of open file
			   * and number of clicks, and opens file in new window
			   */
			    
			    var clickAndCount = function(id){
			    	
			    	 /*
				     * Bind multiple functions display last time access of file
				     */

                         $(id).bind({

                             mouseover: function(){

                             var url = $(this).attr('data-url');

                                for(var x in magazines){
                                    if(url == magazines[x].url){
                                       if(myStorage.getItem('Date'+url)){

                                           var dateOpen = myStorage.getItem('Date'+url);
                                           var size = dateOpen.length;
                                           dateOpen = dateOpen.substring(0,(size - 14));

                                           $(this).attr({'data-toggle':'tooltip',
                                                         'data-placement':'left',
                                                         'title':'Last Time viewed on  '+dateOpen,'click-number':myStorage.getItem('Clicks'+url)});
                                       }else{
                                           $(this).attr({'data-toggle':'tooltip','data-placement':'left','title':'File was never open'});
                                       }
                                    }
                                }
                             },

                             mouseleave: function(){

                                        $(this).removeAttr('title').removeAttr('data-toggle').removeAttr('data-placement').removeAttr('click-number');
                             },

                             click: function(){

                             var url = $(this).attr('data-url');

                                    for(var x in magazines){
                                        if(url == magazines[x].url){

                                    /*
                                     * Call functions on objects
                                     */
                                           magazines[x].open();
                                           magazines[x].countClicks();
                                    /*
                                     * Insert records into myStorage db
                                     */
                                           myStorage.setItem('Date'+url,magazines[x].date);
                                           myStorage.setItem('Clicks'+url,magazines[x].count);
                                           //var clicks = myStorage.getItem('Clicks'+url);
                                          /*
                                           * Open file in new window
                                           */
                                              window.open(url);
                                              break;
                                    }
                                }
                                    return false;
                             }

                             });//end bind
			    }//end clickAndCount();

			     		
			  /**
			   * Sort by category, check if user is over 18 to view adult files
			   */ 		
			     		
			     	var sortCategory = function(collection,category){
			     					     		
			     		$('#document').html("");
			     		
			     		for(var x in collection){
			     			
			     			if(collection[x].category === category){
			     				
			     				$('#document').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3','id':'documents_'+ x,'style':'margin-top:12px;'}));
								  $('#documents_'+x).append($('<div/>',{'class':'panel panel-primary','id':'panel_'+x}));					   
								  $('#panel_'+x).append($('<div/>',{'class':'panel-heading','id':'panel-heading-'+x,html:'<h5><label class="label label-lg label-warning">' + collection[x].title.substring(0,16) + '</label></h5>'}));	
								  $('#panel_'+x).append($('<div/>',{'class':'panel-body','id':'panel-body-'+x}));
							    $('#panel_'+x).append($('<div/>',{'class':'panel-footer','id':'panel-footer-'+x}));								
								  $('#panel-body-'+x).append($('<img/>',{'class':'img-responsive','data-toggle':'tooltip','title':collection[x].title,'src':collection[x].image, 'width':'150px','height':'120px','alt':collection[x].title}));
								
							if(collection[x].format === "PDF"){
									$('#panel-body-'+x).append($('<i/>',{
									                            'class':'fa fa-file-pdf-o fa-lg pull-right',
									                            'data-toggle':'tooltip',
									                            'title':collection[x].format,
									                             'style':'color:red;'}));
								}								
								$('#panel-footer-'+x).append($('<div/>',{'class':'btn btn-sm btn-info','id':'btn-'+x, text:"Read",'data-url':collection[x].url}));
						/*
						 * Display Torrent Link if torrent available
						 */	
                            if(collection[x].torrent){

                                $('#panel-footer-'+x).append($('<a/>',{'id':'torrent-'+x,'href':collection[x].torrent}));

                                   $('#torrent-'+x).append($('<i/>',{
                                                             'class':'fa fa-cloud-download fa-2x pull-right',
                                                             'data-toggle':'tooltip',
                                                             'title':'Download Torrent'}));

                                }else{
                                    $('#panel-footer-'+x).append($('<i/>',{
                                                                   'class':'fa fa-comments-o fa-2x pull-right',
                                                                   text:'',
                                                                   'data-toggle':'tooltip',
                                                                   'title':'Download Not Available',
                                                                   'style':'color:orange;'}));
                                }
                            }//end if(collection[x].category == category)
			     	}//end for() 		
			     	
			     		/**
			     		 * Function clickAndCount()
			     		 */
			     		     clickAndCount('#document .btn');

                        /**
                         *Function footer() from _footer.js
                         */

                            setTimeout(function(){
                                footer('#document');
                            },700);				 					    
			     	};// end sortCategory()
			     	
			     	

			     		
			  /**
			   * Build Window from main window data
			   */
			     
			     var build_window = function(){

			    	 var count = 0;
			    	 
			    	 for(var x in magazines){
			    		  
			    		if(magazines[x].rating !== "PG-18"){
			    			count++;
			    		     $('#document').append($('<div/>',{'class':'col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3','id':'documents_'+ x,'style':'margin-top:12px;'}));
							     $('#documents_'+x).append($('<div/>',{'class':'panel panel-info','id':'panel_'+x}));
							     $('#panel_'+x).append($('<div/>',{'class':'panel-heading',html:'<h4><label class="label label-lg label-success">' + magazines[x].title.substring(0,16) + '</label></h4>'}));
							     $('#panel_'+x).append($('<div/>',{'class':'panel-body','id':'panel-body-'+x}));

                            var path = magazines[x].image;
                            var cutPoint = magazines[x].image.length;
                            var image = magazines[x].image.substring(cutPoint,(cutPoint - 9));

							if(image !== "index.jpg" ){

							   $('#panel-body-'+x).append($('<img/>',{'class':'img-responsive','data-toggle':'tooltip','title':magazines[x].title,'src':magazines[x].image, 'width':'150px','height':'120px','alt':magazines[x].title}));
                 			   $('#panel_'+x).append($('<div/>',{'class':'panel-footer','id':'panel-footer-'+x}));

							}else {
							   $('#panel-body-'+x).append($('<div/>',{'id':'image-'+x,'data-toggle':'tooltip','title':magazines[x].title,'width':'150px','height':'120px','alt':magazines[x].title}));
                               $('#image-'+x).css('background', 'url('+magazines[x].image+') -1px -3px no-repeat');
                               $('#panel_'+x).append($('<div/>',{'class':'panel-footer','id':'panel-footer-'+x}));
							}


						
							var image = new Image(45,45);
							image.className = 'img-responsive pull-right';
							image.alt = magazines[x].title;
							
					  if(magazines[x].format == "PDF"){
								$('#panel-body-'+x).append($('<i/>',{
								                             'class':'fa fa-file-pdf-o fa-2x pull-right',
								                             'data-toggle':'tooltip',
								                             'title':magazines[x].format,
								                             'style':'color:red;'}));
							}	
					  if(magazines[x].title.substring(0,8) == "National"){
						  image.src = "./images/icons/green-jelly.png";
						  $('#panel-footer-'+x).append($('<img/>',{'class':'img-responsive pull-right','src':'./images/icons/green-jelly.png','width':'45','heigth':'45'}));
					  }else if(magazines[x].title.substring() == "Learning"){
						  image.src = "./images/icons/learn.png";
					  }else{
						   image.src = "";
					  }

					  /**
					   *Disable read button if session not set
					   */

					     if(session){
					       $('#panel-footer-'+x).append($('<div/>',{
					                                      'class':'btn btn-sm btn-info',
					                                      'id':'btn-'+x,
					                                       text:"Read",'data-url':magazines[x].url}));
					     }

			    	        
						if(count >= 12){
								break;
							 }
			    		}
		             }
			    	 
			      /**
			       *Function clickAndCount()
			       */       
			    	   clickAndCount('#document .btn');		    	 
		};//end build_window()
			     		
			     		

			     		loadMagazines();

			     		setTimeout(function(){
			     		  build_window();
			     		  footer('#document');
			     		}, 300);


});