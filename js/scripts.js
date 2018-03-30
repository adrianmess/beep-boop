//Business - Back-End Logic











//User - Front-End Logic
$(document).ready(function(){
  $(".formOne").submit(function(event) {
    event.preventDefault();
    // debugger;
  var string = $("#input").val();
  var regex1 = RegExp(/\d/g);
 console.log(regex1.test(string));



});

});
