var myName = "Roderick";
console.log(myName);

const numberOfUStates = 50;
console.log(numberOfUStates);

// Adds 4 and 5, store the results 
var sumof4and5 = 4 + 5;
console.log(sumof4and5)

function SayHello(){
    alert("Hello World!")
}
SayHello()

function CheckAge(name,age){
    if (age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
CheckAge("Charles", 21)
CheckAge("Abby", 27)
CheckAge("James", 18)
CheckAge("John", 17)

var Veggies = ["Carrrots","Peas","Broccoli","Cucumber","Asparagus"];
for( var i = 0; i < Veggies.length; i++) { 
    console.log(Veggies[i]);
} 

const pet ={
    firstName:"Diamond", 
    petType: 'RottWeiler'
}
console.log(pet.firstName,pet.petType);

const Friends = [
    {
        name: "Doug",
        age: 19
    },
    {
        name: "Matt",
        age: 20
    },
    {
        name: "Cole",
        age: 21
    },
    {
        name: "Damon",
        age: 23
    },
    {
        name: "Ken",
        age: 25
    }
]; 
for (let i = 0; i < Friends.length; i++ ){
CheckAge(Friends[i].name,Friends[i].age);
}
//I am creating a for loop that is checking the index of the friends array, it seaches the entire array for objects name and age. 

function getLength(stringName){
    return stringName.length;
}
var length = getLength("Hello World!")
console.log(length)
if (length %2 == 0){
    console.log("The world is nice and even!");
}else{
     console.log("The world is an odd place!");
}