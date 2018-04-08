var array = [
  { 
    id: '1',
    idn: '1' },
  { 
    id: '2',
    idn: '2' },
  { 
    id: '3',
    idn: '3' }
]

// New element.
var beep = {
    id: ' ',
	idn: 'Dave',
 	boop: function() {
    return (id % 3 === 0);
}
};

// Id to look up for.
var id = beep.boop

// Find index of an item.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// var index = array.findIndex(function(item) {return item.id === id})
// Or:
var index = array.findIndex(item => item.idn === id)
for (i = 0; i<=1; i++ ) {
  array.splice(index, 1, beep.idn)
}
// Replace the item by index.
// To check.
console.log(array)