const projects = [
  {
    id: 1,
    name: 'Beware of Religious Spirit',
    image: 'img/message-1.jpg',
    videoMp4: 'videos/Beware of Religious spirits.mp4',
    videoWebm: 'videos/Beware of Religious spirits.webm',
  },
  {
    id: 1,
    name: "God's Mercy shown through us",
    image: 'img/message-2.jpg',
    videoMp4: 'videos/Gods Mercy Shown Through Us.mp4',
    videoWebm: 'videos/Gods Mercy Shown Through Us.webm',
  },
  {
    id: 1,
    name: 'How to unlock your season',
    image: 'img/message-3.jpg',
    videoMp4: 'videos/How To Unlock your Season.mp4',
    videoWebm: 'videos/How To Unlock your Season.webm',
  },
];

const projectCards = document.querySelector('.message-cards');

/* 

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


*/

projects.forEach((project, i) => {
  const div = document.createElement('div');
  div.className = 'message-card';
  div.innerHTML = `  <video controls preload="metadata" loading="lazy" poster=${project.image}>
  <source src='${project.videoMp4}' type="video/mp4">

  Your browser does not support the video tag.
</video>
<p>${project.name}</p>
          `;
  projectCards.appendChild(div);
});

/*

<video width="640" height="360" controls preload="metadata">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

*/

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

const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const navBar = document.querySelector('.navBar');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLogo = document.querySelector('.logo');
const mobileNavLink = document.querySelectorAll('.nav-link');
const mainContainer = document.querySelector('.main-container');
const bottomLine = document.querySelector('.bottom_line');

//Handle hamburger click
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
