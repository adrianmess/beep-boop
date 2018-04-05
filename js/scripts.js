//--------------------------||
//Business - Back-End Logic
//--------------------------||




//--------------------------||
//User - Front-End Logic
//--------------------------||

$(document).ready(function(){
  $("form.formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("input#input").val();
    console.log(numberInput)
    var numberInt = parseInt(numberInput)
    console.log(numberInt)
    // console.log(numberInput);
  });
// console.log(numberInt);
});
