
       var performCheck = function(){

       /*
        *Load info.js script call => getUser()
       */
                if(!$('#info').length){
                    $('head').append($('<script/>',{'src':'js/info.js','id':'info'}));
                    getUser();
                }

        /*
         *Perform check on user and session
         */
               if(!session && !user_id){
                    window.location.replace('/');
                    return false;
               }
       };//end



       var page = window.location.pathname;


              switch(page){

              case '/index.html':
                history.pushState({}, null, '/');
              break;

              case '/video/':
                history.replaceState({},null, '/video.html');
              break;

              case '/video.html':
                history.replaceState({},null, '/video');
              break;

              case '/music.html':
                history.pushState({}, null, '/music');
              break;

              case '/images.html':
               history.pushState({}, null, '/gallery');
              break;

              case '/user.html':
               history.pushState({}, null, '/loved');
              break;

              case '/documents.html':
               history.pushState({}, null, '/book');
              break;

              default:
               break;

              }
