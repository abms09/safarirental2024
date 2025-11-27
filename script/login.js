
         document.getElementById('loginForm').addEventListener('submit',(e)=>{
            e.preventDefault();
            
            let users=JSON.parse(localStorage.getItem("users"))||[];
            const user=users.find(u=>u.email===email.value && u.password===password.value)
            
            if(user){
                localStorage.setItem('loggedInUser',JSON.stringify(user));
                Swal.fire({
                     icon: 'success',
                     title: 'Login successful',
                     text: 'Welcome back!'
                })
                .then(() => {
                     window.location.href = "index.html";
                 });
            } else {
                Swal.fire({
                     icon: 'error',
                     title: 'Login failed',
                     text: 'Incorrect email or password'
                 });
            }
        });

        const email=document.getElementById('loginmail');
        const password=document.getElementById('loginPass');

        const emailError=document.getElementById('emailerr');
        const passwordError=document.getElementById('passerr');

        email.addEventListener('input',()=>{
              const mail=email.value.trim()

        if(mail==""){
            emailError.textContent="Email id required"
            emailError.style.color="red"
            return false;
        }
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)){
            emailError.textContent="Enter valid mail id"
            emailError.style.color="red"
            return false;
        }
        emailError.textContent=""
        email.style.border="3px solid #ffc107"
        return true; 
        })

        password.addEventListener('input',()=>{
             const pass=password.value.trim();

        if(pass===""){
            passwordError.textContent="Password required"
            passwordError.style.color="red"
            return false;
        }

        passwordError.textContent=""
        password.style.border="3px solid #ffc107"
        return true;
        })

    function logn(){
        Swal.fire({
        title: "Order placed successfully",
        icon: "success",
        draggable: true
     });
    }