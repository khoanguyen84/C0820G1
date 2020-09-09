function displayDateTime() {
    document.getElementById('lbDisplay').innerHTML = Date();
}

var isOn = true;

function controllLight() {
    if (isOn) {
        document.getElementById("switch").src = "images/switchoff.png";
        document.getElementById("light").src = "images/on.png";
    } else {
        document.getElementById("switch").src = "images/switchon.png";
        document.getElementById("light").src = "images/off.png";
    }
    isOn = !isOn;
}