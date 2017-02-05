

              function videoComments(movieId){


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
                                                       console.log(comment);
                                                       var comment_id = 0;
                                                       var tmp = [];
                                                       var user = [];
                                                       var movie_rating = rating;


                                                    /*
                                                     *
                                                     *
                                                     */


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
                                                                 url: "js/video/videoComments.php",
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

             };