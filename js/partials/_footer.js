
       var footer = function(element){

                var info = [
                           {
                           'href':'https://www.facebook.com/deividas.onaitis',
                           'id':'social-fb',
                           'class':'fa fa-facebook-square fa-3x social'
                           },
                            {
                            'href':'https://twitter.com/bootsnipp',
                            'id':'social-tw',
                            'class':'fa fa-twitter-square fa-3x social'
                            },
                            {
                            'href':'https://plus.google.com/116313439884403819011',
                            'id':'social-gp',
                            'class':'fa fa-google-plus-square fa-3x social'
                            },
                            {
                            'href':'https://ie.linkedin.com/in/deividas-onaitis-3aa74142',
                            'id':'social-ln',
                            'class':'fa fa-linkedin-square fa-3x social'
                            },
                            {
                             'href':'mailto:deividas777@gmail.com',
                             'id':'social-em',
                             'class':'fa fa-envelope-square fa-3x social'
                            }
                          ];

                 $(element).append($('<div/>',{'class':'container','id':'container-footer'}));
                 $('#container-footer').append($('<div/>',{'class':'text-center center-block','id':'center-block'}));
                 $('#center-block').append($('<div/>',{'class':'container','id':'share'}));
                 $('#share').append($('<div/>',{'class':'row','id':'share-row'}));
                 $('#share-row').append($('<div/>',{'class':'col-lg-4 col-md-4 col-sm-4 col-xs-4 col-lg-4-offset-4 col-md-4-offset-4 col-sm-4-offset-4','id':'facebook'}));
                 $('#share-row').append($('<div/>',{'class':'col-lg-4 col-md-4 col-sm-4 col-xs-4 col-lg-4-offset-4 col-md-4-offset-4 col-sm-4-offset-4','id':'links'}));
                 $('#share-row').append($('<div/>',{'class':'col-lg-4 col-md-4 col-sm-4 col-xs-4 col-lg-4-offset-4 col-md-4-offset-4 col-sm-4-offset-4','id':'google'}));


                 for(var x in info){
                   $('#links').append($('<a/>',{'href':info[x].href, 'html':'<i id="'+info[x].id+'" class="'+info[x].class+'"/>'}));
                 }


             setTimeout(function(){
                 $('head').append($('<script/>',{'src':'https://apis.google.com/js/platform.js','async':true,'defer':true}));
                 $('#google').append($('<div/>',{'class':'g-plus',
                                                'data-action':'share',
                                                'data-annotation':'bubble',
                                                'data-height':24,
                                                'data-href':'http://myhomenetwork.zapto.org'}));
                 $('#facebook').append($('<iframe/>',{
                                      'src':'https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fmyhomenetwork.zapto.org&layout=button_count&size=large&mobile_iframe=true&appId=1829551920661477&width=60&height=22',
                                      'width':'60',
                                      'height':'22',
                                      'style':'border:none;overflow:hidden',
                                      'scrolling':'no',
                                      'frameborder':0,
                                      'allowTransparency':true}));
             }, 500);




       }
