 const order = JSON.parse(localStorage.getItem('lastOrder') || '{}');
    if (!order.bookingDate) {
      document.getElementById('billContent').innerHTML = '<p>No order found.</p>';
    } else {
      document.getElementById('billContent').innerHTML = `
        <p><strong>Booking Date:</strong> ${order.bookingDate}</p>
        <p><strong>Number of People:</strong> ${order.peopleCount}</p>
        <p><strong>Buffet Type:</strong> ${order.buffetType} (Sets: ${order.buffetSets})</p>
        <p><strong>Serving Team Members:</strong> ${order.servingMembers}</p>
        <p><strong>Crockery:</strong> ${(order.crockery && order.crockery.length>0) ? order.crockery.join(', ') : 'None'}</p>
        <hr>
        <h4>Total Cost: ${order.totalCost}</h4>
      `;
    }