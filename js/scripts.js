//--------------------------||
//Business - Back-End Logic
//--------------------------||

var compute = function(string) {
  if (string.match(/\D+/g)) {
    $("#h2").text("Only numbers are permitted. No Soup For YOU!")
  }
  else if (string % 3 === 0) {
    $("#h2").text("I'm sorry, Dave. I'm afraid I can't do that.")
  }
  else if (string.match(/[1]/g)) {
    $("#h2").text("Boop!")
  }
  else if (string.match(/[0]/g)) {
    $("#h2").text("Boop!")
  }
  else {
    var randomNumb= Math.floor(Math.random() * string);
    $("#h2").text(randomNumb)
  }
};

//--------------------------||
//User - Front-End Logic
//--------------------------||

$(document).ready(function(){
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var string = $("#input").val();
    var result = compute(string);
  });
});
