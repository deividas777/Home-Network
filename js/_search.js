
(function ($){

/*
 *Search for field, searches collections
 */

    $('.paragraph-search').click(function(){

           var search = $(this).attr('data-val');

           if(search === "Images" || !session){
              this.off();
              return;
           }

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
                    $('.modal-header').append($('<h4/>',{'class':'modal-title',text:'Search: ' + search}));
                    $('.modal-content').append($('<div/>',{'class':'modal-body'}));
                    $('.modal-body').append($('<input/>',{'class':'search','id':search,'type':'text','value':'Search'}));
                    $('.modal-body').append($('<button/>',{'class':'btn btn-sm btn-info pull-right',text:'Search'}));

                        $('.modal-body').append($('<div/>',{'class':'modal-footer'}));


                          $('button').click(function(e){

                              e.preventDefault();
                              var tmp = [];

                                 /*
                                  *Get Value from input
                                  */

                                 var value = $('.search').val();
                                 value = value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                                 value = value.substring(0,24);

                                 switch(true){

                                   case(search == "Music"):

                                        collection = music;
                                     for(var x in collection){
                                         if(value === collection[x].artist){
                                             tmp.push({"track":collection[x].music,"title":collection[x].title});
                                          }
                                     }

                                     if(tmp.length > 0){
                                        $('.search-div').remove();

                                          for(var x in tmp){
                                              $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg"> ' + tmp[x].title + '</badge>'}));
                                          }
                                     }else{
                                            $('.search-div').remove();
                                            $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg"> '+ "Not Found!" + '</badge>'}));
                                          }
                                   break;

                                   case(search == "Songs"):

                                     collection = music;

                                       for(var x in collection){
                                         if(value == collection[x].title){
                                              tmp.push({"title":collection[x].title,"artist":collection[x].artist,"album":collection[x].album,"des":collection[x].des});
                                         }
                                       }
                                          if(tmp.length > 0){
                                            $('.search-div').remove();
                                              for(var x in tmp){
                                                 $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg"> '+ "Album: " + tmp[x].album+ " Artist:" + tmp[x].artist + '</badge>'}));
                                              }
                                          }else{
                                                $('.search-div').remove();
                                                $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg"> '+ "Not Found!" + '</badge>'}));
                                              }

                                          /*
                                           *Mouse enters badge show album info
                                           */
                                               $('badge').bind({
                                                 mouseenter: function(){
                                                             $(this).attr({'data-toggle':'tooltip','title':tmp[0].des});
                                                 },
                                                 mouseleave: function(){
                                                             $(this).removeAttr('data-toggle').removeAttr('title');
                                                 }
                                               });
                                   break;

                                     case(search == "Albums"):

                                       collection = albums_collection;

                                        for(var x in collection){
                                            if(value == collection[x].artist || value == collection[x].album_title && value !== ""){
                                                 tmp.push({"artist":collection[x].artist,"album_title":collection[x].album_title,"tracks":collection[x].tracks});
                                                 //collection.push(new Object({"mp3":albums_collection[x].path+albums_collection[x].tracks[y],"oga":albums_collection[x].path+albums_collection[x].tracks[y],"title":trackName,"artist":albums_collection[x].artist,"rating":albums_collection[x].rating,"cover":albums_collection[x].image}));

                                              }
                                        }
                                        if(tmp.length > 0){
                                            $('.search-div').remove();
                                          for(var x in tmp){
                                               $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg" data-index="'+ x +'"> '+ tmp[x].artist + "  " +tmp[x].album_title+ '</badge>'}));
                                             }
                                                $('badge').mouseenter(function(e){
                                                     e.preventDefault();
                                                     var index = $(this).attr('data-index');
                                                         $(this).attr({'data-toggle':'tooltip','title':tmp[index].tracks});
                                                }).mouseleave(function(){
                                                         $(this).removeAttr('data-toggle').removeAttr('title');
                                                });
                                          }else{
                                                 $('.search-div').remove();
                                                 $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg"> '+ "Not Found!"+ '</badge>'}));
                                            }
                                     break;

                                     case(search == "Video"):

                                          collection = video;

                                          for(var x in collection){
                                            if(value == collection[x].title && collection[x].cat !== "Adult"){
                                              tmp.push(new Object(collection[x]));
                                            }
                                          }
                                          if(tmp.length > 0){
                                            $('.search-div').remove();
                                            for(var x in tmp){
                                                 $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg" data-index="'+ x +'"> '+ tmp[x].title +'</badge><button class="btn btn-md btn-default pull-right" data-index="'+x+'">'+"Play"+'</button>'}));
                                               }
                                          }else{
                                                   $('.search-div').html();
                                                   $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg"> '+ "Not Found" +'</badge>'}));
                                          }

                                            $('button').click(function(e){
                                                e.preventDefault();
                                                var id = $(this).attr('data-index');

                                             //Call function from _movie_window.js
                                                movie_window(tmp[id].drive,tmp[id].video,tmp[id].title,tmp[id].image,tmp[id].des,tmp[id].cat);
                                            });
                                     break;

                                     case(search == 'Books'):

                                       collection = magazines;

                                       for(var x in collection){
                                           if(collection[x].title == value){
                                                tmp.push(new Object(collection[x]));
                                           }
                                         }

                                         if(tmp.length > 0){
                                            $('.search-div').remove();
                                              for(var x in tmp){
                                                $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg" data-index="'+ x +'"> '+ tmp[x].title +'</badge><button id="Books" class="btn btn-md btn-default pull-right" data-index="'+x+'">'+"Read"+'</button>'}));
                                              }

                                              $('button').click(function(e){
                                                  e.preventDefault();
                                                  var index = $(this).attr('data-index');
                                                  var id = $(this).attr('id');

                                                    if(id == 'Books'){
                                                       var url = tmp[x].url;
                                                       window.open(url);
                                                    }else{
                                                        return;
                                                    }
                                                 });


                                         }else{
                                                $('.search-div').html();
                                                $('.modal-body').append($('<div/>',{'class':'search-div',html:'<badge class="badge badge-success badge-lg"> '+ "Not Found" +'</badge>'}));
                                         }

                                     break;

                                     case(search == ""):
                                          alert('Please enter some value to start Search!');
                                     break;

                                 default:
                                   return;
                                   break;

                                 }//end switch

    });

                              /*
                               * Toggle modal
                               */
                                  $('#myModal').modal("toggle");
  });

}(jQuery));

