// Get all the questions and their answers
const questions = document.querySelectorAll('.question');

// Get the social media icons
const socialIcons = document.querySelector('.social');

// Initialize an array to store the user's answers
let answers = [];

// Add event listeners to each question to track the user's answers
questions.forEach(question => {
  // Get all the answer buttons for this question
  const answerButtons = question.querySelectorAll('.answer');
  
  // Add an event listener to each button
  answerButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update the user's answers array
      answers[question.id] = button.textContent.trim();
      
      // Mark the button as selected
      answerButtons.forEach(button => {
        button.classList.remove('selected');
      });
      button.classList.add('selected');
    });
  });
});

// Add event listeners to the navigation links to smoothly scroll to the corresponding question
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetQuestion = document.querySelector(link.hash);
    targetQuestion.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add an event listener to the social media icons to display the user's answers
socialIcons.addEventListener('click', () => {
  // Build a string summarizing the user's answers
  let summary = '';
  questions.forEach(question => {
    summary += question.querySelector('.prompt').textContent + ' ' + answers[question.id] + '\n';
  });
  
  // Display the summary in an alert
  alert(summary);
});
