//Business - Back-End Logic

var compute = function(string) {

  if (string.match(/\D+/g)) {
    alert("Only numbers are permitted. No Soup For YOU!")
  }


  // If user input
   else if (string % 3 === 0) {
    alert("I'm sorry, Dave. I'm afraid I can't do that.")
  }

   else if (string.match(/[1]/g)) {
     alert("Boop!")
   }

   else if (string.match(/[0]/g)) {
     alert("Beep!")
     }
     else {
       alert(randomNumb)
     }

};



//User - Front-End Logic
$(document).ready(function(){
  $(".formOne").submit(function(event) {
    event.preventDefault();
    // debugger;
  var string = $("#input").val();
  var randomNumb= Math.floor(Math.random() * string);
  var result = compute(string) 

});
});
