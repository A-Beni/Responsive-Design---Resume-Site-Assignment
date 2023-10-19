const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        
        const targetSection = document.querySelector(this.getAttribute('href'));

        
        sections.forEach(section => {
            if (section === targetSection) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    });
});


function updateSkill(skillId, percentage) {
  const progressBar = document.getElementById(skillId);
  const parsedPercentage = parseInt(percentage, 10);
  progressBar.style.width = parsedPercentage + "%";
  progressBar.textContent = parsedPercentage + "%";
  progressBar.style.background = `linear-gradient(90deg, #007BFF ${parsedPercentage}%, transparent ${parsedPercentage}%)`;
}


function updateSkill(skillId, percentage) {
  const progressBar = document.getElementById(skillId);
  progressBar.style.width = percentage;
  progressBar.textContent = percentage;
  progressBar.style.background = `linear-gradient(90deg, #007BFF ${percentage}, transparent ${percentage})`;
}


updateSkill("web-debug-progress", "80%"); 
updateSkill("api-progress", "70%"); 
updateSkill("mysql-progress", "75%"); 
updateSkill("html-progress", "90%"); 
updateSkill("css-progress", "85%"); 
updateSkill("javascript-progress", "80%"); 
updateSkill("flask-progress", "70%"); 
updateSkill("shell-progress", "75%"); 
updateSkill("python-progress", "75%"); 

const express = require('express');
const app = express();

// Define a route that redirects to the GitHub URL
app.get('/github', (req, res) => {
  res.redirect("https://github.com/A-Beni");
});

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
