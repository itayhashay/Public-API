var lar;
var long;
function GetMap() {

    if (navigator.geolocation) {

        navigator.geolocation.watchPosition(showPosition);
    } else {
        // < !-- .innerHTML = "Geolocation is not supported by this browser."; -->
    }
}
function showPosition(position) {
    lar = position.coords.latitude;
    long = position.coords.longitude;
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'Your Bing Maps Key',
        center: new Microsoft.Maps.Location(lar, long)
    });

    var center = map.getCenter();

    //Create custom Pushpin
    var pin = new Microsoft.Maps.Pushpin(center, {
        title: 'Your Location'
    });

    //Add the pushpin to the map
    map.entities.push(pin);
}