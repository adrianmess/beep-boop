//--------------------------||
//Business - Back-End Logic
//--------------------------||

//The Beep Boop soul purpose

function beepBoop(numberInput) {
  var outPut = []
  var numberInputInt = parseInt(numberInput);

  for (var i = 0; i <= numberInputInt; i++ ) {
    if (i % 3 === 0 && i !== 0) {
      outPut.push("I'm sorry Dave, I can't do that");
    } else if (i.toString().includes("1")) {
      outPut.push("BOOP!");
    }  else if (i.toString().includes("0")) {
      outPut.push("BEEP!");
    } else {
      outPut.push(i);
    }
  }
  return outPut;
  console.log(outPut);
}





//--------------------------||
//User - Front-End Logic
//--------------------------||

$(document).ready(function(){
  $("form.formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("#userInput").val();
    var output = beepBoop(numberInput);
    console.log(output);

    // $("#output").text(verifyNumber(numberInputInt))
  })

});
