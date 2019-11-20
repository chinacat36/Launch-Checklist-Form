// Write your JavaScript code here!

window.addEventListener("load", function() {
       let form = document.querySelector("form");
       let pilotName = document.querySelector("input[name = pilotName]"); 
       let coPilotName = document.querySelector("input[name = copilotName]");
       let fuelLevel = document.querySelector("input[name = fuelLevel]");
       let cargoMass = document.querySelector("input[name = cargoMass]");
       let submitButton = document.getElementById("formSubmit");
form.addEventListener("submit", function(){
         if(pilotName.value === "" || coPilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         window.alert("All fields are required.");
         faultyItems.style.visibility = "hidden";
         event.preventDefault();
      }else if(isNaN(pilotName.value) === false || isNaN(coPilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert("Please enter a valid value");
         faultyItems.style.visibility = "hidden"
         event.preventDefault();
      }else{
         faultyItems.style.visibility = "visible"
         event.preventDefault();
         let pilotStatus = document.getElementById("pilotStatus");
         pilotStatus.innerHTML = `${pilotName.value} is ready for launch.`
         let coPilotStatus = document.getElementById("copilotStatus");
         coPilotStatus.innerHTML = `${coPilotName.value} is ready for launch.`
         if(fuelLevel.value < 10000){
            event.preventDefault();
            faultyItems.style.visibility = "visible"
            fuelStatus.innerHTML = `Not enough fuel for your journey!`
         let launchStatus = document.getElementById("launchStatus");
            launchStatus.innerHTML = `Shuttle not ready for launch.`
            launchStatus.style.color = "red"
         }else if(cargoMass.value > 10000){
            event.preventDefault();
            faultyItems.style.visibility = "visible"
            cargoMass.innerHTML = `Too much mass for takeoff.`
         let launchStatus = document.getElementById("launchStatus");
            launchStatus.innerHTML = `Shuttle not ready for launch.`
            launchStatus.style.color = "red"
         }else{
            faultyItems.style.visibility = "visible"
            let launchStatus = document.getElementById("launchStatus");
            launchStatus.innerHTML = `Shuttle is ready for takeoff.`
            launchStatus.style.color = "green"
            fuelStatus.innerHTML = `Enough fuel for your journey.`
            event.preventDefault();
         };
   };
   });

       fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
                        let missionTarget = document.getElementById("missionTarget");
                        response.json().then(function(json) {
                           let randomOne = Math.floor(Math.random()*json.length);
                           //console.log(randomOne)
                           missionTarget.innerHTML = `
                           <h2>Mission Destination</h2>
                           <ol>
                           <li>Name: ${json[randomOne].name}</li>
                           <li>Diameter: ${json[randomOne].diameter}</li>
                           <li>Star: ${json[randomOne].star}</li>
                           <li>Distance from Earth: ${json[randomOne].distance}</li>
                           <li>Number of Moons: ${json[randomOne].moons}</li>
                           </ol>
                           <img src = "${json[randomOne].image}">
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