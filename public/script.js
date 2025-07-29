const scheduleContainer = document.getElementById('schedule');
const searchInput = document.getElementById('searchInput');
const speakerSearchInput = document.getElementById('speakerSearchInput');

let talks = [];

const renderTalks = (filteredTalks) => {
  scheduleContainer.innerHTML = '';
  const talksToRender = filteredTalks || talks;
  talksToRender.forEach(talk => {
    const talkElement = document.createElement('div');
    talkElement.classList.add('col-md-4', 'talk'); // Bootstrap column for responsiveness

    if (talk.title === 'Lunch Break') {
      talkElement.innerHTML = `
        <div class="col-12 my-3 text-center">
          <hr>
          <h3>${talk.title}</h3>
          <hr>
        </div>
      `;
      talkElement.classList.remove('col-md-4', 'talk'); // Remove column and talk class for lunch break
    } else {
      const talkId = `talk-${talk.title.replace(/\s+/g, '-').toLowerCase()}`;
      talkElement.innerHTML = `
        <div class="card mb-3 h-100">
          <div class="card-body d-flex flex-column">
            <div class="talk-header" data-bs-toggle="collapse" data-bs-target="#${talkId}" aria-expanded="false" aria-controls="${talkId}" style="cursor: pointer;">
              <h5 class="card-subtitle mb-2 text-muted">${talk.time}</h5>
              <h2 class="card-title">${talk.title}</h2>
            </div>
            <div class="collapse" id="${talkId}">
              <p class="card-text"><strong>Speakers:</strong> ${talk.speakers.join(', ')}</p>
              <p class="card-text">${talk.description}</p>
              <div class="mt-auto">
                ${talk.categories.map(category => `<span class="badge bg-primary me-1">${category}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    scheduleContainer.appendChild(talkElement);
  });
};

const filterTalks = () => {
  const searchTerm = searchInput.value.toLowerCase();
  const speakerSearchTerm = speakerSearchInput.value.toLowerCase();

  const filteredTalks = talks.filter(talk => {
    const categoryMatch = talk.categories.some(category => category.toLowerCase().includes(searchTerm));
    const speakerMatch = talk.speakers.some(speaker => speaker.toLowerCase().includes(speakerSearchTerm));

    return categoryMatch && speakerMatch;
  });

  renderTalks(filteredTalks);
};

searchInput.addEventListener('input', filterTalks);
speakerSearchInput.addEventListener('input', filterTalks);

fetch('/api/talks')
  .then(response => response.json())
  .then(data => {
    talks = data;
    renderTalks();
  });