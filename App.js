//Template Literales 
const name = 'sangu';
const age = 23;
const job = 'software developer' ;
const city  = "bengaluru";

let html;

// //Without using literals, ES5 , we are going to render html to browser with js

// html = "<ul><li>Name:"+
// name+"</li>"
// "<li>Age:"+
// age+"</li>"
// "<li>Job:"+job+
// "</li>"
// "<li>City:"+
// city+"</li>";

// document.body.innerHTML =html;

//Create one function and call it 
function hello(){
    return "hello";
}

//With using literals, ES6 , we are going to render html to browser with js
html = `
<ul>
    <li>Name:${name}</li>
     <li>job:${job}</li>
      <li>Age:${age}</li>
       <li>location:${city}</li>
        <li>${hello()}</li>  // function called
     
</ul>
`;
document.body.innerHTML =html;