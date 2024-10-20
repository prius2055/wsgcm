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

const projectCards = document.querySelector('.work-cards');
const modalContainer = document.querySelector('.modal-container');

projects.forEach((project, i) => {
  const div = document.createElement('div');
  div.className = 'work-card';
  div.innerHTML = `  <a href="${project.liveDemo}" target="_blank">
   <img src='${project.image}' alt='project image' class='work-img id='work-img/>
    <p>${project.name}</p>
   </a>
          `;
  projectCards.appendChild(div);
});

//Handle scroll animation
const workCards = document.querySelectorAll('.work-card');
const workImages = document.querySelectorAll('.work-img');
const workNotes = document.querySelectorAll('.work-notes');

const aboutParagraphs = document.querySelector('.about-paragraphs');

const techSkills = document.querySelectorAll('.tech-skills');

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
  workImages.forEach((image) => {
    if (objectInView(image, 65)) {
      image.classList.add('scrolled');
    } else if (objectOutOfView(image)) {
      image.classList.remove('scrolled');
    }
  });

  workNotes.forEach((note) => {
    if (objectInView(note, 65)) {
      note.classList.add('scrolled');
    } else if (objectOutOfView(note)) {
      note.classList.remove('scrolled');
    }
  });

  workCards.forEach((work) => {
    if (objectInView(work, 65)) {
      work.classList.add('scrolled');
    } else if (objectOutOfView(work)) {
      work.classList.remove('scrolled');
    }
  });

  if (objectInView(aboutParagraphs, 65)) {
    aboutParagraphs.classList.add('scrolled');
  } else if (objectOutOfView(aboutParagraphs)) {
    aboutParagraphs.classList.remove('scrolled');
  }

  techSkills.forEach((skill) => {
    if (objectInView(skill, 65)) {
      skill.classList.add('scrolled');
    } else if (objectOutOfView(skill)) {
      skill.classList.remove('scrolled');
    }
  });
};

window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

/* The modal */
const projectButtons = document.querySelectorAll('.btn-orange');
const modalOverlay = document.querySelector('.overlay');

projectButtons.forEach((btn, j) => {
  btn.addEventListener('click', (e) => {
    projects.forEach((project, i) => {
      if (j === i) {
        const modal = ` <div class='modal'>
        <div class='modal-heading'>
          <h2>${project.name}</h2>
          <img src='./img/xmark.svg' alt='cancel image' class='modal-close' />
        </div>
        <ul class='modal-list'>
          <li>${project.technology[0]}</li>
          <li>${project.technology[1]}</li>
          <li>${project.technology[2]}</li>
          <li>${project.technology[3]}</li>
        </ul>
        <div class='modal-detail'><img src='${project.image}' alt='modal hero image' />
          <div class='modal-message'>
           <p>
            ${project.description}
           </p>
           <div class='modal-buttons'>
           <a href ='${project.liveDemo}' target = '_blank' class='btn-modal'>
           <span>See Live</span
           ><img src='${project.liveVersion}' alt='share button' />
           </a>
           <a href ='${project.sourceCode}' target = '_blank' class='btn-modal'>
           <span>See Source</span
           ><img src='${project.source}' alt='share button' />
           </a>
          </div>
        
        </div>
        </div>
       </div>`;
        modalContainer.innerHTML = modal;
        document.body.append(modalContainer);
      }
    });

    modalContainer.classList.add('active');
    modalOverlay.classList.add('active');

    const modalClose = document.querySelector('.modal-close');
    modalClose.addEventListener('click', () => {
      modalContainer.classList.remove('active');
      modalOverlay.classList.remove('active');
    });
  });
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
