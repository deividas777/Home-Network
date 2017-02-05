$(document).ready(function(){

        $('head').append($('<link/>',{'rel':'stylesheet', 'href': './css/bootstrap.min.css'}));
    	$('head').append($('<link/>',{'rel':'stylesheet', 'href': './css/glyphicon.css'}));
    	$('head').append($('<script/>',{'type':'text/javascript', 'src':'./js/bootstrap.min.js'}));

    var hotelGuests = [];


    function room(number,type,price,confirmed){

         this.number = number;
         this.type = type;
         this.price = price;

         if(confirmed == true){
           this.date = new Date("DD-MM-YYYY");
         }else{
           this.confirmed = false;
         }
    }

    room301 = new room(301,"D",89,true);
    console.log(room301);

       var load_page = function(){

       		 $.ajax({
       			url: 'json/sands_guests_info.json',
       			dataType: 'json',
       			success: function(data){

       			           for(var x in data.guests){
       				          for(var s in data.guests[x].address){
       				           for(var u in data.guests[x].datesStayed){
       				            for(var k in data.guests[x].rooms){
       				        	  for(var z in data.guests[x].creditCard){


       					        	var obj = new Object({
       					        	                "name":data.guests[x].name,
       					        	                "surname":data.guests[x].surname,
       					        	                "address":
       					        	                  [{
														  "street":data.guests[x].address[s].street,
														  "city":data.guests[x].address[s].city,
														  "county":data.guests[x].address[s].county
       					        	                  }],
       					        	                "phone":data.guests[x].phone,
       					        	                "mobile":data.guests[x].mobile,
       					        	                "email":data.guests[x].email,
       					        	                "datesStayed":
       					        	                       [{
                                                              "date1":data.guests[x].datesStayed[s].date1,
                                                              "date2":data.guests[x].datesStayed[s].date2,
                                                              "date3":data.guests[x].datesStayed[s].date3,
                                                              "date4":data.guests[x].datesStayed[s].date4,
                                                              "date5":data.guests[x].datesStayed[s].date5
                                                           }],
       					        	                "roomType":data.guests[x].roomType,
       					        	                "price":data.guests[x].price,
       					        	                "payment":data.guests[x].payment,
       					        	                "numberOfGuest":data.guests[x].numberOfGuest,
       					        	                "rooms":
       					        	                    [{
       					        	                       "room1":data.guests[x].rooms[k].room1,
       					        	                       "room2":data.guests[x].rooms[k].room2,
       					        	                       "room3":data.guests[x].rooms[k].room3,
       					        	                       "room4":data.guests[x].rooms[k].room4
       					        	                     }],
       					        	                "reference":data.guests[x].reference,
       					        	                "note":data.guests[x].note,
       					        	                "creditCard":
														[{
														   "number":data.guests[x].creditCard[z].number,
														   "expDate":data.guests[x].creditCard[z].expiryDate,
														   "cvv":data.guests[x].creditCard[z].cvv,
														   "cardType":data.guests[x].creditCard[z].type
														}]
       					        	                });
       					        	    hotelGuests.push(obj);
       					        	  }
       					        	}
       					          }
       				        	}
       				        }

       				        displayData(hotelGuests);

       			},
       			statusCode: {
       				404: function(){
       					alert('Problem with server, please come back later!');
       				}
       			}
       		});//end ajax
       	}//end load_page()

       	load_page();


       	$('body').append($('<div/>',{'class':'container'}));

       	var displayData = function(collection){


                        for(var x in collection){
                          for(var y in collection[x].address){
								$('.container').append($('<div/>',{'class':'col-xs-6 col-sm-6 col-md-4 col-lg-4','id':'music_'+ x,'style':'margin-top:10px;'}));
								$('#music_'+x).append($('<div/>',{'class':'panel panel-default','id':'panel_'+x}));
								$('#panel_'+x).append($('<div/>',{'class':'panel-heading',html:'<h4>' + collection[x].name + ' ' + collection[x].surname + '</h4>'}));
								$('#panel_'+x).append($('<div/>',{'class':'panel-body','id':'panel-body-'+x}));

								$('#panel-body-'+x).append($('<p/>',{html:'<h6>Street:<strong> ' + collection[x].address[y].street+'</strong></h6>'}));
								$('#panel-body-'+x).append($('<p/>',{html:'<h6>City:<strong> ' + collection[x].address[y].city+'</strong></h6>'}));
								$('#panel-body-'+x).append($('<p/>',{html:'<h6>County:<strong> ' + collection[x].address[y].county+'</strong></h6>'}));
								$('#panel-body-'+x).append($('<p/>',{text:'Phone: ' + 0 + collection[x].phone}));
								$('#panel-body-'+x).append($('<p/>',{text:'Mobile: ' + 0 + collection[x].mobile}));
								$('#panel-body-'+x).append($('<p/>',{'class':'guest-email',text:'Email: ' + collection[x].email}));
								$('#panel_'+x).append($('<div/>',{'class':'panel-footer','id':'panel-footer-'+x}));
								$('#panel-footer-'+x).append($('<div/>',{'id':'credit-card',text:'Card Type: ' + collection[x].creditCard[y].cardType}));
                          }
                        }


                  $('.guest-email').bind({

                   mouseenter: function(){
                      var email = $(this).text();
                      var cutPoint = email.length;
                      email = email.substring(7,cutPoint);
                      if(email.length > 0){
                        $(this).attr({'data-toggle':'tooltip','title':'Click to perform search ' + email});
                      }else{
                        return;
                      }

                   },
                   mouseleave: function(){
                     $(this).removeAttr('data-toggle').removeAttr('title');
                   },
                   click: function(){
                     var guestsInfo = [];
                     var countNightsStayed = 0;
                     var moneySpent = 0;
                     var arriveDate = "";
                     var email = $(this).text();
                     var cutPoint = email.length;
                     email = email.substring(7,cutPoint);


                     if(email.length > 0){
                       for(var x in hotelGuests){
                         if(hotelGuests[x].email === email){
                            var guest = new Object({
                                "datesStayed":hotelGuests[x].datesStayed,
                                "price":hotelGuests[x].price,
                            });
                                 guestsInfo.push(guest);
                         }
                       }

                       for(var t in guestsInfo){
                          var dt = guestsInfo[t].datesStayed;
                          moneySpent += guestsInfo[t].price;
                            for(var f = 0; f < dt.length;f++){

                            switch(true){

                               case(!dt[f].date1 == ""):case(!dt[f].date2 == ""):case(!dt[f].date3 == ""):case(!dt[f].date4 == ""):case(!dt[f].date5 == ""):
                                     var date1 = $.trim(String(dt[f].date1) +'\n' +String(dt[f].date2) +'\n' + String(dt[f].date3) + '\n' + String(dt[f].date4) +'\n' + String(dt[f].date5));
                                     break;

                               case(dt[f].date2 == ""):case(dt[f].date3 == ""):case(dt[f].date4 == ""):case(dt[f].date5 == ""):
                                     date1 = date1;
                                     break;

                               default:
                                  break;
                            }
                          }
                       }
                       alert('Dates:\n' + date1 + '\nNights Stayed: ' + countNightsStayed + '\nTotal Bill: ' + moneySpent );
                     }

                   }

                  });
       	}//end displayData

});