
  emailjs.init({
    publicKey: "zW8TEeDk1mC5LWrsj"  
  });



  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name=document.getElementById('name');
    const email=document.getElementById('email');
    const message=document.getElementById('message');

    const nameErr=document.getElementById('nameErr');
    const emailErr=document.getElementById('emailErr');
    const msgErr=document.getElementById('msgErr');

    nameErr.textContent  = "";
    emailErr.textContent = "";
    msgErr.textContent   = "";

    let valid = true;

    if (name.value.trim() === "") {
      nameErr.textContent = "Name is required";
      valid = false;
    }

    const mail = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (mail === "") {
      emailErr.textContent = "Email is required";
      valid = false;
    } else if (!emailPattern.test(mail)) {
      emailErr.textContent = "Enter valid email";
      valid = false;
    }

    if (message.value.trim() === "") {
      msgErr.textContent = "Message is required";
      valid = false;
    }

    if (!valid) {
      return;
    }

    //EmailJS
    emailjs.sendForm("service_6txiqgd", "template_v4b7kke", this)
      .then(() => {
        Swal.fire({
        title: "Sent successfully",
        icon: "success",
        draggable: true
         });
      })
      .catch((err) => {
          Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
         });
      });
  });