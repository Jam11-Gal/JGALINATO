// Creating a multi-dimensional array 
containing the following values

let names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21, 5, 9];

// Restructure the declared multi-dimensional array 
above and store in a new multi-dimensional array,
where each of the sub-array must contain the [name, age].

let restructuredArray = [];
for (let i = 0; i < names.length; i++) {
  restructuredArray.push([names[i], ages[i]]);
}

// Log to the console the restructured 
multidimensional array [name, age] per line.

console.log("Restructured array:");
for (let i = 0; i < restructuredArray.length; i++) {
  console.log(restructuredArray[i]);
}
