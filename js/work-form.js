

 $('body').append($('<div/>',{'class':'panel panel-default'}));
 $('.panel-default').append($('<div/>',{'class':'panel-heading',html:'<h2>The Sands Hotel - Night Porters Report Form</h2>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',text:'Name '+ '_______________________'+ '     Date: '+'__________________________'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Outside Area</h3><hr><p>Comments</p><br /><br><hr>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Night Club</h3><hr><p>Comments</p><br /><br><hr>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Upstairs Bar</h3><hr><p>Comments</p><br /><br><hr>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Kitchen</h3><hr><p>Comments</p><br /><br><hr>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Rooms</h3><hr><p>Comments</p><br /><br><hr>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Ball Room</h3><hr><p>Comments</p><br /><br><hr>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Late Check In</h3><hr><p>Client Name: ________________________  <br>   Room No: _____   <br>   Price Paid: _________  <br> Days Stay: ___________  <br>    Number of people per room: _____________ </p><br /><br><hr>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Early Check Out</h3><hr><p>Room Number:</p><br /><br><hr>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Delivery</h3><hr><p>Comments</p><br /><br><hr>'}));
 $('.panel-default').append($('<div/>',{'class':'panel-body',html:'<h3>Night Bar Money</h3><hr><p>Total</p><br /><br><hr>'}));

 $('h3').css({'color':'navy','margin':'3px'});
 $('.panel-default').css({'width':'98%','height':'auto','border':'2px solid black','margin':'5px'});