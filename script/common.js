  // name shown in navbar
  window.addEventListener('DOMContentLoaded', () => {
    const userJson = localStorage.getItem('loggedInUser');
    const navUser = document.getElementById('navuser');
    const navLogout = document.getElementById('nav-logout');

    if (userJson) {
      const user = JSON.parse(userJson);
      navUser.innerHTML = `<b>${user.name}</b>`;
      navLogout.style.display = 'block';
    } else {
      navUser.innerHTML = `<a class="nav-link btn btn-light px-4" href="login.html">Log In</a>`;
    }
  });

  function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
  }

  function orderbutton(){
            let users=JSON.parse(localStorage.getItem("loggedInUser"))
            if(users){
                window.location.href="order.html"
            }else{
                window.location.href="login.html"
            }
  }
function myorder(){
  let users = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log("loggedInUser:", users);
  if (users) {
    window.location.href = "myorder.html";
  } else {
    window.location.href = "login.html";
  }
}

  // Order page
    function calculateOrder() {
  const dateInput = document.getElementById('bookingDate').value;
  if (!isValidBookingDate(dateInput)) {
    alert("Invalid date: Booking date cannot be in the past.");
    return;
  }

  const people = parseInt(document.getElementById('peopleCount').value, 10);
  const buffetType = document.getElementById('buffetType').value;
  const buffetSets = parseInt(document.getElementById('buffetSets').value, 10);
  const serving = parseInt(document.getElementById('servingMembers').value, 10);

  let cost = 0;

  if (buffetType === 'budget') cost += 3000 * buffetSets;
  else if (buffetType === 'standard') cost += 7000 * buffetSets;
  else if (buffetType === 'premium') cost += 10000 * buffetSets;

  cost += serving * 1000;

  const plateChecked = document.getElementById('crockPlate').checked;
  const bowlChecked = document.getElementById('crockBowl').checked;
  const glassChecked = document.getElementById('crockGlass').checked;
  const jugChecked = document.getElementById('crockJug').checked;
  const platterChecked = document.getElementById('crockPlatter').checked;
  const spoonChecked = document.getElementById('crockSpoon').checked;
  const forkChecked = document.getElementById('crockFork').checked;


  if (plateChecked) cost += people * 4;

  if (bowlChecked||glassChecked||jugChecked||platterChecked||spoonChecked||forkChecked) {
    cost += people * 2;
  }

  document.getElementById('totalCost').textContent = '₹ ' + cost;
}

// date check 
function isValidBookingDate(dateString) {
  const selectedDate = new Date(dateString);
  const today = new Date();
  
  today.setHours(0, 0, 0, 0);
  
  selectedDate.setHours(0, 0, 0, 0);
  
  return selectedDate >= today;
}




  