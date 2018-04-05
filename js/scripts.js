//--------------------------||
//Business - Back-End Logic
//--------------------------||

//Determine if input is a number or not. {



function verifyNumber(numberInput) {
  if (isNaN(numberInput)) {

    return "Only numbers are permitted. No Soup For YOU!";
  //   console.log(numberInputInt)
}
 else
     var numberIndex = numberInput.split('');{
     // var numberIndex =
   }

      for (i = 0 ; i < numberIndex.length; i++) {
        if (numberIndex[i] % 3 === 0) {
          alert("division by 33 working?")
        }
      }
   return numberIndex; {

}

}


   // (numberInputInt.match(/\D+/g))
   //  return "Only numbers are permitted. No Soup For YOU!"

// console.log(verifynumnber(numberInputInt))

//--------------------------||
//User - Front-End Logic
//--------------------------||

$(document).ready(function(){
  $("form.formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("#userInput").val();
    console.log(numberInput);
    console.log(typeof numberInput);
    var numberInputInt = parseInt(numberInput);
    console.log(numberInputInt);
    console.log(typeof numberInputInt);
    var output = verifyNumber(numberInput);
    console.log(output);
    // $("#output").text(verifyNumber(numberInputInt))
  })

});
