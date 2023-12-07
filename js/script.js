
$(document).ready(function(){

     // show/hide

     $('#hide').on('click' , function(){
     	$('#sh_h3').hide();

     });

      $('#show').on('click' , function(){
     	$('#sh_h3').show();

     });

       $('#toggo').on('click' , function(){
     	$('#sh_h3').toggle(1000);

     });



     

     //alert massage

     $('#btn').on('click' , function(){
     	alert("welcome");
     })



     

})

