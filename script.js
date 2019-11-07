// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name = pilotName]") 
       let coPilotName = document.querySelector("input[name = copilotName]")
       let fuelLevel = document.querySelector("input[name = fuelLevel]")
       let cargoMass = document.querySelector("input[name = cargoMass]")
   form.addEventListener("submit", function(event) {
       if(pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" 
       || pilotName.value === !String || coPilotName.value === !String || isNaN(fuelLevel.value) || isNaN(cargoMass.value) ){
      alert("All fields are required.");
      event.preventDefault();
       };
      });
      let submitButton = document.getElementById("formSubmit");
      formSubmit.addEventListener("click", function(){

         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `${pilotName.value} is ready for launch.`
         let coPilotStatus = document.getElementById("copilotStatus");
         coPilotStatus.innerHTML = `${coPilotName.value} is ready for launch.`

         if(fuelLevel.value < 10000){
            faultyItems.style.visibility = "visible"
            fuelStatus.innerHTML = `Not enough fuel for your journey!`
            let launchStatus = document.getElementById("launchStatus");
            launchStatus.innerHTML = `Shuttle not ready for launch.`
            launchStatus.style.color = "red"
         }else if(cargoMass.value > 10000){
            cargoMass.innerHTML = `Too much mass for takeoff.`
            let launchStatus = document.getElementById("launchStatus");
            launchStatus.innerHTML = `Shuttle not ready for launch.`
            launchStatus.style.color = "red"
         }else{
            faultyItems.style.visibility = "visible"
            let launchStatus = document.getElementById("launchStatus");
            launchStatus.innerHTML = `Shuttle is ready for takeoff.`
            launchStatus.style.color = "green"
         }    
      });
       fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
                        let missionTarget = document.getElementById("missionTarget");
                        response.json().then(function(json) {
                           missionTarget.innerHTML = `
                           <h2>Mission Destination</h2>
                           <ol>
                           <li>Name: ${json[2].name}</li>
                           <li>Diameter: ${json[2].diameter}</li>
                           <li>Star: ${json[2].star}</li>
                           <li>Distance from Earth: ${json[2].distance}</li>
                           <li>Number of Moons: ${json[2].moons}</li>
                           </ol>
                           <img src = "${json[2].image}">
                           `
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