// Create speakers cards
const mobileSpeakers = [
    {
      imageSrc: './images/speakers/Jim Simons.jpg',
      name: 'Jim Simons',
      role: 'Mathematician and founder of Renaissance Tech',
      description: 'Known for quantitative hedge funding'
    },
    {
      imageSrc: './images/speakers/Ray Dalio.jpg',
      name: 'Ray Dalio',
      role: 'Founder, Bridgewater Associates',
      description: 'Renowned hedge fund manager and author'
    },
    {
      imageSrc: './images/speakers/Mary Erdoes.jpg',
      name: 'Mary Erdoes',
      role: 'CEO, J.P. Morgan',
      description: 'Recognized for her vision and client-centric approach'
    },
    {
      imageSrc: './images/speakers/Carl Icahn.png',
      name: 'Carl Icahn',
      role: 'Chairman, Icahn Enterprises',
      description: 'Known for his aggressive investment strategies'
    },
    {
      imageSrc: './images/speakers/Larry Fink.jpg',
      name: 'Larry Fink',
      role: 'CEO of BlackRock',
      description: 'Known for advocating sustainable investing'
    },
    {
      imageSrc: './images/speakers/Ken Griffin.jpg',
      name: 'Ken Griffin',
      role: 'Founder CEO of Citadel',
      description: 'Known for his quantitative trading strategies'
    }
  ];

// Create the first section for mobile
const mobileSection = document.getElementById('speaker-mobile');
mobileSection.className = 'speakers mobile';

const mobileHeading = document.createElement('h1');
mobileHeading.textContent = 'Featured Speakers';
mobileSection.appendChild(mobileHeading);

const mobileSpeakerContainer = document.createElement('div');
mobileSpeakerContainer.className = 'speaker-col';



mobileSpeakers.forEach(speaker => {
  const card = document.createElement('div');
  card.className = 'card';

  const image = document.createElement('img');
  image.src = speaker.imageSrc;
  image.alt = 'speaker1';
  card.appendChild(image);

  const speakerDetail = document.createElement('div');
  speakerDetail.className = 'speaker-detail';

  const speakerName = document.createElement('h2');
  speakerName.textContent = speaker.name;
  speakerDetail.appendChild(speakerName);

  const speakerRole = document.createElement('h4');
  speakerRole.textContent = speaker.role;
  speakerDetail.appendChild(speakerRole);

  const speakerDescription = document.createElement('p');
  speakerDescription.textContent = speaker.description;
  speakerDetail.appendChild(speakerDescription);

  card.appendChild(speakerDetail);
  mobileSpeakerContainer.appendChild(card);
});

mobileSection.appendChild(mobileSpeakerContainer);

// Create the second section for desktop
const desktopSection = document.getElementById('speaker-desktop');
desktopSection.className = 'speakers desktop';

const desktopHeading = document.createElement('h1');
desktopHeading.textContent = 'Featured Speakers';
desktopSection.appendChild(desktopHeading);

const desktopSpeakerRow = document.createElement('div');
desktopSpeakerRow.className = 'speaker-row row';

// Create speaker cards for desktop section
const desktopSpeakers = mobileSpeakers; // Use the same speakers as in the mobile section

desktopSpeakers.forEach(speaker => {
  const col = document.createElement('div');
  col.className = 'col-6';

  const card = document.createElement('div');
  card.className = 'card';

  const image = document.createElement('img');
  image.src = speaker.imageSrc;
  image.alt = 'speaker1';
  card.appendChild(image);

  const speakerDetail = document.createElement('div');
  speakerDetail.className = 'speaker-detail';

  const speakerName = document.createElement('h2');
  speakerName.textContent = speaker.name;
  speakerDetail.appendChild(speakerName);

  const speakerRole = document.createElement('h4');
  speakerRole.textContent = speaker.role;
  speakerDetail.appendChild(speakerRole);

  const speakerDescription = document.createElement('p');
  speakerDescription.textContent = speaker.description;
  speakerDetail.appendChild(speakerDescription);

  card.appendChild(speakerDetail);
  col.appendChild(card);
  desktopSpeakerRow.appendChild(col);
});

desktopSection.appendChild(desktopSpeakerRow);


