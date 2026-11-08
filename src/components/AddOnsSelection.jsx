import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAddOn, decrementAddOn } from '../features/addOnsSlice';

export default function AddOnsSelection() {
  const addOns = useSelector((state) => state.addOns);
  const dispatch = useDispatch();

  const totalCost = addOns.reduce((acc, a) => acc + a.cost * a.quantity, 0);

  return (
    <div id="addons-section" className="section-container">
      <h2 className="section-header">Add-ons Selection</h2>
      <div className="cards-grid">
        {addOns.map((item, idx) => (
          <div key={idx} className="card">
            <img src={item.image} alt={item.name} className="card-image" />
            <h3>{item.name}</h3>
            <p className="cost-tag">${item.cost}</p>
            <div className="counter-controls">
              <button onClick={() => dispatch(decrementAddOn(idx))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementAddOn(idx))}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="subtotal-box">Total Cost: ${totalCost}</div>
    </div>
  );
}