const apiBaseUrl = "http://localhost:3000"; // Ändere dies auf deine gehostete API-URL

function getSpeed() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(position => {
            let speed = position.coords.speed;
            if (speed === null) speed = 0; // Falls keine Geschwindigkeit gemessen wird

            let speedKmh = (speed * 3.6).toFixed(1); // m/s in km/h umrechnen
            document.getElementById('speed').innerText = speedKmh;

            getSpeedLimit(position.coords.latitude, position.coords.longitude, speedKmh);
        }, error => {
            document.getElementById('speed').innerText = "Fehler beim Standortabruf";
        }, {
            enableHighAccuracy: true
        });
    } else {
        document.getElementById('speed').innerText = "GPS nicht verfügbar";
    }
}

function getSpeedLimit(lat, lon, currentSpeed) {
    fetch(`${apiBaseUrl}/speedlimit?lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => {
            let speedLimit = data.speedLimit || "Unbekannt";
            document.getElementById('speedLimit').innerText = speedLimit;

            if (parseFloat(currentSpeed) > speedLimit) {
                document.getElementById('warning').classList.remove('hidden');
            } else {
                document.getElementById('warning').classList.add('hidden');
            }
        })
        .catch(error => {
            document.getElementById('speedLimit').innerText = "Unbekannt";
        });
}

getSpeed();