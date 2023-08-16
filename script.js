// Declare consts.
const title = document.querySelector('.typing');
const listAll = document.querySelectorAll('.projects-processing ul li');
const buttonGeneral = document.querySelectorAll('.projects-models ul li');
const buttonAll = document.querySelectorAll('.projects-models .all');

// Img projects
const images = document.querySelectorAll('.projects-processing img');
const overlay = document.getElementById('overlay');
const enlargedImage = document.getElementById('enlarged-image');
const closeButton = document.getElementById('close-button');

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

function menuMobol(){
  const activeMenu = document.querySelector('.fa-bars');
  const navMenu = document.querySelector('header .primary-navigation')

  activeMenu.addEventListener('click', () => {
    activeMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('activated');
  })
}

function aboutMe(){
  const divExperience = document.querySelectorAll('.experience-content div');
  const liExperience = document.querySelectorAll('.experience-content ul li');
  const divEducation = document.querySelectorAll('.education-content div');
  const liEducation = document.querySelectorAll('.education-content ul li');

  divExperience[0].classList.add('active');
  liExperience[0].classList.add('active');
  divEducation[0].classList.add('active');
  liEducation[0].classList.add('active');
  
  function slideShow(index){
    divExperience.forEach((div)=> {
      div.classList.remove('active');
    });
    liExperience.forEach((button)=> {
      button.classList.remove('active');
    });
    
    divExperience[index].classList.add('active');
    liExperience[index].classList.add('active');
  }
  
  function slideShow2(index){
    divEducation.forEach((div)=> {
      div.classList.remove('active');
    });
    liEducation.forEach((button)=> {
      button.classList.remove('active');
    });
    divEducation[index].classList.add('active');
    liEducation[index].classList.add('active');
  }

  // Add events to components.
  liExperience.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
      slideShow(index)
    })
  });

  liEducation.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
      slideShow2(index)
    })
  });
}

function projectsSection(){
  function showList(loList, button = "all") {
    loList.forEach((item) => {
      item.style.display = "none";
    });
    
    switch (button) {
      case 'design':
        loList.forEach((item) => {
          if (item.classList.contains('design')) {
            item.style.display = "block";
          }
        });
        break;
      case 'socket':
        loList.forEach((item) => {
          if (item.classList.contains('socket')) {
            item.style.display = "block";
          }
        });
        break;
      case 'all':
      default:
        loList.forEach((item) => {
          item.style.display = "block";
        });
        break;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    function removeClick(index) {
      buttonGeneral.forEach((item) => {
        item.classList.remove('active');
      });
      buttonGeneral[index].classList.add('active');
    }
  
    buttonGeneral.forEach((item, index) => {
      item.addEventListener('click', () => {
        removeClick(index);
        let currentButton = item.classList.contains('all') ? 'all' : item.classList.contains('design') ? 'design' : 'socket';
        showList(listAll, currentButton);
      });
    });
  });
}

images.forEach(image => {
  image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    const alt = image.getAttribute('alt');
    const description = image.getAttribute('data-description'); // Adicione atributo data-description nas imagens
    enlargedImage.setAttribute('src', src);
    overlay.style.display = 'block';

    // Preencher o texto explicativo
    const imageDescription = document.getElementById('image-description');
    imageDescription.querySelector('h2').textContent = alt;
    imageDescription.querySelector('p').textContent = description;
  });
});

closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// To call functions.
activateLyrics(title);
menuMobol();
aboutMe();
projectsSection();




