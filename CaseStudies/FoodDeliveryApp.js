import React, { useState } from 'react';

function BookingFood({ foodName }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Booking for {foodName}</h3>

      <label>Food Item Quantity: </label>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <p>Total Price: ${quantity * 200}</p>
    </div>
  );
}

const FoodApp = () => {
  return (
    <div>
      <BookingFood foodName="Fried Rice" />
      <BookingFood foodName="Manchuria" />
      <BookingFood foodName="Biryani" />
      <BookingFood foodName="Egg Biryani" />
    </div>
  );
};

export default FoodApp;
