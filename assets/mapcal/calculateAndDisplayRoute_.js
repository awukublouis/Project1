function calculateAndDisplayRoute(directionsService,
    directionsRenderer) {
    directionsService.route(
    {
    origin: {
    query: document.getElementById("start").value,
    },
    destination: {
    query: document.getElementById("end").value,
    },
    travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
    if (status === "OK") {
    directionsRenderer.setDirections(response);
    } else {
    window.alert("Directions request failed due to " + status);
    }
    }
    );
    }