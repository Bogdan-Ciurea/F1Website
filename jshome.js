var counter = 1;
setInterval(function(){
    for(i = 1; i < 8; i++){
        if(document.getElementById('radio' + i).checked == true){
            counter = i + 1;
            break;
        }
    }
    if(counter > 7){
        counter = 1;
    }
    document.getElementById('radio' + counter ).checked = true;
    
}, 5000);

var x = document.getElementById("get_location");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(shearchClosestRace, showError);
    } 
    else {
        x.innerHTML = "Geolocation is not supported!";
    }
}

function showDetais(race){
    var bah = document.getElementById("bahrain");
    bah.style.display = "none";
    var eml = document.getElementById("emiliaromagna");
    eml.style.display = "none";
    var por = document.getElementById("portugal");
    por.style.display = "none";
    var spain = document.getElementById("spain");
    spain.style.display = "none";
    var mon = document.getElementById("monaco");
    mon.style.display = "none";
    var aze = document.getElementById("azerbaijan");
    aze.style.display = "none";
    var can = document.getElementById("canada");
    can.style.display = "none";
    var fra = document.getElementById("france");
    fra.style.display = "none";
    var austria = document.getElementById("austria");
    austria.style.display = "none";
    var uk = document.getElementById("uk");
    uk.style.display = "none";
    var hun = document.getElementById("hungary");
    hun.style.display = "none";
    var bel = document.getElementById("belgium");
    bel.style.display = "none";
    var neth = document.getElementById("netherlands");
    neth.style.display = "none";
    var monza = document.getElementById("monza");
    monza.style.display = "none";
    var russia = document.getElementById("russia");
    russia.style.display = "none";
    var sin = document.getElementById("singapore");
    sin.style.display = "none";
    var jap = document.getElementById("japan");
    jap.style.display = "none";
    var us = document.getElementById("us");
    us.style.display = "none";
    var mexico = document.getElementById("mexico");
    mexico.style.display = "none";
    var brazil = document.getElementById("brazil");
    brazil.style.display = "none";
    var australia = document.getElementById("australia");
    australia.style.display = "none";
    var sau = document.getElementById("saudiarabia");
    sau.style.display = "none";
    var abudhabi = document.getElementById("abudhabi");
    abudhabi.style.display = "none";

    var x = document.getElementById(race);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

function shearchClosestRace(position){
    //find all the distances between the current location and the races
    var bahrain = distance(position.coords.latitude, position.coords.longitude, 26.0293007, 50.5113901),
        emiliaromagna = distance(position.coords.latitude, position.coords.longitude, 44.3440839, 11.7119876),
        portugal = distance(position.coords.latitude, position.coords.longitude, 37.2313331, -8.6305163),
        spain = distance(position.coords.latitude, position.coords.longitude, 41.5667405, 2.2535451),
        monaco = distance(position.coords.latitude, position.coords.longitude, 43.7351613, 7.418661),
        azerbaijan = distance(position.coords.latitude, position.coords.longitude, 40.3729181, 49.8509929),
        canada = distance(position.coords.latitude, position.coords.longitude, 45.5016487, -7.5302228),
        france = distance(position.coords.latitude, position.coords.longitude, 43.2517169, 5.7905428),
        austria = distance(position.coords.latitude, position.coords.longitude, 47.220181, 14.7629977),
        uk = distance(position.coords.latitude, position.coords.longitude, 52.0733006, -1.0168521),
        hungary = distance(position.coords.latitude, position.coords.longitude, 47.5817111, 19.2484219),
        belgium = distance(position.coords.latitude, position.coords.longitude, 50.4369118, 5.9698613),
        netherlands = distance(position.coords.latitude, position.coords.longitude, 52.3877081, 4.5420241),
        monza = distance(position.coords.latitude, position.coords.longitude, 45.621799, 9.2826113),
        russia = distance(position.coords.latitude, position.coords.longitude, 43.4099851, 39.9668377),
        singapore = distance(position.coords.latitude, position.coords.longitude, 1.2914319, 103.861721),
        japan = distance(position.coords.latitude, position.coords.longitude, 34.8455935, 136.5367635),
        us = distance(position.coords.latitude, position.coords.longitude, 30.1345808, -97.6380398),
        mexico = distance(position.coords.latitude, position.coords.longitude, 19.4059448,-99.0947103),
        brazil = distance(position.coords.latitude, position.coords.longitude, -23.7012538,-46.69995),
        australia = distance(position.coords.latitude, position.coords.longitude, -37.8500625, 144.9668315),
        saudiarabia = distance(position.coords.latitude, position.coords.longitude, 21.631944, 39.104444),
        abudhabi = distance(position.coords.latitude, position.coords.longitude, 24.4699413, 54.6039939);
    var min = bahrain;
    
    //find the minimum distance
    if(min > emiliaromagna) min = emiliaromagna;
    if(min > portugal) min = portugal;
    if(min > spain) min = spain;
    if(min > monaco) min = monaco;
    if(min > azerbaijan) min = azerbaijan;
    if(min > canada) min = canada;
    if(min > france) min = france;
    if(min > austria) min = austria;
    if(min > uk) min = uk;
    if(min > hungary) min = hungary;
    if(min > belgium) min = belgium;
    if(min > netherlands) min = netherlands;
    if(min > monza) min = monza;
    if(min > russia) min = russia;
    if(min > singapore) min = singapore;
    if(min > japan) min = japan;
    if(min > us) min = us;
    if(min > mexico) min = mexico;
    if(min > brazil) min = brazil;
    if(min > australia) min = australia;
    if(min > saudiarabia) min = saudiarabia;
    if(min > abudhabi) min = abudhabi;

    //show the location of the race, the distance, the date and the full name
    if(min == bahrain) {
        showOnMap(26.0293007, 50.5113901);
        showDetais("bahrain");
        bahrain = Math.round(bahrain * 100) / 100;
        var text = "Distance: " + bahrain + " km";
        x = document.getElementById("distancebah").innerHTML = text;
    }
    if(min == emiliaromagna) {
        showOnMap(44.3440839, 11.7119876);
        showDetais("emiliaromagna");
        emiliaromagna = Math.round(emiliaromagna * 100) / 100;
        var text = "Distance: " + emiliaromagna + " km";
        x = document.getElementById("distanceemi").innerHTML = text;
    }
    if(min == portugal) {
        showOnMap(37.2313331, -8.6305163);
        showDetais("portugal");
        portugal = Math.round(portugal * 100) / 100;
        var text = "Distance: " + portugal + " km";
        x = document.getElementById("distancepor").innerHTML = text;
    }
    if(min == spain) {
        showOnMap(41.5667405, 2.2535451);
        showDetais("spain");
        spain = Math.round(spain * 100) / 100;
        var text = "Distance: " + spain + " km";
        x = document.getElementById("distancespain").innerHTML = text;
    }
    if(min == monaco) {
        showOnMap(43.7351613, 7.418661);
        showDetais("monaco");
        monaco = Math.round(monaco * 100) / 100;
        var text = "Distance: " + monaco + " km";
        x = document.getElementById("distancemonaco").innerHTML = text;
    }
    if(min == azerbaijan) {
        showOnMap(40.3729181, 49.8509929);
        showDetais("azerbaijan");
        azerbaijan = Math.round(azerbaijan * 100) / 100;
        var text = "Distance: " + azerbaijan + " km";
        x = document.getElementById("distanceazer").innerHTML = text;
    }
    if(min == canada) {
        showOnMap(45.5016487, -7.5302228);
        showDetais("canada");
        canada = Math.round(canada * 100) / 100;
        var text = "Distance: " + canada + " km";
        x = document.getElementById("distancecan").innerHTML = text;
    }
    if(min == france) {
        showOnMap(43.2517169, 5.7905428);
        showDetais("france");
        france = Math.round(france * 100) / 100;
        var text = "Distance: " + france + " km";
        x = document.getElementById("distancefra").innerHTML = text;
    }
    if(min == austria) {
        showOnMap(47.220181, 14.7629977);
        showDetais("austria");
        austria = Math.round(austria * 100) / 100;
        var text = "Distance: " + austria + " km";
        x = document.getElementById("distanceaustria").innerHTML = text;
    }
    if(min == uk) {
        showOnMap(52.0733006, -1.0168521);
        showDetais("uk");
        uk = Math.round(uk * 100) / 100;
        var text = "Distance: " + uk + " km";
        x = document.getElementById("distanceuk").innerHTML = text;
    }
    if(min == hungary) {
        showOnMap(47.5817111, 19.2484219);
        showDetais("hungary");
        hungary = Math.round(hungary * 100) / 100;
        var text = "Distance: " + hungary + " km";
        x = document.getElementById("distancehun").innerHTML = text;
    }
    if(min == belgium) {
        showOnMap(50.4369118, 5.9698613);
        showDetais("belgium");
        belgium = Math.round(belgium * 100) / 100;
        var text = "Distance: " + belgium + " km";
        x = document.getElementById("distancebel").innerHTML = text;
    }
    if(min == netherlands) {
        showOnMap(52.3877081, 4.5420241);
        showDetais("netherlands");
        netherlands = Math.round(netherlands * 100) / 100;
        var text = "Distance: " + netherlands + " km";
        x = document.getElementById("distanceneth").innerHTML = text;
    }
    if(min == monza) {
        showOnMap(45.621799, 9.2826113);
        showDetais("monza");
        monza = Math.round(monza * 100) / 100;
        var text = "Distance: " + monza + " km";
        x = document.getElementById("distancemanza").innerHTML = text;
    }
    if(min == russia) {
        showOnMap(43.4099851, 39.9668377);
        showDetais("russia");
        russia = Math.round(russia * 100) / 100;
        var text = "Distance: " + russia + " km";
        x = document.getElementById("distancerussia").innerHTML = text;
    }
    if(min == singapore) {
        showOnMap(1.2914319, 103.861721);
        showDetais("singapore");
        singapore = Math.round(singapore * 100) / 100;
        var text = "Distance: " + singapore + " km";
        x = document.getElementById("distancesin").innerHTML = text;
    }
    if(min == japan) {
        showOnMap(34.8455935, 136.5367635);
        showDetais("japan");
        japan = Math.round(japan * 100) / 100;
        var text = "Distance: " + japan + " km";
        x = document.getElementById("distancejap").innerHTML = text;
    }
    if(min == us) {
        showOnMap(30.1345808, -97.6380398);
        showDetais("us");
        us = Math.round(us * 100) / 100;
        var text = "Distance: " + us + " km";
        x = document.getElementById("distanceus").innerHTML = text;
    }
    if(min == mexico) {
        showOnMap(19.4059448,-99.0947103);
        showDetais("mexico");
        mexico = Math.round(mexico * 100) / 100;
        var text = "Distance: " + mexico + " km";
        x = document.getElementById("distancemex").innerHTML = text;
    }
    if(min == brazil) {
        showOnMap(-23.7012538,-46.69995);
        showDetais("brazil");
        brazil = Math.round(brazil * 100) / 100;
        var text = "Distance: " + brazil + " km";
        x = document.getElementById("distancebra").innerHTML = text;
    }
    if(min == australia) {
        showOnMap(-37.8500625, 144.9668315);
        showDetais("australia");
        australia = Math.round(australia * 100) / 100;
        var text = "Distance: " + australia + " km";
        x = document.getElementById("distanceaus").innerHTML = text;
    }
    if(min == saudiarabia) {
        showOnMap(21.631944, 39.104444);
        showDetais("saudiarabia");
        saudiarabia = Math.round(saudiarabia * 100) / 100;
        var text = "Distance: " + saudiarabia + " km";
        x = document.getElementById("distancesaud").innerHTML = text;
    }
    if(min == abudhabi) {
        showOnMap( 24.4699413, 54.6039939);
        showDetais("abudhabi");
        abudhabi = Math.round(abudhabi * 100) / 100;
        var text = "Distance: " + abudhabi + " km";
        x = document.getElementById("distanceabu").innerHTML = text;
    }

}

function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        unit = "K";
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var theta = lon1-lon2;
        var radtheta = Math.PI * theta/180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist;
    }
}

function showOnMap(lat, long){
    var coords = lat + ', ' + long;
    document.getElementById('google_map').setAttribute('src', 'https://maps.google.co.uk/?q=' + coords + '&z=7&output=embed');
}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation!");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable!");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out!");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred!");
        break;
    }
}