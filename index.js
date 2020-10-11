async function renderPage() {
  const dailyPicture = await callApi(
    'https://api.nasa.gov/planetary/apod?api_key=Ci1bLlsFOb89gvgLwOfjtBQBpElaPwgoApqo6Dwn'
  );

  const dailyPictureContainer = document.getElementById(
    'daily-picture-container'
  );

  const dailyPictureImg = document.createElement('img');
  dailyPictureImg.src = dailyPicture.url;
  dailyPictureImg.alt = dailyPicture.title;

  dailyPictureContainer.appendChild(dailyPictureImg);

  const dailyTextContainer = document.getElementById('daily-text-container');

  const dailyPictureParagraph = document.createElement('p');
  dailyPictureParagraph.innerText = dailyPicture.explanation;

  dailyTextContainer.appendChild(dailyPictureParagraph);
}

document.addEventListener('DOMContentLoaded', function () {
  renderPage();
});
