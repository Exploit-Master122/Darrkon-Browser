// script.js
document.addEventListener('DOMContentLoaded', () => {
  const urlInput = document.getElementById('url-input');
  const searchButton = document.getElementById('search-button');
  const proxyFrame = document.getElementById('proxy-frame');

  // Handle search button click
  searchButton.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (url) {
      // Ensure the URL starts with http/https
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        urlInput.value = `https://${url}`;
      }
      proxyFrame.src = url;
    }
  });

  // Handle Enter key press in the input field
  urlInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      searchButton.click();
    }
  });
});

// Initialize particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded');
});
