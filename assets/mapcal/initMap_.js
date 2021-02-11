function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 43.7742762, lng: -79.5041315 },
    });
    directionsRenderer.setMap(map);
    onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document
    .getElementById("start")
    .addEventListener("change", onChangeHandler);
    document
    .getElementById("end")
    .addEventListener("change", onChangeHandler);
    }