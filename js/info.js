

      confirmation = sessionStorage.getItem('confirm');
      session = sessionStorage.getItem('session');
      user_id = null;
      var userEmail = '';
      var userPass = '';


      var counter = 0;

      /*
       *Get User
       */

        getUser = function(){

         if(session){
              if(!$('#cookie').length){
                   $('head').append($('<script/>',{'src':'js/helpers/js.cookie.js','id':'cookie'}));
                 }

             var cookies = [];
             var user = [];

             cookies.push(Cookies.getJSON());

                     $.each(cookies, function(){
                      $.each(this, function(name, value){
                          var obj = new Object({
                             'id':name,
                             'value':value
                          });
                          user.push(obj);
                       });
                     });


                for(var t in user){
                   if(user[t].value.length == session.length){
                      user_id = user[t].id;
                      break;
                    }
                  }
             }else{
                return false;
              }
       };//end get user

       /*
        *
        */

         var displayInfo = function(){

                if(confirmation == null || confirmation == false){


                    $('footer').remove();
                    $('body').append($('<footer/>'));
                    $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));

                    $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
                    $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
                    $('.modal-content').append($('<div/>',{'class':'modal-header'}));
                    $('.modal-header').append($('<button/>',{'class':'close','data-dismiss':'modal','aria-label':'Close'}));
                    $('.close').append($('<span/>',{'aria-hidden':true,text:'X'}));
                    $('.modal-header').append($('<h2/>',{'class':'modal-title',html:'<label class="label label-lg label-danger">' + "Warning" + '<label/>','style':'font-size:1.7em;font-family: "Gill Sans Extrabold", Helvetica, sans-serif;'}));
                    $('.modal-content').append($('<div/>',{'class':'modal-body'}));
                    $('.modal-body').append($('<p/>',{text:'Please leave this page if you are not invited by the author of this project to view content of this project. In other circumstances your IP will be recorded and blocked!' }));
                    $('.modal-body').append($('<article/>',{text:'This is the Raspbbery Pi project, server and all services runs on Raspberry pi 3, this is a Testing ground for different services and ideas, at this moment this is a personal Home Network Project built on Bootstrap, Jquery and Dynamic IP, that includes access to the multiple files on users PC.'}));

                    $('.modal-body').append($('<img/>',{'src':"./images/icons/warning.jpg",'class':'img-responsive','width':'250px','height':'280px','id':'poster-image'})).append('<br />');
                    $('.modal-body').append($('<article/>',{html:'<strong>Press Stay button to confirm that you are invited to view the content of this website by the author of this project</strong><br />'}));
                    $('.modal-body').append($('<a/>',{'href':'https://ie.linkedin.com/in/deividas-onaitis-3aa74142','type':'button','class':'btn btn-primary',text:"Linked In",'data-container':'body','data-toggle':'popover','data-placement':'right','data-content':""})).append('<br><br />');

                    $('.modal-body').append($('<div/>',{'class':'modal-footer'}));
                    $('.modal-footer').append($('<div/>',{'class':'btn btn-info btn-md',text:'Stay','id':'confirm','data-info':'stay'}));

                       $('#confirm').bind({

                          click: function(){
                                 var confirm = $(this).attr('data-info');
                                 console.log(confirm);

                                 switch (true) {
                                    case confirm === "stay":
                                    loginForm();
                                    sessionStorage.setItem('confirm',true);
                                    clearInterval();
                                     break;
                                   default:
                                   sessionStorage.setItem('confirm',false);

                                 }

                          }
                       });
                    }else{
                       return;
                    }

                 $('#myModal').modal("toggle");
         };//end display info()




          /*
           *Get User Confirmation Status if he is allowed to stay on page
           *
           */


             var askQuestion = function(){
                  var confirmation = sessionStorage.getItem('confirm');
                  var session = sessionStorage.getItem('session');
                     if(confirmation == null || confirmation == false || session == null || session == false){
                          displayInfo();
                     }else{
                          clearInterval();
                          return;
                          }
                 };//end askQuestion


            /*
             *Execute Function every 6 seconds
             */
                setInterval(function(){
                           askQuestion();
                      },60000);


            /*
             *Validate email & password functions
             */
                  var validEmail = function(email){
                    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,100}))$/;
                    if (filter.test(email)) {
                       return true;
                    }
                    else {
                       return false;
                    }
                  };

                  var validPassword = function(pass){
                      var filter = /^(?=.*[a-z])[a-zA-Z\d]{8,16}$/;
                      var filter2 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
                      if(filter.test(pass) || filter2.test(pass)){
                        return true;
                      }else{
                        return false;
                      }
                  };


              /*
               *Voice Recorder
               *
               */



               var voice = function(){

                  $('#myModal').html("");
                                    $('footer').remove();
                                    $('body').append($('<footer/>'));
                                    $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));

                                    $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
                                    $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
                                    $('.modal-content').append($('<div/>',{'class':'modal-header'}));
                                    $('.modal-header').append($('<button/>',{'class':'close','data-dismiss':'modal','aria-label':'Close'}));
                                    $('.close').append($('<span/>',{'aria-hidden':true,text:'X'}));
                                    $('.modal-header').append($('<h2/>',{'class':'modal-title',html:'<label class="label label-lg label-info">' + "Phrase" + '<label/>','style':'font-size:1.7em;font-family: "Gill Sans Extrabold", Helvetica, sans-serif;'}));
                                    $('.modal-content').append($('<div/>',{'class':'modal-body'}));

                                    $('.modal-body').append($('<form/>',{'id':'user-form'}));
                                    $('#user-form').append($('<div/>',{'class':'form-group'}));
                                    $('.form-group').append($('<label/>',{'id':'label-voice','type':'text','for':'voice',text:'voice'}));
                                    $('.form-group').append($('<input/>',{'type':'text','class':'form-control','id':'voice','placeholder':'voice','name':'voice'}));
                                    $('.form-group').append($('<button/>',{'class':'fa fa-microphone','id':'microphone'}));
                                    $('.form-group').append($('<button/>',{'class':'btn btn-primary btn-sm pull-right','id':'confirm-phrase',text:'confirm'}));

                                    //<i class="fa fa-plus-square" aria-hidden="true"></i>

                                    $('#myModal').modal("toggle");

                                    $('#microphone').click(function(e){
                                          e.preventDefault();
                                          startConverting();
                                    });

               };//end voice

               var r = '';
               var finalTranscripts = '';
               var interimTranscripts = '';


                var startConverting = function () {

                        r = document.getElementById('voice');

                            if('webkitSpeechRecognition' in window){
                              var speechRecognizer = new webkitSpeechRecognition();
                              speechRecognizer.continuous = true;
                              speechRecognizer.interimResults = true;
                              speechRecognizer.lang = 'en-EN';
                              speechRecognizer.start();

                              //var finalTranscripts = '';

                              speechRecognizer.onresult = function(event){
                                //var interimTranscripts = '';
                                for(var i = event.resultIndex; i < event.results.length; i++){
                                  var transcript = event.results[i][0].transcript;
                                  transcript.replace("\n", "<br>");
                                  if(event.results[i].isFinal){
                                    finalTranscripts += transcript;
                                  }else{
                                    interimTranscripts += transcript;
                                  }
                                }


                                // alert(finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>');
                                //r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
                                r = finalTranscripts;// + '<span style="color:#999">' + interimTranscripts + '</span>';
                                $('#voice').val(r);
                              };
                              speechRecognizer.onerror = function (event) {
                              };
                            }else{
                              r.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
                            }

                        };//end startConverting




               /*
                *Registration Form
                *
                */


                    var registrationForm = function(){

                                    $('#myModal').html("");
                                    $('footer').remove();
                                    $('body').append($('<footer/>'));
                                    $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));

                                    $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
                                    $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
                                    $('.modal-content').append($('<div/>',{'class':'modal-header'}));
                                    $('.modal-header').append($('<button/>',{'class':'close','data-dismiss':'modal','aria-label':'Close'}));
                                    $('.close').append($('<span/>',{'aria-hidden':true,text:'X'}));
                                    $('.modal-header').append($('<h2/>',{'class':'modal-title',html:'<label class="label label-lg label-info">' + "Registration Form" + '<label/>','style':'font-size:1.7em;font-family: "Gill Sans Extrabold", Helvetica, sans-serif;'}));
                                    $('.modal-content').append($('<div/>',{'class':'modal-body'}));

                                    $('.modal-body').append($('<form/>',{'id':'user-form'}));
                                    $('#user-form').append($('<div/>',{'class':'form-group'}));

                                    var data = [
                                                {
                                                   name:"email",
                                                   type:"email"
                                                },
                                                {
                                                   name:"password",
                                                   type:"password"
                                                }

                                                ];

                                    for(var z in data){
                                       if(data[z].name !== "password"){
                                         $('.form-group').append($('<label/>',{'id':'label-'+data[z].name,'type':data[z].type,'for':data[z].name,text:data[z].name.toUpperCase()}));
                                         $('.form-group').append($('<input/>',{'type':data[z].type,'class':'form-control','id':data[z].name,'placeholder':data[z].name.toUpperCase(),'name':data[z].name}));

                                      // }else if(data[z].name == "voice"){
                                      //    $('.form-group').append($('<label/>',{'id':'label-'+data[z].name,'type':data[z].type,'for':data[z].name,text:data[z].name.toUpperCase()}));
                                      //    $('.form-group').append($('<input/>',{'class':'voiceR','type':data[z].type,'class':'form-control','id':data[z].name,'placeholder':data[z].name.toUpperCase(),'name':data[z].name}));
                                      //    $('.voiceR').append($('<i/>'),{class:'glyphicon glyphicon-volume-up','id':'voiceRecorder'});
                                      }


                                       else{
                                         var count = 0;
                                         while(count < 1){
                                           count++;
                                           $('.form-group').append($('<label/>',{'id':'label-'+data[z].name,'type':data[z].type,'for':data[z].name,text:data[z].name.toUpperCase()}));
                                           $('.form-group').append($('<input/>',{'type':data[z].type,'class':'form-control','id':data[z].name,'placeholder':data[z].name.toUpperCase(),'name':data[z].name}));
                                           if(count == 1){
                                               $('.form-group').append($('<label/>',{'id':'label-repeat','type':data[z].type,'for':data[z].name,text:'REPEAT '+ data[z].name.toUpperCase()}));
                                               $('.form-group').append($('<input/>',{'type':data[z].type,'class':'form-control','id':'repeat','placeholder':data[z].name.toUpperCase(),'name':'REPEAT' + data[z].name}));
                                           }
                                         }
                                        }

                                    }

                                     $('.modal-content').append($('<div/>',{'class':'modal-footer'}));
                                     $('.modal-footer').append($('<button/>',{'class':'btn btn-md btn-primary pull-right','id':'submitREGISTRATION',text:'Register'}));


                            $('#submitREGISTRATION').click(function(e){

                                     var emailUser = $('#email').val();
                                     var passwordUser = $('#password').val();
                                     var repeatPassword = $('#repeat').val();
                                     var phrase = $('#voice').val();

                                  //Execute Voice Function
                                     voice();


                                $('#confirm-phrase').click(function(e){

                                      e.preventDefault();

                                      phrase = $('#voice').val();
                                      //alert(emailUser +' : '+ repeatPassword + ' : '+ passwordUser+' : '+ phrase);


                                     if(emailUser && passwordUser === repeatPassword && phrase){
                                         var login = "login";
                                     }else{
                                          $('#label-repeat').text('Passwords do not match').css({'color':'red'});
                                          return;
                                     }

                                                 if(validEmail(emailUser)  == true){
                                                   emailUser = emailUser;
                                                 }else{
                                                   emailUser = '';
                                                   $('#label-email').text('Check Email Address').css({'color':'red'});
                                                   return;
                                                 }

                                                 if(validPassword(passwordUser) == true){
                                                   passwordUser = passwordUser + phrase;
                                                 }else{
                                                   passwordUser = '';
                                                   $('#label-password').text('Wrong Password').css({'color':'red'});
                                                   return;
                                                 }


                                    $.post(
                                           "../registration.php",
                                           {
                                              email: emailUser,
                                              password: passwordUser,
                                              login: login
                                           },

                                           function(response,status){

                                               if(status === 'success'){
                                                   setTimeout(function(){
                                                     loginForm();
                                                   }, 1000);

                                               }else{

                                               setTimeout(function(){
                                                   registrationForm();
                                               }, 1000);

                                               }

                                           }
                                    );

                                 e.preventDefault();

                              });//end #confirm-phrase
                            });//end #submitREGISTRATION

                                    $('#myModal').modal("toggle");

            };//end Registration Form



              /*
               *Login form function
               *
               */



               var loginForm = function(){

                                  $('#myModal').html("");
                            			$('footer').remove();
                            			$('body').append($('<footer/>'));
                            			$('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));

                            			$('#myModal').append($('<div/>',{'class':'modal-dialog'}));
                            			$('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
                            			$('.modal-content').append($('<div/>',{'class':'modal-header'}));
                            			$('.modal-header').append($('<button/>',{'class':'close','data-dismiss':'modal','aria-label':'Close'}));
                            			$('.close').append($('<span/>',{'aria-hidden':true,text:'X'}));

                                            // $('.close').click(function(e){
                                            //     sessionStorage.clear();
                                            // });

                            			$('.modal-header').append($('<h2/>',{'class':'modal-title',html:'<label class="label label-lg label-danger">' + "Warning" + '<label/>','style':'font-size:1.7em;font-family: "Gill Sans Extrabold", Helvetica, sans-serif;'}));
                            			$('.modal-content').append($('<div/>',{'class':'modal-body'}));

                            			$('.modal-body').append($('<form/>',{'id':'user-form'}));
                            			$('#user-form').append($('<div/>',{'class':'form-group'}));

                            			$('.form-group').append($('<label/>',{'type':'text','for':'user',text:'User'}));
                            			$('.form-group').append($('<input/>',{'type':'email','class':'form-control','id':'email','placeholder':'User','name':'email'}));

                                        $('.form-group').append($('<label/>',{'type':'text','for':'password',text:'Password'}));
                                        $('.form-group').append($('<input/>',{'type':'password','class':'form-control','id':'password','placeholder':'Password','name':'password'}));

                                        $('.modal-content').append($('<div/>',{'class':'modal-footer'}));
                                        $('.modal-footer').append($('<button/>',{'class':'btn btn-md btn-primary pull-right','id':'submit',text:'Submit'}));
                                        $('.modal-footer').append($('<button/>',{'class':'btn btn-md btn-primary pull-left','id':'registration',text:'Registration'}));

                       $('#registration').click(function(){
                             registrationForm();
                       });

                       $('#submit').click(function(e){


                               counter++;
                               userEmail = $('#email').val();
                               userPass = $('#password').val();
                               var phrase = $('#voice').val();
                               alert(userEmail +' : '+ userPass);


                               //Execute Voice Function
                                voice();


                         $('#confirm-phrase').click(function(e){


                                phrase = $('#voice').val();

                                alert(userEmail +' : '+ userPass + ' : '+ phrase);


                                switch(true){

                                  case(counter > 3):
                                     sessionStorage.clear();
                                     location.replace("http://google.com");
                                  break;

                                  case(!userEmail || !userPass):
                                     alert('Email and Passwords Fields can not be empty!');
                                  break;

                                  case(validEmail(userEmail) == true && validPassword(userPass) == true):

                                   userEmail = userEmail;
                                   userPass = userPass + phrase;
                                   var login = 'login';


                                        $.post(
                                              "../users.php",
                                              {
                                                 email: userEmail,
                                                 password: userPass,
                                                 login : login
                                              },

                                              function(response,status){

                                                var res = $.trim(response);

                                                if(userEmail === res){

                                                    if(!$('#hash').length){
                                                      $('head').append($('<script/>',{'src':'js/helpers/_hash.js','id':'hash'}));
                                                    }
                                                    if(!$('#cookie').length){
                                                     $('head').append($('<script/>',{'src':'js/helpers/js.cookie.js','id':'cookie'}));
                                                    }

                                                 var cookie = Cookies.get(res);

                                                 var x = res.length + userPass.length;
                                                 var pass = $.sha1(res);
                                                 for(var y = 0; y < x; y++){
                                                          pass = $.sha1(pass);
                                                   }

                                                         if(cookie === pass){
                                                                sessionStorage.setItem('session',$.sha1(res));
                                                                sessionStorage.setItem('confirm','true');
                                                                clearInterval();
                                                                $('#myModal').modal("toggle");

                                                                setTimeout(function(){
                                                                  var page = window.location.pathname;
                                                                  window.location.replace(page);
                                                                }, 300);
                                                         }else{
                                                            loginForm();
                                                            return;
                                                         }

                                                }else{
                                                  loginForm();
                                                }
                                              }//end function(response,status)
                                       );//end POST


                                   break;

                                  // case(validEmail(userEmail) == false || validPassword(userPass) == false):
                                  //      var userEmail = '';
                                  //      var userPass = '';
                                  //      alert('Check Password or Email Format');
                                  //      return;
                                  // break;


                                  default:
                                       sessionStorage.clear();
                                       location.replace("http://www.w3schools.com");
                                }
                                e.preventDefault();
                      });
                             e.preventDefault();
                 });//end Submit
                            			$('#myModal').modal("toggle");

      };//end Login Form ()
