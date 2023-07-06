const menuButton = document.querySelector('.navbar-toggler');
const otherComponents = document.querySelectorAll('section,footer');
const menuPage = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-button');

menuButton.addEventListener('click', () => {
  console.log("Hello, it's being called");
  otherComponents.forEach((subelements) => {
    subelements.classList.add('hide-seek');
  });
  menuPage.style.display = 'block';
  menuButton.classList.add('hide-seek');
});

closeButton.addEventListener('click', () => {
  console.log('Hello, closebutton is being called');
  menuPage.style.display = 'none';
  menuButton.classList.remove('hide-seek');
  otherComponents.forEach((subelements) => {
    subelements.classList.remove('hide-seek');
  });
});