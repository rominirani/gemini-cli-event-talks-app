const scheduleContainer = document.getElementById('schedule');
const searchInput = document.getElementById('searchInput');

let talks = [];

const renderTalks = (filteredTalks) => {
  scheduleContainer.innerHTML = '';
  const talksToRender = filteredTalks || talks;
  talksToRender.forEach(talk => {
    const talkElement = document.createElement('div');
    talkElement.classList.add('talk');

    if (talk.title === 'Lunch Break') {
      talkElement.innerHTML = `<h2>${talk.title}</h2>`;
    } else {
      talkElement.innerHTML = `
        <div class="time">${talk.time}</div>
        <h2>${talk.title}</h2>
        <div class="speakers"><strong>Speakers:</strong> ${talk.speakers.join(', ')}</div>
        <p>${talk.description}</p>
        <div class="categories">
          ${talk.categories.map(category => `<span class="category">${category}</span>`).join('')}
        </div>
      `;
    }

    scheduleContainer.appendChild(talkElement);
  });
};

const filterTalks = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredTalks = talks.filter(talk => {
    return talk.categories.some(category => category.toLowerCase().includes(searchTerm));
  });
  renderTalks(filteredTalks);
};

searchInput.addEventListener('input', filterTalks);

fetch('/api/talks')
  .then(response => response.json())
  .then(data => {
    talks = data;
    renderTalks();
  });