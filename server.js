const express = require('express');
const path = require('path');
const app = express();
const port = 9090;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const talks = [
  {
    "id": "1",
    "time": "09:00 - 10:00",
    "title": "The Future of JavaScript",
    "categories": ["JavaScript", "Web Development", "Future Tech"],
    "speakers": ["John Doe"],
    "description": "A deep dive into the upcoming features of JavaScript and how they will shape the future of web development."
  },
  {
    "id": "2",
    "time": "10:15 - 11:15",
    "title": "Building Scalable APIs with Node.js",
    "categories": ["Node.js", "API", "Backend"],
    "speakers": ["Jane Smith"],
    "description": "Learn how to design and build APIs that can handle millions of requests per day."
  },
  {
    "id": "3",
    "time": "11:30 - 12:30",
    "title": "Mastering CSS Grid",
    "categories": ["CSS", "Frontend", "Web Design"],
    "speakers": ["Peter Jones", "Mary Johnson"],
    "description": "Unlock the power of CSS Grid to create complex and responsive layouts with ease."
  },
  {
    "id": "4",
    "time": "12:30 - 13:30",
    "title": "Lunch Break",
    "categories": [],
    "speakers": [],
    "description": ""
  },
  {
    "id": "5",
    "time": "13:30 - 14:30",
    "title": "State Management in React",
    "categories": ["React", "State Management", "Frontend"],
    "speakers": ["David Lee"],
    "description": "A comprehensive overview of different state management solutions in React, from local state to Redux and MobX."
  },
  {
    "id": "6",
    "time": "14:45 - 15:45",
    "title": "The Rise of Serverless",
    "categories": ["Serverless", "Cloud Computing", "Architecture"],
    "speakers": ["Sarah Williams"],
    "description": "Discover the benefits of serverless architecture and how to build and deploy serverless applications."
  },
  {
    "id": "7",
    "time": "16:00 - 17:00",
    "title": "Web Performance Optimization",
    "categories": ["Web Performance", "Frontend", "Optimization"],
    "speakers": ["Chris Green"],
    "description": "Learn practical tips and tricks to make your websites faster and more performant."
  }
];

app.get('/api/talks', (req, res) => {
  res.json(talks);
});

app.get('/api/talks/:id', (req, res) => {
  const talk = talks.find(t => t.id === req.params.id);
  if (talk) {
    res.json(talk);
  } else {
    res.status(404).send('Talk not found');
  }
});

app.get('/api/categories', (req, res) => {
  const categories = [...new Set(talks.flatMap(talk => talk.categories))];
  res.json(categories);
});

app.get('/api/speakers', (req, res) => {
  const speakers = [...new Set(talks.flatMap(talk => talk.speakers))];
  res.json(speakers);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
