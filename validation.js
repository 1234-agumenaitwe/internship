function validateForm() {
    // Get references to the form elements
    const username = document.getElementById('username');
    const phoneNumber = document.getElementById('phone-number');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const submitButton = document.getElementById('submit-button');
  
    // Clear any previous error messages
    clearErrorMessages();
  
    // Validation logic
    let isValid = true;  // Flag to track if form is valid
  
    // Username Validation
    if (username.value.trim() === '') {
      showError(username, 'Username cannot be empty.');
      isValid = false;
    }
  
    // Phone Number Validation (basic check for numbers only)
    if (phoneNumber.value.trim() !== '' && isNaN(phoneNumber.value)) {
      showError(phoneNumber, 'Phone number can only contain numbers.');
      isValid = false;
    }
  
    // Password Validation (basic check for minimum length)
    if (password.value.trim() === '' || password.value.length < 6) {
      showError(password, 'Password must be at least 6 characters long.');
      isValid = false;
    }
  
    // Email Validation (basic check for format)
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.trim() !== '' && !emailRegex.test(email.value)) {
      showError(email, 'Please enter a valid email address.');
      isValid = false;
    }
  
    // Prevent form submission if validation fails
    if (!isValid) {
      submitButton.disabled = true;  // Disable submit button to prevent submission
      return false;  // Prevent default form submission behavior
    }
  
    // If validation passes, submit the form (assuming you have a server-side script)
    // submitButton.disabled = false;  // Re-enable submit button (if needed)
    // return true;  // Allow default form submission behavior (if needed)
  
    // Note: You might need to implement form submission logic based on your backend setup.
    // This example focuses on client-side validation.
  }
  
  // Function to display error messages
  function showError(inputElement, errorMessage) {
    const errorElement = inputElement.nextElementSibling;  // Assuming error message is displayed next to the input
    errorElement.textContent = errorMessage;
    errorElement.classList.add('error');  // Add a CSS class for styling the error message
  }
  
  // Function to clear any previous error messages (optional)
  function clearErrorMessages() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.classList.remove('error'));
    errorElements.forEach(element => element.textContent = '');
 



    const signupForm = document.getElementById('signup-form');
const notification = document.getElementById('notification');
const submitButton = document.getElementById('submit-button');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Implement your form validation logic here
  // (Assuming some successful validation)

  // Show top-positioned notification
  notification.classList.remove('hidden');
  notification.style.position = 'fixed';  // Make it fixed to the top
  notification.style.top = '0';  // Set top position to 0
  notification.style.left = '0';  // Set left position to 0 (center it horizontally you can adjust)
  notification.style.width = '100%';  // Make it full width
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 3000); // Delay for 3 seconds

  // Simulate form submission (replace with your actual server-side interaction)
  // submitButton.disabled = true; // Optionally disable submit button to prevent resubmission

  // Note: You'll likely need to implement your server-side validation and processing
  // This example focuses on client-side notification.
});

}