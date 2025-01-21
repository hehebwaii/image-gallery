// References to HTML elements
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');

// Array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Object containing alternative text for each image
const imageAltTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Rock formation in a desert',
  'pic3.jpg': 'Purple and white flowers',
  'pic4.jpg': 'Ancient temple at sunset',
  'pic5.jpg': 'A view of the sea through cliffs',
};

// Loop through the images to create thumbnails
for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  const srcPath = `images/${imageFilenames[i]}`;
  const altText = imageAltTexts[imageFilenames[i]];

  newImage.setAttribute('src', srcPath);
  newImage.setAttribute('alt', altText);
  thumbBar.appendChild(newImage);

  // Add click event listener to display the clicked image
  newImage.addEventListener('click', () => {
    displayedImg.setAttribute('src', srcPath);
    displayedImg.setAttribute('alt', altText);
  });
}

// Add click event listener to the "Darken/Lighten" button
btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');

  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
