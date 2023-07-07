// Create speakers cards
const mobileSpeakers = [
  {
    imageSrc: './images/speakers/Jim Simons.jpg',
    name: 'Jim Simons',
    role: 'Mathematician and founder of Renaissance Tech',
    description: 'Known for quantitative hedge funding',
  },
  {
    imageSrc: './images/speakers/Ray Dalio.jpg',
    name: 'Ray Dalio',
    role: 'Founder, Bridgewater Associates',
    description: 'Renowned hedge fund manager and author',
  },
  {
    imageSrc: './images/speakers/Mary Erdoes.jpg',
    name: 'Mary Erdoes',
    role: 'CEO, J.P. Morgan',
    description: 'Recognized for her strategic vision and client-centric approach.',
  },
  {
    imageSrc: './images/speakers/Carl Icahn.jpg',
    name: 'Carl Icahn',
    role: 'Chairman, Icahn Enterprises',
    description: 'Known for his aggressive investment strategies',
  },
  {
    imageSrc: './images/speakers/Larry Fink.jpg',
    name: 'Larry Fink',
    role: 'CEO of BlackRock',
    description: 'Known for advocating sustainable investing',
  },
  {
    imageSrc: './images/speakers/Ken Griffin.jpg',
    name: 'Ken Griffin',
    role: 'Founder CEO of Citadel',
    description: 'Known for his quantitative trading strategies',
  },
];

// Create the first section for mobile

var speakerlist = mobileSpeakers;

function createSection(speakerlist) {
  const mobileSection = document.getElementById('speaker-mobile');
  mobileSection.innerHTML = '';
  mobileSection.className = 'speakers';
  
  const mobileHeading = document.createElement('h3');
  mobileHeading.textContent = 'Featured Speakers';
  mobileHeading.className = 'heading';
  mobileSection.appendChild(mobileHeading);
  
  const breakline = document.createElement('div');
  breakline.className = 'endline';
  mobileSection.appendChild(breakline);
  
  const mobileSpeakerContainer = document.createElement('div');
  mobileSpeakerContainer.className = 'speakercard-container';
  mobileSpeakerContainer.innerHTML = ''; 
  speakerlist.forEach((speaker) => {
    const card = document.createElement('div');
    card.className = 'speaker-card';
  
    const image = document.createElement('img');
    image.src = speaker.imageSrc;
    image.alt = 'speaker1';
    card.appendChild(image);
  
    const speakerDetail = document.createElement('div');
    speakerDetail.className = 'speaker-detail';
  
    const speakerName = document.createElement('h4');
    speakerName.textContent = speaker.name;
    speakerName.className = 'speaker-name';
    speakerDetail.appendChild(speakerName);
  
    const speakerRole = document.createElement('h5');
    speakerRole.textContent = speaker.role;
    speakerRole.className = 'speaker-designation';
    speakerDetail.appendChild(speakerRole);
  
    const dottedline = document.createElement('div');
    dottedline.className= 'dot-line';
    dottedline.innerHTML = `<div class="single-dot"></div>
                            <div class="single-dot"></div>
                            <div class="single-dot"></div>
                            <div class="single-dot"></div>
                            <div class="single-dot"></div>`;
    speakerDetail.appendChild(dottedline);
  
    const speakerDescription = document.createElement('p');
    speakerDescription.textContent = speaker.description;
    speakerDescription.className = 'speaker-about';
    speakerDetail.appendChild(speakerDescription);
  
    card.appendChild(speakerDetail);
    mobileSpeakerContainer.appendChild(card);
  });
  
  
  mobileSection.appendChild(mobileSpeakerContainer);
  
  }
if (window.innerWidth < 768) {
  speakerlist = mobileSpeakers.slice(0,2);
}


//See button functions
const seeMore = document.getElementById('see-more');
const seeLess = document.getElementById('see-less');

seeMore.addEventListener('click', () =>{
  seeLess.style.display = 'flex';
  seeMore.style.display = 'none';
  speakerlist = mobileSpeakers;
  createSection(speakerlist);
});

seeLess.addEventListener('click', () =>{
  seeLess.style.display = 'none';
  seeMore.style.display = 'flex';
  speakerlist = mobileSpeakers.slice(0,2);
  createSection(speakerlist)
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    speakerlist = mobileSpeakers;
    createSection(speakerlist);
    seeMore.style.display = 'none';
  }else if(window.innerWidth < 768){
    speakerlist = mobileSpeakers.slice(0,2);
    createSection(speakerlist);
    seeMore.style.display = 'flex';
  }
  seeLess.style.display = 'none';
});

createSection(speakerlist);
//Create the speakers section
