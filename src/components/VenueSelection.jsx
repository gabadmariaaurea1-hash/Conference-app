import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../features/venueSlice';

export default function VenueSelection() {
  const rooms = useSelector((state) => state.venue);
  const dispatch = useDispatch();

  const totalCost = rooms.reduce((acc, r) => acc + r.cost * r.quantity, 0);

  return (
    <div id="venue-section" className="section-container">
      <h2 className="section-header">Venue Room Selection</h2>
      <div className="cards-grid">
        {rooms.map((room, idx) => (
          <div key={idx} className="card">
            <img src={room.image} alt={room.name} className="card-image" />
            <h3>{room.name}</h3>
            <p className="cost-tag">${room.cost}</p>
            <div className="counter-controls">
              <button onClick={() => dispatch(decrementQuantity(idx))}>-</button>
              <span>{room.quantity}</span>
              <button onClick={() => dispatch(incrementQuantity(idx))}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="subtotal-box">Total Cost: ${totalCost}</div>
    </div>
  );
}