emailjs.init({ publicKey: "zW8TEeDk1mC5LWrsj" });

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

const nameErr = document.getElementById('nameErr');
const emailErr = document.getElementById('emailErr');
const subErr = document.getElementById('subErr');
const msgErr = document.getElementById('msgErr');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  nameErr.textContent = "";
  emailErr.textContent = "";
  subErr.textContent = "";
  msgErr.textContent = "";

  let valid = true;

  const nam = nameInput.value.trim();
  if (!nam) {
    nameErr.textContent = "Name is required";
    valid = false;
  } else if (!/^[A-Za-z\s]+$/.test(nam)) {
    nameErr.textContent = "Only letters allowed";
    valid = false;
  }

  const mail = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!mail) {
    emailErr.textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(mail)) {
    emailErr.textContent = "Enter valid email";
    valid = false;
  }

  const sub = subjectInput.value.trim();
  if (!sub) {
    subErr.textContent = "Subject is required";
    valid = false;
  }

  const msg = messageInput.value.trim();
  if (!msg) {
    msgErr.textContent = "Message is required";
    valid = false;
  }

  if (!valid) {
    return;
  }

  emailjs.sendForm("service_6txiqgd", "template_v4b7kke", form)
    .then(() => {
      Swal.fire({
        title: "Sent successfully",
        icon: "success",
        draggable: true
      });
      form.reset();
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    });
});
