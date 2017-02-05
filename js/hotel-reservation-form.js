
$(document).ready(function(){

      $(function() {
        $( "#datepicker1" ).datepicker({ dateFormat: 'yy-mm-dd' });
        $( "#datepicker2" ).datepicker({ dateFormat: 'yy-mm-dd' });
      });
	
	var data = [
                //{'type':'file','name':'file','id':'file'},
                {'label':'Title','type':'text','name':'title','id':'title'},
                {'label':'First Name','type':'text','name':'firstName','id':'firstname'},
                {'label':'Last Name','type':'text','name':'lastName','id':'lastname'},
                {'label':'Address','type':'text','name':'address','id':'address'},
                {'label':'Mobile','type':'text','name':'mobile','id':'mobile'},
                {'label':'Tel No','type':'text','name':'tel','id':'tel'},
                {'label':'Email','type':'text','name':'email','id':'email'},
                {'label':'Arrive','type':'text','name':'arrive','id':'datepicker1','class':'arrive'},
                {'label':'Depart','type':'text','name':'depart','id':'datepicker2','class':'depart'},
                //{'label':'Number of Nights','type':'text','name':'numberOfNights','id':'numberOfNights'},
                {'label':'Number of Rooms','type':'text','name':'numberOfRooms','id':'numberofRooms'},
                {'label':'Number of Guests','type':'text','name':'numberOfGuests','id':'numberOfGuests'},
                {'label':'Rate','type':'text','name':'rate','id':'rate'},
                {'label':'Discount','type':'text','name':'discount','id':'discount'},
                {'label':'Company','type':'text','name':'company','id':'company'},
                {'label':'Room Type','type':'text','name':'roomType','id':'roomType'},
                {'label':'Credit Card Number: ','type':'text','name':'creditCardNumber','id':'creditCardNumber'},
                {'label':'Expiry Date:','type':'text','name':'expiryDate','id':'expiryDate'},
                {'label':'CVV','type':'number','name':'cvv','id':'cvv'},
                {'label':'Type Of Card:','type':'text','name':'typeOfCard','id':'typeOfCard'},
                {'label':'Final Price','type':'text','name':'price','id':'price'}
              ];

        $('body').append($('<div/>', {'class': 'container'}));
        $('.container').append($('<form/>',{'class': 'form-horizontal'}));
	
	for(var x in data){

      switch (true) {

        case(data[x].name == "title"):
          var select =["Mr","Mrs","Ms","Dr","Prof"];
          $('.form-horizontal').append($('<label/>',{'class':'control-label col-sm-2','for':data[x].name,text:"Title"}));
          $('.form-horizontal').append($('<select/>',{'id':'title'}));
          for(var y in select){
              $('#title').append($('<option/>',{'value':select[y],text:select[y]}));
          }
        break;

        case (data[x].name == 'email'):
          $('.form-horizontal').append($('<div/>',{'class': 'form-group','id': 'form-input-'+data[x].name}));
          $('#form-input-'+data[x].name).append($('<label/>', {'class': 'control-label col-sm-2','for': data[x].name,text: 'Email:'}));
          $('#form-input-'+data[x].name).append($('<div/>', {'class': 'col-sm-10','id': 'input-' + data[x].name}));
          $('#input-' + data[x].name).append($('<input/>',{'type': data[x].type,'class': 'form-control','id': data[x].name,'placeholder': 'Enter Email'}));
        break;

        case(data[x].name == 'password'):
              $('.form-horizontal').append($('<div/>',{'class': 'form-group','id': 'form-input-'+data[x].name}));
              $('#form-input-'+data[x].name).append($('<label/>',{'class': 'control-label col-sm-2','for': data[x].name,text: data[x].label}));
              $('#form-input-'+data[x].name).append($('<div/>',{'class': 'col-sm-10','id': 'input-' + data[x].name}));
              $('#input-' + data[x].name).append($('<input/>',{'type': data[x].type,'class': 'form-control','id': data[x].name,'placeholder': 'Enter password'}));
        break;

        case(data[x].name == 'price'):
              $('form').append($('<div/>',{'class':'form-group form-group-sm','id':'form-input-'+data[x].name}));
              $('#form-input-'+data[x].name).append($('<label/>',{'class':'control-label col-sm-2','for':data[x].name,text:data[x].label}));
              $('#form-input-'+data[x].name).append($('<input/>',{'type':data[x].type,'name':data[x].name,'class':'form-control','id':data[x].id,'placeholder':data[x].label,'readonly':'readonly'}));
        break;

        case(data[x].name == "numberOfRooms"):
             var number = [1,2,3,4,5,"Other"];
             $('.form-horizontal').append($('<label/>',{'class':'control-label col-sm-2','for':data[x].name,text:"Rooms"}));
             $('.form-horizontal').append($('<select/>',{'id':'rooms','name':data[x].name}));
             for(var e in number){
                $('#rooms').append($('<option/>',{'value':number[e],text:number[e]}));
             }
        break;

           case(data[x].name == "roomType"):
                var roomType =["Double","Single","D/S","D/S/S"];
                $('.form-horizontal').append($('<label/>',{'class':'control-label col-sm-2','for':data[x].name,text:data[x].label}));
                $('.form-horizontal').append($('<select/>',{'id':'room-type','name':data[x].name}));
                for(var g in roomType){
                   $('#room-type').append($('<option/>',{'value':roomType[g],text:roomType[g]}));
                }
           break;

           case (data[x].name == 'arrive'):
                 $('.form-horizontal').append($('<div/>',{'class': 'form-group','id': 'form-input-'+data[x].name}));
                 $('#form-input-'+data[x].name).append($('<label/>', {'class': 'control-label col-sm-2','for': data[x].name,text: 'Arrive:'}));
                 $('#form-input-'+data[x].name).append($('<div/>', {'class': 'col-sm-10','id': 'input-' + data[x].name}));
                 $('#input-' + data[x].name).append($('<input/>',{'type': data[x].type,'class': 'form-control','id': data[x].id,'placeholder': 'Pick Arrive date'}));
           break;

           case (data[x].name == 'depart'):
                 $('.form-horizontal').append($('<div/>',{'class': 'form-group','id': 'form-input-'+data[x].name}));
                 $('#form-input-'+data[x].name).append($('<label/>', {'class': 'control-label col-sm-2','for': data[x].name,text: 'Depart:'}));
                 $('#form-input-'+data[x].name).append($('<div/>', {'class': 'col-sm-10','id': 'input-' + data[x].name}));
                 $('#input-' + data[x].name).append($('<input/>',{'type': data[x].type,'class': 'form-control','id': data[x].id,'placeholder': 'Pick Depart date'}));
           break;


        case(data[x].name == "typeOfCard"):
                var cardType =["Visa","Visa Debit","Master","Master Debit","American Express","Other"];
                $('.form-horizontal').append($('<label/>',{'class':'control-label col-sm-2','for':data[x].name,text:data[x].label}));
                $('.form-horizontal').append($('<select/>',{'id':'card-type','name':data[x].name}));
                for(var g in cardType){
                   $('#card-type').append($('<option/>',{'value':cardType[g],text:cardType[g]}));
                }
        break;

        case(data[x].name == "discount"):
             var disc = ["0%","5%","10%","15%","20%"];
             $('.form-horizontal').append($('<label/>',{'class':'control-label col-sm-2','for':data[x].name,text:data[x].label}));
             $('.form-horizontal').append($('<select/>',{'id':'discount','name':data[x].name}));
             for(var s in disc){
                $('#discount').append($('<option/>',{'value':disc[s],text:disc[s]}));
             }
        break;

        default:
          $('.form-horizontal').append($('<div/>',{'class': 'form-group','id': 'form-input-'+data[x].name}));
          $('#form-input-'+data[x].name).append($('<label/>', {'class': 'control-label col-sm-2','for': data[x].name,text: data[x].label}));
          $('#form-input-'+data[x].name).append($('<div/>', {'class': 'col-sm-10','id': 'input-' + data[x].name}));
          $('#input-' + data[x].name).append($('<input/>',{'type': data[x].type,'class': 'form-control','id': data[x].name,'placeholder': data[x].label}));
          break;
      }

    }

	$('.form-horizontal').append($('<input/>',{'class': 'form-control','type':'submit','id':'submit','value':'Send'}));


			$('#submit').bind({
		        mouseenter: function(){
                    $('form').attr({'action':'../submit.php','method':'post'});
                    var numberOfNights = $('#numberOfNights').val();
                    var rate = $('#rate').val();
                    var price = parseInt(numberOfNights) * parseInt(rate);
                    $('#price').val(price);
                    var firstName = $("input[name*='firstName']").get();
                    //alert(firstName);

                },
                mouseleave: function(){
                    $('form').removeAttr('action').removeAttr('method');
                }
			});

	
});