//--------------------------||
//Business - Back-End Logic
//--------------------------||

//The Beep Boop's soul

function beepBoop(numberInput) {
  var outPut = []
  var numberInputInt = parseInt(numberInput);
  var noSoup = "You must enter number! No Soup for YOU!!!"

  while (isNaN(numberInputInt)) {
    return noSoup;
  }
  
  for (var i = 1; i <= numberInputInt; i++ ) {
     if (i % 3 === 0 && i !== 0) {
      outPut.push("I'm sorry Dave, I can't do that");
    } else if (i.toString().includes("1")) {
      outPut.push("BOOP!");
    }  else if (i.toString().includes("0")) {
      outPut.push("BEEP!");
      alert(outPut);
    } else {
      outPut.push(i);
    }
  }
  return outPut;
}

//--------------------------||
//User - Front-End Logic
//--------------------------||

$(document).ready(function(){
  $("form.formOne").submit(function(event){
    event.preventDefault();
    var numberInput = $("#userInput").val();
    console.log(typeof numberInput)
    var beepBoopOut = beepBoop(numberInput);
    $("#output").text(beepBoopOut)
  })
});
