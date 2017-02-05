
                                          $('#myModal').html("");
										  $('footer').remove();
										  $('body').append($('<footer/>'));
										  $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));

										  $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
										  $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
										  $('.modal-content').append($('<div/>',{'class':'modal-header'}));
										  $('.modal-header').append($('<button/>',{'class':'close','data-dismiss':'modal','aria-label':'Close'}));
										  $('.close').append($('<span/>',{'aria-hidden':true,text:'X'}));
										  $('.modal-header').append($('<h2/>',{'class':'modal-title',html:'<label class="label label-lg label-info">' + 'Form' + '<label/>','style':'font-size:1.7em;font-family: "Gill Sans Extrabold", Helvetica, sans-serif;'}));
										  $('.modal-content').append($('<div/>',{'class':'modal-body'}));
										  //$('.modal-body').append($('<img/>',{'src':image,'class':'img-responsive','width':'250px','height':'280px','id':'poster-image'})).append('<br />');
										  //$('.modal-body').append($('<button/>',{'type':'button','class':'btn btn-primary',text:"About Movie",'data-container':'body','data-toggle':'popover','data-placement':'right','data-content':des})).append('<br><br />');





                var formData = [

                             {'type':'text','name':'cat3','id':'cat3'},
                             {'type':'number','name':'length','id':'length'}
                           ];

                 //$(element).append($('<div/>',{'class':'container'}));
                 //$('.container').append($('<div/>',{'class':'row'}));
                 //$('.row').append($('<div/>',{'class':'col-xs-6 col-sm-6 col-md-6 col-lg-6 col-lg-offset-3','id':'col'}));
                 $('.modal-body').append($('<form/>',{}));

                 for(var s in formData){
                     $('form').append($('<div/>',{'class':'form-group form-group-lg','id':'form-group-'+s}));
                     $('#form-group-'+s).append($('<label/>',{
                                                  'class':'col-sm-4 control-label',
                                                  'for':formData[s].name,
                                                  text:formData[s].name.toUpperCase()}));

                     $('#form-group-'+s).append($('<input/>',{
                                                  'type':formData[s].type,
                                                  'name':formData[s].name,
                                                  'class':'form-control input-sm',
                                                  'id':formData[s].id,
                                                  'placeholder':formData[s].name}));
                 }

                 $('form').append($('<input/>',{'type':'submit','id':'submit','value':'Send'}));

                         $('#submit').bind({
                             mouseenter: function(){
                                 $('form').attr({'action':'save_json.php','method':'post'});
                             },
                             mouseleave: function(){
                                 $('form').removeAttr('action').removeAttr('method');
                             }
                         });



	

                                        /*
										 * Function toggles window
										 */
										    //$('#myModal').modal("toggle");