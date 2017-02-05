
$(document).ready(function(){


           var nav = [
               {
                 'class':'home',
                 'title':'Home',
                 'fa':'fa fa-home'
               },
               {
                'class':'about',
                'title':'About',
                'fa':'fa fa-user-secret'
               },
               {
                  'class':'search',
                  'title':'Search',
                  'fa':'fa fa-search'
                },
                {
                 'class':'contact',
                 'title':'Contact',
                 'fa':'fa fa-commenting'
                }
           ];


     $('body').append($('<div/>',{'class':'container','id':'sideContainer'}));
     $('#sideContainer').append($('<ul/>',{'id':'navigation'}));
      for(var x in nav){
         $('#navigation').append($('<li/>',{'class':nav[x].class}));
         $('.'+nav[x].class).append($('<a/>',{'href':'','title':nav[x].title,'id':'a'+x}));
         $('#a'+x).append($('<span/>',{text:nav[x].title,'id':'span'+x}));
         $('#span'+x).append($('<i/>',{'class':nav[x].fa}));
      }

      $(function() {
          $('#navigation a').stop().animate({'marginLeft':'-55px'},1000);

          $('#navigation > li').hover(function () {
              $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
          },function () {
              $('a',$(this)).stop().animate({'marginLeft':'-55px'},200);
          });
        });


});