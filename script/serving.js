
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
    window.location.href = 'index.html'; // or refresh
  }