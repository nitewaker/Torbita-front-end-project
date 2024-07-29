const reply = document.getElementById("reply");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginForm = document.getElementById("form");

loginForm.addEventListener("submit", login);

// Login functionality
function login(e) {
  e.preventDefault();

  // Validation
  if (email.value.trim() === "" || !email.value.includes("@")) {
    reply.textContent = "Please enter a valid email";
    reply.style.cssText = "background-color: red; color: white;";
    return;
  }

  if (password.value.trim() === "") {
    reply.textContent = "Please enter your password";
    reply.style.cssText = "background-color: red; color: white;";
    return;
  }

  // Get users from local storage
  let users = localStorage.getItem("users");
  users = users ? JSON.parse(users) : [];

  // Find user index
  const userIndex = users.findIndex(
    (user) => user.email === email.value && user.password === password.value
  );

  if (userIndex !== -1) {
    reply.textContent = "Login successful";
    reply.style.cssText = "background-color: green; color: white;";
    // Additional actions on successful login (e.g., redirect to another page)

    // Save the current user's index to local storage
    localStorage.setItem("currentUserIndex", userIndex);

    //redirect to dashboard in 3sec
    setInterval(() => {
      window.location.href = "/html/dashboard/index.html";
    }, 3000);
  } else {
    reply.textContent = "Invalid email or password";
    reply.style.cssText = "background-color: red; color: white;";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const dayElement = document.getElementById("day");

  // Determine the time of day
  const currentTime = new Date().getHours();
  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  // Function to animate each letter
  function animateText(element, text) {
    element.innerHTML = ""; // Clear existing text
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.className = "letter";
      span.style.animationDelay = `${i * 0.1}s`; // Delay for each letter
      span.textContent = text[i];
      element.appendChild(span);
    }
  }

  // Set and animate the greeting message
  animateText(dayElement, greeting);
});
