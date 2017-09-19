
				/**
			   * Age verification modal
			   */

				  var age_verification = function(){

					  var info = ['This section may contain adult oriented material of a graphic and sexual nature, and could be viewed objectionable to some persons This material is intended for persons over 18 ' +
					              'years of age, and may be against the law in some areas. If you are accessing this area from any location that deems this type of material to be inappropriate or illegal, you should not proceed '+
					              'You must agree with each of the following statements and indicate your comprehension and permission to abide by the laws that are applicable to you in your geographical location ' +
					              'I am an adult, being of legal age, 18 or 21, in my legal jurisdiction to view adult oriented material that may be sexual or graphical in nature. (Local laws vary throughout the United States, so if you are not 100% sure of the laws applicable to you, you are advised to proceed no further. '+
					              'I will not redistribute this material to anyone for which it is illegal for them to view or possess such material, nor will I permit any minor, or any person who would find this personally offensive, to view this material '+
					              'I will hold harmless homenetwork.com, its officers, ISP and employees, from and against any claims, liability, losses, costs, damages, or expenses arising from my use of or participation in this service or the information contained therein. Furthermore, I will defend homenetwork.com, against all claims of impropriety regarding my use of this service '
					               ];

					  $('#myModal').html("");
					  $('body').append($('<footer/>'));
					  $('footer').append($('<div/>',{'class':'modal fade','id':'myModal','role':'dialog'}));
					  $('#myModal').append($('<div/>',{'class':'modal-dialog'}));
					  $('.modal-dialog').append($('<div/>',{'class':'modal-content'}));
					  $('.modal-content').append($('<div/>',{'class':'modal-header'}));
					  $('.modal-header').append($('<button/>',{'class':'close', 'data-dismiss':'modal'}));
					  $('.modal-header').append($('<h4/>',{'class':'modal-title',text:'Age Verification'}));
					  $('.modal-content').append($('<div/>',{'class':'modal-body'}));
					  $('.modal-body').append($('<p/>',{text:info}));
					  $('.modal-body').append($('<div/>',{'class':'modal-footer'}));

					  $('.modal-footer').append($('<button/>',{'class':'btn btn-success','data-dismiss':'modal',text:'I accept','id':'age-yes'}));
					  $('.modal-footer').append($('<button/>',{'class':'btn btn-dangert','data-dismiss':'modal',text:'I reject','id':'age-no'}));

					/**
					 * Click to check age
					 */
					  $('.modal-footer button').click(function(){

                                  var id = $(this).attr('id');
                                  var age_18 = sessionStorage.getItem('age');
                                  var path = window.location.pathname;
					              console.log(path);



                            if(age_18 == null){

                                  if(id == "age-no"){

                                      sessionStorage.setItem('age','false');

                                  }else if(id == "age-yes"){

                                      sessionStorage.setItem('age','true');

                                    /*
                                     *Execute click on button shows Adult content on the page
                                     */
                                     switch(true){

                                     	case(window.location.pathname == '/video'):
                                     	$('#myBtn4').trigger("click");
                                     	break;

                                     	case(window.location.pathname == '/book'):
                                     	//$('#navigation  li').trigger("click");
                                     	  //sort(magazines,"Adult");
                                     	break

                                     	default:
                                     	 break;
                                     }

                                  }


                            }else if(age_18 == 'false'){
                                return;
                            }
					  });//end $('.modal-footer button').click(function()

					/**
					 * Toggles modal window
					 */
					    $('#myModal').modal("toggle");
				  }//end age verification()
