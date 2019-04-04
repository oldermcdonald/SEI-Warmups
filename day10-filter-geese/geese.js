//Wk 02 Friday Warmup

/*
Filter Out the Geese
Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/


var gooseFilter= function(animals, geese){
  animals = animals.filter(function(animal){
    return !geese.includes(animal);
  })
  return animals;
}

var userInput = document.getElementsByClassName('.userInput');
var goBtn = document.getElementsByClassName('.goBtn');





var animals = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

console.log(gooseFilter(animals, geese));



// here it is with cats :)

// var catFilter = function(people, cats){
//   var filtered = people.filter(function(item){
//     return !cats.includes(item); //remember the ! to take out cats
//   });
//   return filtered
// }
// var people = ['dave', 'sel', 'susan','ben','linlin','ed']
// var cats = ['stanley', 'smee', 'gladys', 'sabi', 'harley']
// console.log(catFilter(people, cats));

