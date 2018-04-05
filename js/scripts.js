//--------------------------||
//Business - Back-End Logic
//--------------------------||



// var compute = function(string) {
//   // if (string.match(/\D+/g)) {
//   //   $("#h2").text("Only numbers are permitted. No Soup For YOU!")
//   // }
//
   // for (string % 3 === 0) {
   //  string.replace
//   }

// debugger;
// var getNumRange = function(numString) {
// var list = [];
// console.log(list);
// for (var i = 0; i <= numString; i++) {
//     list.push(i);
//
// }
// console.log(list);
// };

// var = index [];
//   for ()
// Array.prototype.fuckThis = function(compute.string) {
//     for (k = 0; k < this.length; i++) {
//         this[i] = this[i].toUpperCase();
//     }
// };

//
// var threeObj = new Object(),
//   function()



var compute = function(string) {
  // console.log(string);
  var i = [];
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].replace('0', 'Beep!').replace('1','Boop');
    return string;
   }

};

var shitfuck = function(result) {
  var k = [];
  result[k] = (var k === k % 3= 0);
  for (var k = 0; k < result.length; i++) {
      .replace(result[k], "no");
   }
   console.log(result);
};


// var kind = function() {
// var x = [3]
//  if   (var x === x % 3 = 0); {
//    string[i] = string[i].replace(x, 'bla!');
// };
// };



// var compute = function(string) {
//   // console.log(string);
//   var i = [];
//   var k = [];
//   var shithole = {
//     dthree: (string[i] % 3 = 0;) {
//
//     }
//   }
//   for (var i = 0; i < string.length; i++) {
//     string[i] = string[i].replace('0', 'Beep!').replace('1','Boop');
//     let
//    }
//    console.log(string);
// };

// var final = function (result) {
//   console.log(result);
// };
// console.log(result);
 // console.log(string)

   // console.log(string);
 // if string[i] % 3 = 0;
 //   string[i].replace([i], " testing");


 // console.log(compute(string));

 // console.log(compute.string)
// var numbRange = function(numString) {
//   console.log(numString);
//   // console.log(string)
//   var numbString = [];
//   for ( i = 0; i <= numbString.length; i++) {
//     // numbString[i] = [i];
//
// }
// // console.log(numbString);
// };
// console.log(list);
// console.log(numString);


    // else if (string.match())

// var compute = function(string) {
//   if (string.match(/\D+/g)) {
//     $("#h2").text("Only numbers are permitted. No Soup For YOU!")
//   }
//   else if (string % 3 === 0) {
//     $("#h2").text("I'm sorry, Dave. I'm afraid I can't do that.")
//   }
//   else if (string.match(/[1]/g)) {
//     $("#h2").text("Boop!")
//   }
//   else if (string.match(/[0]/g)) {
//     $("#h2").text("Beep!")
//   }
//   else {
//     var randomNumb= Math.floor(Math.random() * string);
//     $("#h2").text(randomNumb)
//   }
// };

//--------------------------||
//User - Front-End Logic
//--------------------------||

$(document).ready(function(){
  $(".formOne").submit(function(event) {
    event.preventDefault();
    var string = $("#input").val().split("");
    // var numString, string = $("#input").val().split("");
    // var stringArray = string.split("");
    // console.log(string);
      // console.log(result);
     var result = compute(string);
    //   dthree : function()
      // console.log(result);
      console.log(result);
    });

    // var allNumb = compute(numString);

  // console.log(result);
});

// $(document).ready(function(){
//   $(".formOne").submit(function(event) {
//     event.preventDefault();
//     var numString = $("#input").val().split("");
//     var rangeS = numbRange(numString);
//     // console.log(numString)
//     console.log(rangeS);
//     // var allNumb = compute(numString);
//   });
//
// });
