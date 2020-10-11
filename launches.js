async function renderUpcomingLaunches() {
  const launches = await callApi(
    'https://api.spacexdata.com/v4/launches/upcoming'
  );

  const upcomingLaunchesContainer = document.getElementById(
    'upcoming-launches-container'
  );

  for (let i = 0; i < launches.length; i++) {
    const launch = launches[i];

    const currentDate = new Date();
    const launchDate = new Date(launch.date_unix * 1000);

    if (launchDate < currentDate) {
      continue;
    }
    const launchContainer = document.createElement('div');
    launchContainer.className = 'launch-container dark-background';

    const launchNameHeader = document.createElement('h4');
    launchNameHeader.innerText = launch.name;

    const launchDateText = document.createElement('p');
    launchDateText.innerText =
      launchDate.toLocaleDateString() + ' ' + launchDate.toLocaleTimeString();

    launchContainer.appendChild(launchNameHeader);
    launchContainer.appendChild(launchDateText);

    upcomingLaunchesContainer.appendChild(launchContainer);
  }
}

async function renderPastLaunches() {
  const launches = await callApi('https://api.spacexdata.com/v4/launches/past');

  const recentLaunches = launches.sort((a, b) => b.date_unix - a.date_unix);

  const pastLaunchesContainer = document.getElementById(
    'past-launches-container'
  );

  for (let i = 0; i < recentLaunches.length && i < 10; i++) {
    const launch = recentLaunches[i];

    const currentDate = new Date();
    const launchDate = new Date(launch.date_unix * 1000);

    if (launchDate > currentDate) {
      continue;
    }
    const launchContainer = document.createElement('div');
    launchContainer.className = 'launch-container dark-background';

    const launchNameHeader = document.createElement('h4');
    launchNameHeader.innerText = launch.name;

    const launchDateText = document.createElement('p');
    launchDateText.innerText =
      launchDate.toLocaleDateString() + ' ' + launchDate.toLocaleTimeString();

    launchContainer.appendChild(launchNameHeader);
    launchContainer.appendChild(launchDateText);

    pastLaunchesContainer.appendChild(launchContainer);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  renderUpcomingLaunches();
  renderPastLaunches();
});
