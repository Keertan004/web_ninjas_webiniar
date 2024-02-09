// Select the elements you want to disappear
const logo = document.querySelector('.logo');
const iste = document.querySelector('.iste');
const navback = document.querySelector('.navback');
const navi = document.querySelector('.navi')
// Function to handle scroll event
function handleScroll() {
  // Check the scroll position
  const scrollPosition = window.scrollY;

  // Adjust the visibility of the elements based on scroll position
  if (scrollPosition > 50) { // Adjust the threshold as needed
    logo.style.display= 'none';
    iste.style.display = 'none';
    navback.style.opacity=0;
    navi.style.position='fixed';
    navi.style.top='0px'; 
  } else {
    logo.style.display = 'block';
    iste.style.display = 'block';
    navback.style.opacity= 1;
    navi.style.position='relative';
    navi.style.top='none';
  }
}
window.addEventListener('scroll', handleScroll);






