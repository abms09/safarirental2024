
        const name=document.getElementById('name');
        const email=document.getElementById('email');
        const phone=document.getElementById('phone');
        const password=document.getElementById('password');
        const confirmm=document.getElementById('confirmPassword');

        const nameError=document.getElementById('nameerr');
        const emailError=document.getElementById('emailerr');
        const phoneError=document.getElementById('phoneerr');
        const passwordError=document.getElementById('passerr');
        const confirmError=document.getElementById('confirmerr');

        name.addEventListener('input',validateName);
        email.addEventListener('input',validateEmail);
        phone.addEventListener('input',validatePhone);
        password.addEventListener('input',validatePassword);
        confirmm.addEventListener('input',validateConfirm);


        document.getElementById('signup').addEventListener('submit',(e)=>{
            e.preventDefault();

            if(validateName()&&
                validateEmail()&&
                validatePhone()&&
                validatePassword()&&
                validateConfirm()    
        ){

            let users=JSON.parse(localStorage.getItem("users"))||[];

            const userExits=users.some(u=>u.email===email.value);
            if(userExits){
                alert('User already exits with this email');
                return
            }

            const newUser={
                name:name.value,
                email:email.value,
                phone:phone.value,
                password:password.value
            };

            users.push(newUser)
            localStorage.setItem("users",JSON.stringify(users))

                  Swal.fire({
                     icon: 'success',
                     title: 'Signup successful',
                     text: 'Login to continue!'
                })
                .then(() => {
                     window.location.href = "login.html";
                 });
        }
        })


    function validateName(){
        const nm=name.value.trim();

        if(nm===""){
            nameError.textContent="Name is required"
            nameError.style.color="red"
            return false;
        }
        if(nm.length<3){
            nameError.textContent="Name must be atleast 3 characters"
            nameError.style.color="red"
            return false;
        }
        if(!/^[A-Za-z\s]+$/.test(nm)){
            nameError.textContent="Name must contain only letters"
            nameError.style.color="red"
            return false;
        }
        nameError.textContent=""
        name.style.border="3px solid #ffc107"
        return true;
    }

    function validateEmail(){
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
    }

    function validatePhone(){
        const phn=phone.value.trim();

        if(phn===""){
            phoneError.textContent="Phone number required"
            phoneError.style.color="red"
            return false;
        }
        if(!/^\+?[1-9][0-9]{7,14}$/.test(phn)){
            phoneError.textContent="Enter valid phone number"
            phoneError.style.color="red"
            return false;
        }
        phoneError.textContent=""
        phone.style.border="3px solid #ffc107"
        return true;
    }

        function validatePassword(){
        const pass=password.value.trim();

        if(pass===""){
            passwordError.textContent="Password required"
            passwordError.style.color="red"
            return false;
        }
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/.test(pass)){
            passwordError.textContent="Password must have at least 8 chars, include uppercase, lowercase, number & special char"
            passwordError.style.color="red"
            return false;
        }
        passwordError.textContent=""
        password.style.border="3px solid #ffc107"
        return true;
    }

        function validateConfirm(){
        const conpass=confirmm.value.trim();
        const pass=password.value.trim();

        if(conpass===""){
            confirmError.textContent="Password required"
            confirmError.style.color="red"
            return false;
        }
        if(conpass !==pass){
            confirmError.textContent="Password not match"
            confirmError.style.color="red"
            return false;
        }
        confirmError.textContent=""
        confirmm.style.border="3px solid #ffc107"
        return true;
    }