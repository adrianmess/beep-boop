//Business - Back-End Logic



//User - Front-End Logic
$(document).ready(function(){
  $(".formOne").submit(function(event) {
    event.preventDefault();
    // debugger;
  var string = $("#input").val();

 // console.log(regex1.test(string));

// if userinput contains characters that are not digits
 if (string.match(/[a-zA-Z]+/g)) {
   alert("Only numbers are permitted. No Soup For YOU!")
 }

// If user input
 if (string.match(/\d/g)){
   if (string.match(/[0]/g)) {
     alert("Beep!")
    }
    else if (string.match(/[1]/g)) {
      alert("Boop!")
    }
    else if (string % 3 === 0) {
      alert("I'm sorry, Dave. I'm afraid I can't do that.")
    }

 }
});

});
// if (string.match(/\d/g)) {
// } else {
//   alert("Only numbers are permitted. No Soup For YOU!")
// }

 // if (string.match(/\d/g)) {
 //    alert ("true")
 // } else {
 //   alert ('false')
 // }
