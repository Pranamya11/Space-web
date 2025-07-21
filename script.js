let lastScrollTop = 0;
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroSectionOffsetTop = heroSection.offsetTop;

  if (scrollTop > heroSectionOffsetTop) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});
window.addEventListener("load", () => {
  window.dispatchEvent(new Event("scroll"));
});

// Button: "Let's Explore!" in header
const exploreBtn = document.querySelector('.extra-nav button');
if (exploreBtn) {
  exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Scroll to hero section
    const hero = document.querySelector('.hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
  });
}

// Anchor: "Learn More" in hero section
const learnMoreHero = document.querySelector('.hero .text a');
if (learnMoreHero) {
  learnMoreHero.addEventListener('click', (e) => {
    e.preventDefault();
    // Scroll to about section
    const about = document.querySelector('.about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  });
}

// Anchor: "Learn More" in about section
const learnMoreAbout = document.querySelector('.about .text-action a');
if (learnMoreAbout) {
  learnMoreAbout.addEventListener('click', (e) => {
    e.preventDefault();
    alert('More about us coming soon!');
  });
}

// "See More" in destination section
const seeMore = document.querySelector('.destination .title a');
if (seeMore) {
  seeMore.addEventListener('click', (e) => {
    e.preventDefault();
    alert('More destinations coming soon!');
  });
}

// --- PLANET DATA ---
const planetData = {
  'MERCURY': {
    name: 'Mercury',
    image: 'assets/mercury.jpeg',
    moons: [],
    desc: [
      { label: 'Surface Area', value: '74.8 million km²' },
      { label: 'Temperature', value: '-173°C to 427°C' },
      { label: 'Age', value: '4.5 billion years' },
      { label: 'Gravity', value: '3.7 m/s²' },
      { label: 'Mass', value: '3.3 * 10^23 kg' },
      { label: 'Oxygen Level', value: 'Trace' },
    ],
    description: 'Mercury is the closest planet to the Sun and the smallest in the solar system.'
  },
  'VENUS': {
    name: 'Venus',
    image: '',
    moons: [],
    desc: [
      { label: 'Surface Area', value: '460.2 million km²' },
      { label: 'Temperature', value: '462°C' },
      { label: 'Age', value: '4.5 billion years' },
      { label: 'Gravity', value: '8.87 m/s²' },
      { label: 'Mass', value: '4.87 * 10^24 kg' },
      { label: 'Oxygen Level', value: 'Trace' },
    ],
    description: 'Venus is the second planet from the Sun and has a thick, toxic atmosphere.'
  },
  'EARTH': {
    name: 'Earth',
    image: 'assets/earth.jpg',
    moons: [
      { name: 'Moon', image: 'assets/moon.jpg' }
    ],
    desc: [
      { label: 'Surface Area', value: '510.1 million km²' },
      { label: 'Temperature', value: 'Average of 14°C, ranging from -88°C to 58°C' },
      { label: 'Age', value: '4.54 billion years' },
      { label: 'Gravity', value: '9.8 m/s²' },
      { label: 'Mass', value: '5.97 * 10^24 kg' },
      { label: 'Oxygen Level', value: '21% (in the atmosphere)' },
    ],
    description: 'A jeweled blue planet orbiting the Sun, home to millions of species, including humans.'
  },
  'MARS': {
    name: 'Mars',
    image: 'assets/mars.jpeg',
    moons: [
      { name: 'Phobos', image: '' },
      { name: 'Deimos', image: '' }
    ],
    desc: [
      { label: 'Surface Area', value: '144.8 million km²' },
      { label: 'Temperature', value: '-87°C to -5°C' },
      { label: 'Age', value: '4.6 billion years' },
      { label: 'Gravity', value: '3.721 m/s²' },
      { label: 'Mass', value: '6.39 * 10^23 kg' },
      { label: 'Oxygen Level', value: '0.13% (in the atmosphere)' },
    ],
    description: 'Mars is often called the Red Planet and is the fourth planet from the Sun.'
  },
  'JUPITER': {
    name: 'Jupiter',
    image: '',
    moons: [
      { name: 'Io', image: '' },
      { name: 'Europa', image: 'assets/eyropa.jpeg' },
      { name: 'Ganymede', image: '' },
      { name: 'Callisto', image: '' }
    ],
    desc: [
      { label: 'Surface Area', value: '61.4 billion km²' },
      { label: 'Temperature', value: '-108°C' },
      { label: 'Age', value: '4.5 billion years' },
      { label: 'Gravity', value: '24.79 m/s²' },
      { label: 'Mass', value: '1.90 * 10^27 kg' },
      { label: 'Oxygen Level', value: 'Trace' },
    ],
    description: 'Jupiter is the largest planet in the solar system and has dozens of moons.'
  },
  'SATURN': {
    name: 'Saturn',
    image: 'assets/saturn.jpeg',
    moons: [
      { name: 'Titan', image: 'assets/titan.jpeg' },
      { name: 'Enceladus', image: '' },
      { name: 'Rhea', image: '' },
      { name: 'Dione', image: '' }
    ],
    desc: [
      { label: 'Surface Area', value: '42.7 billion km²' },
      { label: 'Temperature', value: '-139°C' },
      { label: 'Age', value: '4.5 billion years' },
      { label: 'Gravity', value: '10.44 m/s²' },
      { label: 'Mass', value: '5.68 * 10^26 kg' },
      { label: 'Rings', value: '7 main rings' },
    ],
    description: 'Saturn is famous for its stunning rings and is the second-largest planet in our solar system.'
  },
  'URANUS': {
    name: 'Uranus',
    image: '',
    moons: [
      { name: 'Titania', image: '' },
      { name: 'Oberon', image: '' },
      { name: 'Umbriel', image: '' },
      { name: 'Ariel', image: '' },
      { name: 'Miranda', image: '' }
    ],
    desc: [
      { label: 'Surface Area', value: '8.1 billion km²' },
      { label: 'Temperature', value: '-224°C' },
      { label: 'Age', value: '4.5 billion years' },
      { label: 'Gravity', value: '8.87 m/s²' },
      { label: 'Mass', value: '8.68 * 10^25 kg' },
      { label: 'Oxygen Level', value: 'Trace' },
    ],
    description: 'Uranus is the seventh planet from the Sun and has a blue-green color due to methane in its atmosphere.'
  },
  'NEPTUNE': {
    name: 'Neptune',
    image: 'assets/neptune.jpeg',
    moons: [
      { name: 'Triton', image: '' }
    ],
    desc: [
      { label: 'Surface Area', value: '7.6 billion km²' },
      { label: 'Temperature', value: '-214°C' },
      { label: 'Age', value: '4.5 billion years' },
      { label: 'Gravity', value: '11.15 m/s²' },
      { label: 'Mass', value: '1.02 * 10^26 kg' },
      { label: 'Oxygen Level', value: 'Trace' },
    ],
    description: 'Neptune is the eighth and farthest known planet from the Sun in the solar system.'
  },
  // Existing and special entries
  'SATURN RINGS': {
    name: 'Saturn',
    image: 'assets/saturn.jpeg',
    moons: [
      { name: 'Titan', image: 'assets/titan.jpeg' },
      { name: 'Enceladus', image: '' }
    ],
    desc: [
      { label: 'Surface Area', value: '42.7 billion km²' },
      { label: 'Temperature', value: '-139°C' },
      { label: 'Age', value: '4.5 billion years' },
      { label: 'Gravity', value: '10.44 m/s²' },
      { label: 'Mass', value: '5.68 * 10^26 kg' },
      { label: 'Rings', value: '7 main rings' },
    ],
    description: 'Saturn is famous for its stunning rings and is the second-largest planet in our solar system.'
  },
  'MOON': {
    name: 'Moon',
    image: 'assets/moon.jpg',
    moons: [],
    desc: [
      { label: 'Surface Area', value: '37.9 million km²' },
      { label: 'Temperature', value: '-173°C to 127°C' },
      { label: 'Age', value: '4.53 billion years' },
      { label: 'Gravity', value: '1.62 m/s²' },
      { label: 'Mass', value: '7.35 * 10^22 kg' },
      { label: 'Oxygen Level', value: 'Trace' },
    ],
    description: 'The Moon is Earth’s only natural satellite and the fifth largest moon in the solar system.'
  },
  'EYROPA': {
    name: 'Europa',
    image: 'assets/eyropa.jpeg',
    moons: [],
    desc: [
      { label: 'Surface Area', value: '30.9 million km²' },
      { label: 'Temperature', value: '-160°C' },
      { label: 'Age', value: '4.5 billion years' },
      { label: 'Gravity', value: '1.315 m/s²' },
      { label: 'Mass', value: '4.8 * 10^22 kg' },
      { label: 'Oxygen Level', value: 'Thin atmosphere' },
    ],
    description: 'Europa is one of Jupiter’s moons and is believed to have a subsurface ocean.'
  },
  'BLACK HOLE': {
    name: 'Black Hole',
    image: 'assets/blackhole.jpeg',
    moons: [],
    desc: [
      { label: 'Surface Area', value: 'N/A' },
      { label: 'Temperature', value: 'Near absolute zero' },
      { label: 'Age', value: 'Varies' },
      { label: 'Gravity', value: 'Extremely high' },
      { label: 'Mass', value: 'Varies' },
      { label: 'Oxygen Level', value: 'None' },
    ],
    description: 'A black hole is a region of spacetime where gravity is so strong that nothing can escape from it.'
  },
  'TITAN': {
    name: 'Titan',
    image: 'assets/titan.jpeg',
    moons: [],
    desc: [
      { label: 'Surface Area', value: '83 million km²' },
      { label: 'Temperature', value: '-179°C' },
      { label: 'Age', value: '4.5 billion years' },
      { label: 'Gravity', value: '1.352 m/s²' },
      { label: 'Mass', value: '1.35 * 10^23 kg' },
      { label: 'Oxygen Level', value: 'Trace' },
    ],
    description: 'Titan is Saturn’s largest moon and has a thick, nitrogen-rich atmosphere.'
  }
};

function updatePlanetSection(planetKey) {
  const data = planetData[planetKey.toUpperCase()];
  if (!data) return;
  // Update title and description
  const statusSection = document.querySelector('.status');
  if (!statusSection) return;
  const title = statusSection.querySelector('.title h2');
  const descP = statusSection.querySelector('.title p');
  if (title) title.textContent = data.name.toUpperCase();
  if (descP) descP.textContent = data.description;
  // Update planet image
  const planetDiv = statusSection.querySelector('.planet');
  if (planetDiv) {
    let earthDiv = planetDiv.querySelector('.earth');
    if (!earthDiv) {
      earthDiv = document.createElement('div');
      earthDiv.className = 'earth';
      planetDiv.prepend(earthDiv);
    }
    earthDiv.style.backgroundImage = `url('${data.image}')`;
    // Remove old moons
    earthDiv.querySelectorAll('.moon').forEach(m => m.remove());
    // Add moons if any
    if (data.moons && data.moons.length > 0) {
      data.moons.forEach((moon, idx) => {
        const moonDiv = document.createElement('div');
        moonDiv.className = 'moon';
        if (moon.image) moonDiv.style.backgroundImage = `url('${moon.image}')`;
        // Position moons around the planet (simple offset)
        moonDiv.style.left = `${-11 - idx * 7}em`;
        moonDiv.style.top = `${50 + idx * 20}%`;
        moonDiv.style.transform = `translateY(-50%)`;
        // Moon label
        const moonDesc = document.createElement('div');
        moonDesc.className = 'moon-desc';
        const moonP = document.createElement('p');
        moonP.textContent = moon.name;
        const moonHr = document.createElement('hr');
        moonDesc.appendChild(moonP);
        moonDesc.appendChild(moonHr);
        moonDiv.appendChild(moonDesc);
        earthDiv.appendChild(moonDiv);
      });
    }
  }
  // Remove old descs
  planetDiv.querySelectorAll('.desc').forEach(d => d.remove());
  // Add new descs
  data.desc.forEach((d, i) => {
    const descDiv = document.createElement('div');
    descDiv.className = `desc desc-${i+1}`;
    const nameP = document.createElement('p');
    nameP.className = 'name';
    nameP.textContent = d.label;
    const hr = document.createElement('hr');
    const valueP = document.createElement('p');
    valueP.className = 'value';
    valueP.textContent = d.value;
    descDiv.appendChild(nameP);
    descDiv.appendChild(hr);
    descDiv.appendChild(valueP);
    planetDiv.appendChild(descDiv);
  });
}

// Update Read More click handler to show planet info
const readMoreBtns = document.querySelectorAll('.destination .items a');
readMoreBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const planet = btn.parentElement.querySelector('h1');
    if (planet) {
      updatePlanetSection(planet.textContent.trim());
      document.querySelector('.status').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// "Submit" button in contact form
const contactForm = document.querySelector('.contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will reach out to you soon.');
    contactForm.reset();
  });
}

// "To Top" button
if (toTop) {
  toTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- CHATBOT LOGIC ---
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

if (chatbotBtn && chatbotWindow && chatbotClose && chatbotForm && chatbotInput && chatbotMessages) {
  chatbotBtn.onclick = () => {
    chatbotWindow.style.display = 'flex';
    chatbotBtn.style.display = 'none';
    chatbotInput.focus();
  };
  chatbotClose.onclick = () => {
    chatbotWindow.style.display = 'none';
    chatbotBtn.style.display = 'flex';
  };
  chatbotForm.onsubmit = (e) => {
    e.preventDefault();
    const userMsg = chatbotInput.value.trim();
    if (!userMsg) return;
    addChatMsg('user', userMsg);
    chatbotInput.value = '';
    setTimeout(() => handleBotReply(userMsg), 400);
  };
}

function addChatMsg(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.style.margin = '0.5rem 0';
  msgDiv.style.textAlign = sender === 'user' ? 'right' : 'left';
  msgDiv.innerHTML = `<span style="display:inline-block;padding:0.5rem 1rem;border-radius:16px;max-width:80%;background:${sender==='user'?'#3b8ab5':'#eee'};color:${sender==='user'?'#fff':'#222'};">${text}</span>`;
  chatbotMessages.appendChild(msgDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function handleBotReply(msg) {
  const lower = msg.toLowerCase();
  // Try to match planet name
  let found = null;
  for (const key in planetData) {
    if (lower.includes(key.toLowerCase()) || lower.includes(planetData[key].name.toLowerCase())) {
      found = planetData[key];
      break;
    }
  }
  if (found) {
    // Moons question
    if (lower.includes('moon')) {
      if (found.moons && found.moons.length > 0) {
        addChatMsg('bot', `${found.name} has the following moon(s): ${found.moons.map(m=>m.name).join(', ')}.`);
      } else {
        addChatMsg('bot', `${found.name} has no moons.`);
      }
      return;
    }
    // Gravity question
    if (lower.includes('gravity')) {
      const gravity = found.desc.find(d => d.label.toLowerCase().includes('gravity'));
      if (gravity) {
        addChatMsg('bot', `${found.name}'s gravity: ${gravity.value}`);
      } else {
        addChatMsg('bot', `Sorry, I don't have gravity info for ${found.name}.`);
      }
      return;
    }
    // General info
    let info = `<b>${found.name}</b>: ${found.description}<br/>`;
    info += found.desc.map(d => `<b>${d.label}:</b> ${d.value}`).join('<br/>');
    addChatMsg('bot', info);
    return;
  }
  // List all planets
  if (lower.includes('all planets') || lower.includes('list planets')) {
    addChatMsg('bot', 'The major planets are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.');
    return;
  }
  // Help
  if (lower.includes('help')) {
    addChatMsg('bot', 'You can ask me about any planet, its moons, or stats. For example: "Tell me about Mars", "What is the gravity of Jupiter?", "List moons of Saturn".');
    return;
  }
  // Fallback
  addChatMsg('bot', "Sorry, I didn't understand. Try asking about a planet, its moons, or stats!");
}
