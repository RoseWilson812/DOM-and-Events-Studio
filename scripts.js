// code starts here

let paragraph = null;
let shuttleHeight = 0;
let shuttleHeightRaw = 0;
let backGroundColor = null;
let leftPosition = 0;
let topPosition = 0;
let rocket = null;
let milesTraveled = 0;

function init () {
    paragraph = document.querySelector("p");
    shuttleHeightRaw = document.getElementById("spaceShuttleHeight");
    let shuttleHeightTxt = shuttleHeightRaw.textContent;
    shuttleHeight = Number(shuttleHeightTxt);
    milesTraveled = shuttleHeight;
    rocket = document.getElementById("rocket");
    rocketOffset = document.getElementById("rocket").offsetLeft;
    backGroundColor = document.getElementById("shuttleBackground");
    rocket.style.position = "relative";
}

window.onload = init;

function takeOff() {
   let result = window.confirm("Confirm that the shuttle is ready for takeoff."); 
       if (result == true) {
        milesTraveled = shuttleHeight;
        paragraph.innerHTML = "Shuttle in flight.";
        backGroundColor.style.backgroundColor = "blue";
        milesTraveled = milesTraveled + 10000;
        shuttleHeightRaw.innerHTML = milesTraveled;
        }
} 

function land() {
    let result = window.alert("The shuttle is landing. Landing gear engaged.")
    paragraph.innerHTML = "The shuttle has landed.";
    backGroundColor.style.backgroundColor = "green";
    shuttleHeightRaw.innerHTML = 0; 
    leftPosition = 0;
    topPosition = 0;
    rocket.style.left = leftPosition + "px";
    rocket.style.top = topPosition + "px";
}

function abort() {
    let result = window.confirm("Confirm that you want to abort the mission."); 
    if (result == true) {   
         milesTraveled = shuttleHeight;
         paragraph.innerHTML = "Mission aborted.";
         backGroundColor.style.backgroundColor = "green";
         milesTraveled = 0;
         shuttleHeightRaw.innerHTML = milesTraveled;
         leftPosition = 0;
         topPosition = 0;
         rocket.style.left = leftPosition + "px";
         rocket.style.top = topPosition + "px";
    }   
 } 

function goRight() {
    //rocketOffset = rocketOffset + 10;
    //position = 53 * 186 / 1000
    leftPosition += 10;
    if (leftPosition > 200) {
        leftPosition = 200
    }
    rocket.style.left = leftPosition + "px";
    
}

function goLeft() {
    ///ocketOffset = rocketOffset - 10;
    leftPosition -= 10;
    if (leftPosition < -200) {
        leftPosition = -200;
    }
    rocket.style.left = leftPosition + 'px';
    
}
function goUp() {
    ///ocketOffset = rocketOffset - 10;
    topPosition -= 10;
    if (topPosition < 0) {
        topPosition = 0;
    }
    milesTraveled = milesTraveled + 10000;
    shuttleHeightRaw.innerHTML = milesTraveled;
    rocket.style.top = topPosition + 'px';
    
}
function goDown() {
    topPosition += 10;
    if (topPosition > 250) {
        topPosition = 250
    }
    milesTraveled = milesTraveled - 10000;
    shuttleHeightRaw.innerHTML = milesTraveled;
    rocket.style.top = topPosition + "px";
    
}