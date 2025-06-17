// Contact Form Section

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const number = document.getElementById('number').value.trim();
  const message = document.getElementById('message').value.trim();

  const mailtoLink = `mailto:rahulgupt1231@gmail.com?subject=Contact%20Form%20Message%20from%20${encodeURIComponent(name)}&body=
        Name: ${encodeURIComponent(name)}%0D%0A
        Email: ${encodeURIComponent(email)}%0D%0A
        Mobile: ${encodeURIComponent(number)}%0D%0A
        Message: ${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;

  document.getElementById('confirmation').style.display = 'block';
  document.getElementById('contact-form').reset();
});



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