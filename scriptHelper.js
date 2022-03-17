// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
    alert("All fields required!");
    event.preventDefault()
   } 
   else if (validateInput(pilot) === "Is a Number") {
       alert("Pilot input must be a string!")
       event.preventDefault()
   } else if (validateInput(copilot) === "Is a Number") {
       alert("Copilot input must be a string!")
       event.preventDefault()
   } else if (validateInput(fuelLevel) === "Not a Number") {
       alert("Fuel Level input must be a number!")
       event.preventDefault()
   } else if (validateInput(cargoLevel) === "Not a Number") {
       alert("Cargo Level input must be a number!")
       event.preventDefault()
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json){
            let index = Math.floor(Math.random() * json.length)
            let planet = json[index]
            return planet
        })
    })
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
