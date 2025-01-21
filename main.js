btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class'); // Get the current class of the button

  if (currentClass === 'dark') {
    // Switch to "light" mode
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Apply a dark overlay
  } else {
    // Switch back to "dark" mode
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Remove the overlay
  }
});
