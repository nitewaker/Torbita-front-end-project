const reply = document.getElementById("reply");
const surname = document.getElementById("surname");
const firstname = document.getElementById("firstname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", register);

// Check if users exist in local storage, otherwise initialize it
if (localStorage.getItem("users") == null) {
  localStorage.setItem("users", JSON.stringify([]));
}

function register(e) {
  e.preventDefault();

  // Validation
  if (surname.value.trim() === "") {
    reply.textContent = "Please enter a surname";
    reply.style.cssText = "background-color: red; color: white;";
    return;
  }

  if (firstname.value.trim() === "") {
    reply.textContent = "Please enter a firstname";
    reply.style.cssText = "background-color: red; color: white;";
    return;
  }
  if (email.value.trim() === "" || !email.value.includes("@")) {
    reply.textContent = "Please enter a valid email";
    reply.style.cssText = "background-color: red; color: white;";
    return;
  }

  if (password.value.length < 4) {
    reply.textContent = "Please increase your password length";
    reply.style.cssText = "background-color: red; color: white;";
    return;
  }

  // Get users from local storage
  let users = localStorage.getItem("users");
  users = users ? JSON.parse(users) : [];

  // Create a user data
  const data = {
    surname: surname.value,
    email: email.value,
    password: password.value,
  };

  // Push the newly created user
  users.push(data);

  // Set to local storage -> users
  localStorage.setItem("users", JSON.stringify(users));

  // Provide feedback
  reply.textContent = "User registered successfully";
  reply.style.cssText = "background-color: green; color: white;";

  // Clear form fields
  form.reset();

  //redirect to login after 3mins
  setInterval(() => {
    window.location.href = "/html/Auth/login.html";
  }, 3000);
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
