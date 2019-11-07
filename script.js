// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
       let pilotName = document.querySelector("input[name = pilotName]") 
       let coPilotName = document.querySelector("input[name = copilotName]")
       let fuelLevel = document.querySelector("input[name = fuelLevel]")
       let cargoMass = document.querySelector("input[name = cargoMass]")
       if(pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" 
       || pilotName.value === !String || coPilotName.value === !String || isNaN(fuelLevel.value) || isNaN(cargoMass.value) ){
      alert("All fields are required.");
      event.preventDefault();
       };
       fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
                        response.json().then(function(json) {
                            let name = document.getElementById("name");
                            name.innerHTML += `${json[2].name}`
                            let diameter = document.getElementById("diameter");
                            diameter.innerHTML += `${json[2].diameter}`
                            let star = document.getElementById("star");
                            star.innerHTML += `${json[2].star}`
                            let distance = document.getElementById("distance");
                            distance.innerHTML += `${json[2].distance}`
                            let moons = document.getElementById("moons");
                            moons.innerHTML += `${json[2].moons}`
                            let img = document.getElementById("img");
                            img.innerHTML = `${json[2].image}`
                    });
                });
    });           
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

//window.onload = destination;