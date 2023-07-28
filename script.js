// Declare consts.
const title = document.querySelector('.typing');
const activeMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .primary-navigation')

// Functions
function activateLyrics(element) {
    const arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    arrayText.forEach((letter, i)=> {
      setTimeout(()=> {
        element.innerHTML += letter; 
      }, 75 * i)
    });
}

// Events
activeMenu.addEventListener('click', () => {
  activeMenu.classList.toggle('fa-x');
  navMenu.classList.toggle('activated');
})

// To call functions
activateLyrics(title);




