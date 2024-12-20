// script.js

document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

document.getElementById('job-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to handle validation

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const resume = document.getElementById('resume').files[0];
    const coverLetter = document.getElementById('cover-letter').value.trim();

    const responseMessage = document.getElementById('response-message');

    // Simple client-side validation
    if (name === '' || email === '' || !resume || coverLetter === '') {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Please fill out all fields and upload your resume.';
    } else {
        responseMessage.style.color = 'green';
        responseMessage.textContent = 'Your application has been submitted successfully!';
        // Optionally, you can reset the form after submission
        document.getElementById('job-form').reset();
    }
});
