//Object literales
const person = {
    name : "sangu",
    age : 24,
    email : "sangu@gmail.com",
    hobbies:["play","game","singing","reading"],
//child object
    address : 
    {
        city : "bengaluru",
        state : "karnataka",
        pincode : 585500,
    },
  
    //function inside object becomes method
        getBirthYear : function(){
            //terturn actual data of birth year
            return 2025 - this.age;


        },
    
};


let val;
val  = person;

console.log(val.getBirthYear());



// console.log("***************************************");
// //Array of objects
// const people =[
//     {
//         fistname : "raju",
//         age : 22,
//     },
//     {
//         fistname : "ramachari",
//         age : 23,
//     },

// ];


// //for loop using 
// for (  let i=0; i<people.length;i++){

// console.log(people[i].fistname)}