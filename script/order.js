
      let loguser=JSON.parse(localStorage.getItem("loggedInUser"))
function getFormData() {
  return {
    user:loguser.email,
    bookingDate: document.getElementById('bookingDate').value,
    peopleCount: document.getElementById('peopleCount').value,
    buffetType: document.getElementById('buffetType').value,
    buffetSets: document.getElementById('buffetSets').value,
    servingMembers: document.getElementById('servingMembers').value,
    crockery: Array.from(
      document.querySelectorAll('input[name="crockery"]:checked')
    ).map(el => el.value),
    totalCost: document.getElementById('totalCost').innerText
  };
}

function saveOrderToLocalStorage(order) {
  const existing = JSON.parse(localStorage.getItem('orders') || '[]');
  existing.push(order);
  localStorage.setItem('orders', JSON.stringify(existing));
}

function orderplace(){
  const order = getFormData();
  saveOrderToLocalStorage(order);
  localStorage.setItem('lastOrder', JSON.stringify(order));

  Swal.fire({
    title: "Order placed successfully",
    icon: "success",
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'bill.html';
    }
  });
}

const pcount=document.getElementById('peopleCount')
const bcount=document.getElementById('buffetSets')
const scount=document.getElementById('servingMembers')

const pErr=document.getElementById('pcount')
const bErr=document.getElementById('bcount')
const sErr=document.getElementById('scount')

pcount.addEventListener('keyup', () => {
  const val = pcount.valueAsNumber;
  if (isNaN(val) || val < 0) {
    pErr.textContent = 'Please enter a value ≥ 0';
  } else {
    pErr.textContent = '';
  }
});
bcount.addEventListener('keyup', () => {
  const val = bcount.valueAsNumber;
  if (isNaN(val) || val < 0) {
    bErr.textContent = 'Please enter a value ≥ 0';
  } else {
    bErr.textContent = '';
  }
});
scount.addEventListener('keyup', () => {
  const val = scount.valueAsNumber;
  if (isNaN(val) || val < 0) {
    sErr.textContent = 'Please enter a value ≥ 0';
  } else {
    sErr.textContent = '';
  }
});
