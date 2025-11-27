
    const current = JSON.parse(localStorage.getItem("loggedInUser") || '{}');
    const email = current.email;

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');

    const myOrders = orders.filter(o => o.user === email);

    const container = document.getElementById('ordersList');
    if (myOrders.length === 0) {
      container.innerHTML = '<p>No orders found for you.</p>';
    } else {
      myOrders.forEach((order, idx) => {
        const card = document.createElement('div');
        card.className = 'card mb-3 shadow-sm';
        card.style.maxWidth = '600px';
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">Order #${idx + 1}</h5>
            <p><strong>Booking Date:</strong> ${order.bookingDate}</p>
            <p><strong>Number of People:</strong> ${order.peopleCount}</p>
            <p><strong>Buffet Type:</strong> ${order.buffetType} (Sets: ${order.buffetSets})</p>
            <p><strong>Serving Team Members:</strong> ${order.servingMembers}</p>
            <p><strong>Crockery:</strong> ${order.crockery && order.crockery.length ? order.crockery.join(', ') : 'None'}</p>
            <hr>
            <p><strong>Total Cost:</strong> ${order.totalCost}</p>
          </div>
        `;
        container.appendChild(card);
      });
    }