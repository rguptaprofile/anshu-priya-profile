// function validateForm() {
//       const name = document.getElementById("name").value.trim();
//       const email = document.getElementById("email").value.trim();
//       const message = document.getElementById("message").value.trim();
//       if (!name || !email || !message) {
//         alert("Please fill in all fields.");
//         return false;
//       }
//       alert("Message sent! I'll get back to you soon.");
//       return true;
//     }



// in the header section | navbar ~ Menu button
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Optional: close dropdown when link is clicked
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});



//  contact-form handller 
let submitted = false;

function handleSubmit() {
  submitted = true;
  return true;
}
function showSuccessMessage() {
  if (submitted) {
    document.getElementById('contact-form').reset();
    document.getElementById('successMsg').style.display = 'block';
    submitted = false;
  }
}




// Trigger glow after animation ends
const main = document.getElementById('main');
main.addEventListener('animationend', () => {
  main.classList.add('glow');
});