async function renderImages() {
  const imageResult = await callApi(
    'https://images-assets.nasa.gov/popular.json'
  );

  const images = imageResult.collection.items;

  const indexes = [];

  while (indexes.length < 9) {
    const randomIndex = Math.floor(Math.random() * images.length);

    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }

  const popularImagesContainer = document.getElementById(
    'popular-images-container'
  );

  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    const image = images[index];

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const imageElement = document.createElement('img');
    const [imageLink] = image.links;
    imageElement.src = imageLink.href;

    const [imageData] = image.data;
    imageElement.title = imageData.title;
    imageElement.alt = imageData.title;

    imageContainer.appendChild(imageElement);
    popularImagesContainer.appendChild(imageContainer);
  }
}

function refreshImages() {
  const popularImagesContainer = document.getElementById(
    'popular-images-container'
  );

  popularImagesContainer.innerHTML = '';
  renderImages();
}

document.addEventListener('DOMContentLoaded', function () {
  renderImages();
});
