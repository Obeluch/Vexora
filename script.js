document.addEventListener("DOMContentLoaded", function() {
  // Simulate a video-like boot sequence for 3 seconds
  setTimeout(function() {
    const intro = document.getElementById('intro');
    intro.style.transition = "opacity 1s ease";
    intro.style.opacity = 0;
    setTimeout(function() {
      intro.style.display = "none";
      const mainContent = document.getElementById('main-content');
      mainContent.style.display = "block";
      // Reveal the main content with a fade-in effect
      setTimeout(function() {
        mainContent.style.opacity = 1;
      }, 100);
    }, 1000);
  }, 3000);

  // Button click event for further interaction
  document.getElementById('learnMore').addEventListener('click', function() {
    alert("Stay tuned for more updates!");
  });
});