async function renderISSMap() {
  const map = L.map('iss-map', {
    minZoom: 2,
    maxZoom: 15,
  });

  const cartodbAttribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution,
  }).addTo(map);

  const { latitude, longitude } = await getISSPosition();

  map.setView([latitude, longitude], 3);

  L.circle([latitude, longitude], {
    color: 'blue',
    fillColor: '#00f',
    fillOpacity: 1,
    radius: 1000,
  }).addTo(map);
}

async function getISSPosition() {
  const ISSNow = await callApi('http://api.open-notify.org/iss-now.json');
  const latitude = ISSNow.iss_position.latitude;
  const longitude = ISSNow.iss_position.longitude;
  return { latitude, longitude };
}

async function renderPeopleInSpace() {
  const peopleInSpace = await callApi('http://api.open-notify.org/astros.json');

  const peopleInSpaceContainer = document.getElementById(
    'people-in-space-container'
  );

  for (let i = 0; i < peopleInSpace.people.length; i++) {
    const person = peopleInSpace.people[i];

    const personContainer = document.createElement('div');
    personContainer.className = 'person-container';

    const craftParagraph = document.createElement('h4');
    craftParagraph.innerText = 'Spacecraft: ' + person.craft;
    const nameParagraph = document.createElement('p');
    nameParagraph.innerText = person.name;

    personContainer.appendChild(craftParagraph);
    personContainer.appendChild(nameParagraph);
    peopleInSpaceContainer.appendChild(personContainer);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  renderPeopleInSpace();
  renderISSMap();
});
