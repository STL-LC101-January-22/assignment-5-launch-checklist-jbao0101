// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.

                document.getElementById("missionTarget").innerHTML = 
                (`<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}"></img>`)
                
}

function validateInput(testInput) {
   if (testInput === ""){
       return ("Empty")
   } else if (isNaN(testInput)) {
       return ("Not a Number")
   } else if (isNaN(testInput) !== true) {
       return ("Is a Number")
   }
}

// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
    alert("All fields required!");
    this.event.preventDefault()
   } 
   else if (validateInput(pilot) === "Is a Number") {
       alert("Pilot input must be a string!")
       this.event.preventDefault()
   } else if (validateInput(copilot) === "Is a Number") {
       alert("Copilot input must be a string!")
       this.event.preventDefault()
   } else if (validateInput(fuelLevel) === "Not a Number") {
       alert("Fuel Level input must be a number!")
       this.event.preventDefault()
   } else if (validateInput(cargoLevel) === "Not a Number") {
       alert("Cargo Level input must be a number!")
       this.event.preventDefault()
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planetsList) {
    let index = Math.floor(Math.random() * planetsList.length)
    let planet = planetsList[index]
    return planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
