// HTML:
// <button onclick="transitionToAboutUs()">Go to About Us</button>

function transitionToAboutUs() {
    // Fade out current content
    document.getElementById('currentContent').style.opacity = '0';
    
    // Wait for the transition to complete
    setTimeout(function() {
      // Hide current content
      document.getElementById('currentContent').style.display = 'none';
      
      // Show About Us content
      document.getElementById('aboutUsContent').style.display = 'block';
      
      // Fade in About Us content
      setTimeout(function() {
        document.getElementById('aboutUsContent').style.opacity = '1';
      }, 50);
    }, 3000); // Adjust the delay to match your transition time
  }