const cars = [
    { name: "Audi", image: "images/audi.jpg" },
    { name: "Benz", image: "images/benz.jpg" },
    { name: "BMW", image: "images/bmw.jpg" },
    { name: "Ford", image: "images/ford.jpg" },
    { name: "Hundai", image: "images/hundai.jpg" },
    { name: "Nissan", image: "images/nissan.jpg" },
    { name: "Suzuki", image: "images/suzuki.jpg" },
    { name: "Toyota", image: "images/toyota.jpg" },
    { name: "Vox Wagen", image: "images/vw.png" }
];

let output = "";
let container = document.querySelector(".container");

// arrayName.methods(functionName); 


function newCars({ name, image }) {

    output += `<div class="card">
             <img class="card--avatar" src=${image}>
             <h1 class="card--title">${name}</h1>
             <a class="card--link" href="#">Buy Now !!</a>  
             </div>
    `;

    console.log(name, image);
}

cars.forEach(newCars);

container.innerHTML = output;