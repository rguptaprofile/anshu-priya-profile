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






//  contact-form handller 

const scriptURL = "https://script.google.com/macros/s/AKfycbwq7krN6zWyjCV_Ou6zGmzW9dNXWBongjyWgGR79sjY7m7HDAnIaGKjJ2lS_86Mev3Qfw/exec"; // <-- Replace with your actual URL
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('response');
const errorMsg = document.getElementById('error');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    number: document.getElementById("number").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  if (!data.name || !data.email || !data.number || !data.message) {
    alert("Please fill in all fields.");
    return;
  }

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
        form.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch(error => {
      successMsg.style.display = 'none';
      errorMsg.style.display = 'block';
      console.error("Error!", error.message);
    });
});