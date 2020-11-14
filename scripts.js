// Write your JavaScript code here.
// Remember to pay attention to page loading!

// add load event handler to window
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
    
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortMissionButton = document.getElementById("missionAbort");

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")

    let rocket = document.getElementById("rocket");
    
    takeOffButton.addEventListener("click", function (event) {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener("click", function (event) {
        if (window.confirm("The shuttle is landing. Landing gear engaged.")) {
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.top = "0px";
            rocket.style.left = "381px";
        }
    });

    abortMissionButton.addEventListener("click", function (event) {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML =  "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.top = "0px";
            rocket.style.left = "381px";
        }
    });
    
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");

    leftButton.addEventListener("click", function(event) {
        if ((rocket.offsetLeft - 10) < 0) {
            return;
        } else {
            rocket.style.left = `${rocket.offsetLeft - 10}px`;
        }
    });

    rightButton.addEventListener("click", function(event) {
        if ((rocket.offsetLeft + 10) > (shuttleBackground.offsetWidth - rocket.width)) {
            return;
        } else {
            rocket.style.left = `${rocket.offsetLeft + 10}px`;
        }
    });

    downButton.addEventListener("click", function(event) {
        console.log(rocket.offsetTop);
        if ((rocket.offsetTop + 10) > (shuttleBackground.offsetHeight - rocket.height)) {
            return;
        } else {
            rocket.style.top = `${rocket.offsetTop + 10}px`;
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000; 
        }
    });

    upButton.addEventListener("click", function() {
        if ((rocket.offsetTop - 10) < 0) {
            return;
        } else {
            rocket.style.top = `${rocket.offsetTop - 10}px`;
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        } 
    });
});



