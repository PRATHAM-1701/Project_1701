function showMap(name, coordinates) {
    const mapContainer = document.getElementById('map-container');
    const profileName = document.getElementById('profile-name');
    const map = document.getElementById('map');

    profileName.innerText = `${name}'s Location`;
    map.innerText = `Map would show coordinates: ${coordinates}`;
    mapContainer.classList.remove('hidden');
}

function closeMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.classList.add('hidden');
}
