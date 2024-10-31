document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = {
      username: document.querySelector('.username').value,
      email: document.querySelector('.email').value,
      telephone: document.querySelector('.telephone').value,
    };
  
    console.log(formData);
  });
  