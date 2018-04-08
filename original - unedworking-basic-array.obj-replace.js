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
  
  id: '2',
  name: 'Dave'
}

// Id to look up for.
var id = newItem.id

// Find index of an item.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// var index = array.findIndex(function(item) {return item.id === id})
// Or:
var index = array.findIndex(item => item.id === id)

// Replace the item by index.
array.splice(index, 1, newItem)

// To check.
console.log(array)