
$(function(){

   $('head').append($('<link/>',{'rel':'stylesheet','href':'./css/stylesheet.css'}));
    var data = [
                  {
                    'title':'Home',
                    'class':'fa fa-home'
                  },
                  {
                    'title':'About',
                    'class':'fa fa-user-secret'
                  },
                  {
                    'title':'Search',
                    'class':'fa fa-search'
                  },
                  {
                   'title':'Contact',
                   'class':'fa fa-commenting'
                  }
                ];

        $('#side-container-fluid').append($('<div/>',{'class':'container','id':'side-slider'}));
        $('#side-slider').append($('<ul/>',{'id':'navigation'}));

        for(var x in data){
           $('#navigation').append($('<li/>',{'class':data[x].class,html:'<a href="#" title="'+data[x].title+'"><span>"'+data[x].title+'"<i class="'+data[x].class+'"></i></span></a>'}));
        }

              $('#navigation a').stop().animate({'marginLeft':'-55px'},1000);

                        $('#navigation > li').hover(function(){
                                $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
                            },
                            function () {
                                $('a',$(this)).stop().animate({'marginLeft':'-55px'},200);
                            }
                        );


});
