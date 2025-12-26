function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required!");
  } else {
    alert("Message sent successfully!");
  }
}
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle button icon
    if(document.body.classList.contains('dark-mode')){
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
    }
});