var build_tvShows = function(){

		 $('#video').html("");

		 for(var x in tv_shows){

			    /*
				 * Compare Dates Today and date of update
				 */
						var update = new Date(null);
						var time = parseInt(tv_shows[x].date_updated);
						update.setTime(time * 1000);

						var today = new Date();
						var date = JSON.stringify(update).substring(1,11);

						var timeDiff = Math.abs(today.getTime() - update.getTime());
						var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
						var str = diffDays + " days ago";


			    $('#video').append($('<div/>',{'class':'col-xs-6 col-md-3 col-lg-4 col-sm-6','id':'videos_'+ x,'style':'margin-top:12px;'}));
				$('#videos_'+x).append($('<div/>',{'class':'panel panel-default','id':'panel_'+x}));

					if(diffDays == 1){
						$('#panel_'+x).append($('<div/>',{'class':'panel-heading',html:'<h5><label class="label label-lg label-danger">' + tv_shows[x].title + " Season: " + tv_shows[x].season + '</label></h5>'})).append($('<label/>',{'class':'label label-danger',text:'Update: Today '}));
		 		    }
		            if(diffDays > 1 && diffDays < 31){
		                $('#panel_'+x).append($('<div/>',{'class':'panel-heading',html:'<h5><label class="label label-lg label-success">' + tv_shows[x].title + " Season: " + tv_shows[x].season + '</label></h5>'})).append($('<label/>',{'class':'label label-info',text:'Update: ' + diffDays + ' days ago'}));
		 	        }
		 	        if(diffDays >= 31 && diffDays <= 365){
		 	        	var month = Math.floor(diffDays / 30);
		 	        	if(month == 1){
		 	        		$('#panel_'+x).append($('<div/>',{'class':'panel-heading',html:'<h5><label class="label label-lg label-success">' + tv_shows[x].title + " Season: " + tv_shows[x].season + '</label></h5>'})).append($('<label/>',{'class':'label label-info',text:'Update: ' + month + ' month ago'}));
		 	        	}else{
		 	        		$('#panel_'+x).append($('<div/>',{'class':'panel-heading',html:'<h5><label class="label label-lg label-success">' + tv_shows[x].title + " Season: " + tv_shows[x].season + '</label></h5>'})).append($('<label/>',{'class':'label label-info',text:'Update: ' + month + ' month s ago'}));
		 	        	}
		 	        }

		            if(!diffDays){
		                $('#panel_'+x).append($('<div/>',{'class':'panel-heading',html:'<h5><label class="label label-lg label-default">' + tv_shows[x].title + " Season: " + tv_shows[x].season +'</label></h5>'})).append($('<label/>',{'class':'label label-warning',text:'No Air Date'}));
		 	        }

				$('#panel_'+x).append($('<div/>',{'class':'panel-body','id':'panel-body-'+x}));
				$('#panel-body-'+x).append($('<img/>',{'class':'img-responsive','data-toggle':'tooltip','title':tv_shows[x].des,'src':tv_shows[x].image, 'width':'150px','height':'120px','alt':tv_shows[x].title}));
				$('#panel-body-'+x).append($('<div/>',{'id':'tv_shows_button','class':'btn btn-sm btn-info pull-right','data-series':tv_shows[x].season,'data-title':tv_shows[x].title,'data-count':tv_shows[x].videos.length,'data-cat':tv_shows[x].cat,text:'Watch'}));

		 }//end for(var x in tv_shows)

		      /*
		       * Mouse enter button show number of series available to watch
		       */

				 $('#video #tv_shows_button').mouseenter(function(){
					var x = parseInt($(this).attr('data-count'));
					$(this).attr({'data-toggle':'tooltip','title':'Number of series: ' + x});
				 }).mouseleave(function(){
					 $(this).removeAttr('data-toggle').removeAttr('title');
				 });

		/*
		 * Click to view TV Shows parts available
		 */

		 $('#video #tv_shows_button').click(function(){

			/*
			 * Disable click function on button
			 */
			 //$(this).off();
		  /*
		   * Get Variables
		   */
			var count = $(this).attr('data-count');
		    parent = $(this).parent().attr('id');
			var title = $(this).attr('data-title');
			var season = $(this).attr('data-series');
			var cat = $(this).attr('data-cat');


		for(var z in tv_shows){
			if(title == tv_shows[z].title && season == tv_shows[z].season){
                for(var x = 0; x < count;x++){
                     $('#'+parent).append('<br/>').append($('<div/>',{'class':'col-sm-3','id':'col-'+season+title.substring(0,5)+x}));
                      if(watched.getItem(tv_shows[z].videos[x]) == null){
                          $('#col-'+season+title.substring(0,5)+x).append($('<label/>',{
                                                                            'class':'label label-info',
                                                                            'data-des':tv_shows[z].des,
                                                                            'data-image':tv_shows[z].image,
                                                                            'data-title':tv_shows[z].title,
                                                                            'data-cat':tv_shows[z].cat,
                                                                            'data-src':tv_shows[z].videos[x],
                                                                            'id':'part-'+x,text:'Part: ' + (x + 1)}));
                      }else{
                          $('#col-'+season+title.substring(0,5)+x).append($('<label/>',{
                                                                            'class':'label label-success',
                                                                            'data-des':tv_shows[z].des,
                                                                            'data-image':tv_shows[z].image,
                                                                            'data-title':tv_shows[z].title,
                                                                            'data-cat':tv_shows[z].cat,
                                                                            'data-src':tv_shows[z].videos[x],
                                                                            'id':'part-'+x,
                                                                            text:'Part: ' + (x + 1) + ' Watched: ' + watched.getItem(tv_shows[z].videos[x]).substring(0,16),
                                                                            'style':'margin:2px;'}));
                      }
                }//end for
		   }//end if(title == tv_shows[z].title && season == tv_shows[z].season
		}//end for(var z in tv_shows)

		/*
		 * Click to view video in separate window, change label color series that were watched
		 */
			 $('#video label').click(function(){

				    var drive = $(this).attr('data-drive');
				    var video = $(this).attr('data-src');
					var title = $(this).attr('data-title');
					var image = $(this).attr('data-image');
					var des = $(this).attr('data-des');
					var cat = $(this).attr('data-cat');

					var date = new Date();
					watched.setItem(video,date);

				/**
				 * Call movie_window() function
				 * shows movies in modal window
				 */
					movie_window(drive,video,title,image,des,cat);

				/**
				 * Change text and color of label
				 */
					 $(this).removeClass('label label-info');
					 $(this).text('Watching');
					 $(this).addClass('label label-warning',300);

			 });//end $('#video label').click(function()


	     });//end  $('#video #tv_shows_button').click(function()

	     /*
          * Insert Footer
          */
            footer('#video');


	 }//end build_tvShows ()