document.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('data');
  const toggleBtn = document.getElementById('toggleBtn');
  
  // Show the button
  toggleBtn.style.display = 'block';
  
  // Hide the content on page load
  content.style.display = 'none';
  
  // Update button text
  updateButtonText();
  
  // Toggle functionality
  toggleBtn.addEventListener('click', function() {
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
    updateButtonText();
  });
  
  function updateButtonText() {
    toggleBtn.textContent = content.style.display === 'none' ? 'Show data' : 'Hide data';
  }
});

