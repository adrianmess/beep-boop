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
       var newArray = numberIndex.slice();
       console.log(newArray)
 //replace element?
       // while (numberIndex.indexof.numberIndex == numberIndex % 3 === 0); {
       //   numberIndex.splice(numberIndex.indexof(numberIndex),1,"Sorry test");

       }
       for (var i = 0, l = numberIndex.length; i < l; i++) {
         if (newArray[i] % 3 === 0) {
           newArray.splice(newArray.indexOf("3"),1,"**");
           console.log(newArray)
         }
       }


     // var numberIndex =
     // var index = function modulo(numberIndex) {
     //    (i = 0; i < index.length; 1++)
     //   if (i % 3 === 0) {
     //    i.replace()}
     //
     //   }
     console.log(numberIndex)
   }





//traverse array
      // var super = function(numberIndex){
      //   (i % 3 === 0)
      // }
      // console.log(numberIndex)
      // numberIndex.forEach( (divThree) {
      //   var i = divThree.
      //   var modulo = i % 3 === 0
      // } i; i % 3 === 0; ; i++) {



// }
// if ( i % 3 === 0) {
//
// }

        // console.log(numberIndex.length)

        // console.log(i)
        // console.log(numberIndex)
      //   //verify if number divisible by 3
      //   if (i % 3 === 0) {
      //     console.log("divisible by 3 working")
      //     // alert("division by 33 working?")

        // console.log(map1)


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
