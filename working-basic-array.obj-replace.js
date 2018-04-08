var array = [
  { 
    id: '1',
    name: 'rob' },
  { 
    id: '2',
    name: 'jane' },
  { 
    id: '3',
    name: 'mark' }
]

// New element.
var newItem = {
  name: 'Dave',
  id: function() {
    return (id % 3 === 0);
}
};

// Id to look up for.
var id = newItem.id

// Find index of an item.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// var index = array.findIndex(function(item) {return item.id === id})
// Or:
var index = array.findIndex(item => item.id === id)
for (i = 0; i<=1; i++ ) {
  array.splice(index, 1, newItem)
}
// Replace the item by index.
// To check.
console.log(array)