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
//traverse array
      // var  = (i % 3 === 0)
      console.log(numberIndex)
      for (var i = i % 3 === 0; i < numberIndex.length; i++) {
        numberIndex.push(i+"")
        console.log(i)
        console.log(numberIndex)
      //   //verify if number divisible by 3
      //   if (i % 3 === 0) {
      //     console.log("divisible by 3 working")
      //     // alert("division by 33 working?")


          // console.log(map1)
        }
      }
        // console.log(numberIndex);

   // return numberIndex;
//    console.log(numberIndex); {
//
// }
//
// }


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
