//Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

// This function shows every detail about an object

function logObjectProperties(obj: object) {
    for (let property in obj){
         // Loops through each property in the object
     console.log(`${property}: ${obj[property]}`);       

    }
}
   // Using the function with a car object
logObjectProperties({ make: "Honda", model:"Civic", year:"2021", color:"Black"});


