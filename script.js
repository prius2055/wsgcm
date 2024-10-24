const projects = [
  {
    id: 1,
    name: 'Beware of Religious Spirit',
    image: 'img/message-1.jpg',
    liveDemo: 'https://www.youtube.com/live/ITKM9wSZr4Q',
  },

  {
    id: 2,
    name: "God's mercy shown through us",
    image: 'img/message-2.jpg',
    liveDemo: 'https://www.youtube.com/live/Iu107V6q87k',
  },

  {
    id: 3,
    name: 'How To Unlock Yor Season',
    image: 'img/message-3.jpg',
    liveDemo: 'https://www.youtube.com/live/07QQas2ERgw',
  },
];

const projectCards = document.querySelector('.message-cards');

projects.forEach((project, i) => {
  const div = document.createElement('div');
  div.className = 'message-card';
  div.innerHTML = `  <a href="${project.liveDemo}" target="_blank">
   <img src='${project.image}' alt='project image' class='message-img id='message-img/>
    <p>${project.name}</p>
   </a>
          `;
  projectCards.appendChild(div);
});

//Handle scroll animation
const messageCards = document.querySelectorAll('.message-card');
const messageImages = document.querySelectorAll('.message-img');
const messageNotes = document.querySelectorAll('.message-notes');

const believes = document.querySelector('.believes');

console.log(believes);

const objectInView = (card, percentageScroll = 100) => {
  const cardTop = card.getBoundingClientRect().top;
  return (
    cardTop <=
    (window.innerHeight || document.documentElement.clientHeight) *
      (percentageScroll / 100)
  );
};

const objectOutOfView = (card) => {
  const elementTop = card.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const handleScrollAnimation = () => {
  messageImages.forEach((image) => {
    if (objectInView(image, 65)) {
      image.classList.add('scrolled');
    } else if (objectOutOfView(image)) {
      image.classList.remove('scrolled');
    }
  });

  messageNotes.forEach((note) => {
    if (objectInView(note, 65)) {
      note.classList.add('scrolled');
    } else if (objectOutOfView(note)) {
      note.classList.remove('scrolled');
    }
  });

  messageCards.forEach((message) => {
    if (objectInView(message, 65)) {
      message.classList.add('scrolled');
    } else if (objectOutOfView(message)) {
      message.classList.remove('scrolled');
    }
  });

  if (objectInView(believes, 65)) {
    believes.classList.add('scrolled');
  } else if (objectOutOfView(believes)) {
    believes.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

const header = document.querySelector('.header');
const navBar = document.querySelector('.navBar');
const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
const mobileNavLogo = document.querySelector('.logo');
const mobileNavLink = document.querySelectorAll('.nav-link');
const mainContainer = document.querySelector('.main-container');
const bottomLine = document.querySelector('.bottom_line');

hamburger.addEventListener('click', () => {
  header.classList.toggle('active');
  navBar.classList.toggle('active');
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  mobileNavLogo.classList.toggle('active');
  mainContainer.classList.toggle('active');
  bottomLine.classList.toggle('active');
});

mobileNavLink.forEach((nav) => {
  nav.addEventListener('click', () => {
    header.classList.toggle('active');
    navBar.classList.toggle('active');
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
    mobileNavLogo.classList.toggle('active');
    mainContainer.classList.toggle('active');
    bottomLine.classList.toggle('active');
  });
});
