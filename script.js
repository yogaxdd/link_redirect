// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Get DOM elements
const urlInput = document.getElementById('url-input');
const launchButton = document.getElementById('launch-button');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const header = document.querySelector('.header');

// Show header with fade-in animation
setTimeout(() => {
  header.style.opacity = '1';
}, 100);

// Validate URL function
function isValidUrl(url) {
  try {
    // Add http if missing
    const urlToCheck = url.match(/^https?:\/\//) ? url : `http://${url}`;
    new URL(urlToCheck);
    return true;
  } catch (err) {
    return false;
  }
}

// Show toast message
function showToast(message, isError = false) {
  toastMessage.textContent = message;
  toast.style.backgroundColor = isError ? '#f44336' : '#4CAF50';
  toast.classList.add('show');
  
  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Handle launch button click
function handleLaunch() {
  const link = urlInput.value;
  
  if (!link.trim()) {
    showToast('Silakan masukkan URL terlebih dahulu', true);
    return;
  }
  
  if (!isValidUrl(link)) {
    showToast('URL tidak valid, coba periksa kembali', true);
    return;
  }
  
  // Add http:// prefix if not present
  const urlToOpen = link.match(/^https?:\/\//) ? link : `http://${link}`;
  
  // Open in new tab
  window.open(urlToOpen, '_blank');
}

// Add event listeners
launchButton.addEventListener('click', handleLaunch);
urlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleLaunch();
  }
});
