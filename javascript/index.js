'use strict';

//Routes
const urls = {
  projectsURL: 'https://github.com/Williams247?tab=repositories',
  facebookURL: 'https://www.facebook.com/williams.godswill.39/',
  twitterURL: 'https://twitter.com/William33199979',
  linkedinURL: 'https://www.linkedin.com/in/williams-alex-17b3201a3/',
  resumeURL: 'resume/resume.pdf'
};

//Destructured route object
const { projectsURL, facebookURL, twitterURL, linkedinURL, resumeURL } = urls;

//My email addresses
const emails = {
  firstEmail: 'williamsalexjr@gmail.com',
  lastEmail: 'godswillwilliams9@gmail.com'
};

//Destructured email addresses
const { firstEmail, lastEmail } = emails;

//Navigation bar
const nav = document.querySelector('#header');
//Scroll function to the navigation bar
window.addEventListener('scroll', scrollFunc);

function scrollFunc() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      nav.classList.add('scroll-start');
      nav.classList.remove('scroll-end');
  } else {
      nav.classList.add('scroll-end');
      nav.classList.remove('scroll-start');
  }
}

//Function to move to my github repo "Projects"
const viewProjectFunc = () => window.open(projectsURL);

//Function to display my email address
const mailFunc = () => swal('My Email addresses', `${firstEmail}\n${lastEmail}`);

//Function to move to my facebook account
const facebookFunc = () => window.open(facebookURL);

//Function to move to my twitter account
const twitterFunc = () => window.open(twitterURL);

//Function to move to my linkedin profile
const linkedinFunc = () => window.open(linkedinURL);

//Function to my resume 
const linkToMyResume = () => window.open(resumeURL);

//Paths to all skills images
const imagePaths = [
  'images/skills/html.gif',
  'images/skills/css.jpg',
  'images/skills/javascript.png',
  'images/skills/bootstrap.jpg',
  'images/skills/jquery.png',
  'images/skills/react.png',
  'images/skills/redux.jpg',
  'images/skills/vue.jpg',
  'images/skills/vuex.png',
  'images/skills/nodejs.png',
  'images/skills/mongodb.png',
  'images/skills/git.png',
  'images/skills/rest_api.jpg'
];

//Current image image display
let currentIndex;

//Full image display
const mainImage = document.querySelector('.skill');

//Image modal
const showSkillsModal = document.querySelector('#skills-modal');

//Function to show full image
const showImage = index => {
  currentIndex = index;
  mainImage.src = imagePaths[currentIndex];
  mainImage.classList.remove('animate-out');
  mainImage.classList.add('animate-in');
  showSkillsModal.classList.remove('hidden'); 
}

//Function call that ensures that an images is present and ready for display
showImage(0);

//All the skills buttons
const skillsBtn = document.querySelectorAll('.code');

//A loop to run through all the skills buttons
skillsBtn.forEach(callBack => {
  callBack.addEventListener('click', () => {
    callBack.classList.add('is-skill-active-color');
    callBack.firstElementChild.classList.add('is-skill-active-state');
  });
});

//Shows the previous image
const previous = () => {
  currentIndex--;
  if(currentIndex < 0) {
    currentIndex = 0
  }
  showImage(currentIndex);
  switchActiveClass();
}

//Shows the next image
const next = () => {
  currentIndex++;
  if(currentIndex > 12) {
    currentIndex = 12
  }
  showImage(currentIndex);
  switchActiveClass();
}

//Function to indicate the active image or skill that is been viewed
const switchActiveClass = () => {
  skillsBtn.forEach(callBack => {
    callBack.classList.remove('is-skill-active-color');
    callBack.firstElementChild.classList.remove('is-skill-active-state');
  });

  document.querySelector(`#skill-${currentIndex}`).classList.add('is-skill-active-color');
  document.querySelector(`#plus-sign-${currentIndex}`).classList.add('is-skill-active-state');
}

//Function to close the big image display
const hideImage = () =>  {
  mainImage.classList.remove('animate-in');
  mainImage.classList.add('animate-out');
  setTimeout(() => {
    document.querySelector('#skills-modal').classList.add('hidden');
    skillsBtn.forEach(callBack => {
      callBack.classList.remove('is-skill-active-color');
      callBack.firstElementChild.classList.remove('is-skill-active-state');
    });
  }, 333);
}