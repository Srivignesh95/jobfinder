require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const jobsAPI = require('./components/adzuna/jobs');
const resumeParser = require('./components/resume/parser');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Page
app.get('/', (req, res) => {
  res.render('index');
});

// Handle Form Submission
app.post('/search', async (req, res) => {
    let { skills, location, resumeUrl } = req.body;
      
    let resumeAnalysis = { score: 0, suggestions: [] };
  
    if (resumeUrl) {
      resumeAnalysis = await resumeParser.analyzeResumeFromURL(resumeUrl);
    }

    if (!skills && resumeAnalysis.skills && resumeAnalysis.skills.length > 0) {
        const topSkills = resumeAnalysis.skills.slice(0, 5);
        skills = topSkills.join(' ');
    }

    const jobs = await jobsAPI.getJobs(skills, location);
  
    res.render('results', {
      jobs,
      resumeAnalysis
    });
  });
  

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
