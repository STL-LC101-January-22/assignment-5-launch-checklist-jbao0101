// Write your JavaScript code here!

window.addEventListener("load", function() {

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

        if (Number(fuelLevel) < 10000){
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("fuelStatus").innerText = "There is not enough fuel for the journey."
            document.getElementById("launchStatus").innerText = "Shuttle NOT ready for launch."
            document.getElementById("launchStatus").style.color = "red"
            event.preventDefault()
        } else if (Number(cargoLevel) > 10000){
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("cargoStatus").innerText = "There is too much mass for the shuttle to take off."
            document.getElementById("launchStatus").innerText = "Shuttle NOT ready for launch."
            document.getElementById("launchStatus").style.color = "red"
            event.preventDefault()
        } else {
            document.getElementById("launchStatus").innerText = "Shuttle is ready for launch."
            document.getElementById("launchStatus").style.color = "green"
        }
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets)
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })
   
});