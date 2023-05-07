

// JavaScript for the form submit
const form = document.querySelector('#contact form');
const nameInput = document.querySelector('#contact input[name="name"]');
const emailInput = document.querySelector('#contact input[name="email"]');
const messageInput = document.querySelector('#contact textarea[name="message"]');
const submitButton = document.querySelector('#contact input[type="submit"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitButton.value = 'Sending...';
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      submitButton.value = 'Submit';
      if (result.success) {
        alert('Message sent successfully!');
      } else {
        alert('Error sending message.');
      }
    })
    .catch(error => {
      submitButton.value = 'Submit';
      console.error(error);
      alert('Error sending message.');
    });
});
