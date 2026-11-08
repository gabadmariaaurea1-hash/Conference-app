import React from 'react';
import { useSelector } from 'react-redux';

export default function DetailsModal({ onClose }) {
  const venue = useSelector((state) => state.venue);
  const addOns = useSelector((state) => state.addOns);
  const meals = useSelector((state) => state.meals);

  const selectedVenue = venue.filter((v) => v.quantity > 0);
  const selectedAddOns = addOns.filter((a) => a.quantity > 0);
  const selectedMeals = meals.options.filter((m) => m.selected);

  const venueTotal = selectedVenue.reduce((a, b) => a + b.cost * b.quantity, 0);
  const addOnsTotal = selectedAddOns.reduce((a, b) => a + b.cost * b.quantity, 0);
  const mealsTotal = selectedMeals.reduce((a, b) => a + b.cost * meals.numberOfPeople, 0);
  const grandTotal = venueTotal + addOnsTotal + mealsTotal;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>TOTAL COST FOR THE EVENT</h2>
        <div className="grand-total">${grandTotal}</div>

        <table className="details-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Unit Cost</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {selectedVenue.map((item, i) => (
              <tr key={`v-${i}`}>
                <td>{item.name}</td>
                <td>${item.cost}</td>
                <td>{item.quantity}</td>
                <td>${item.cost * item.quantity}</td>
              </tr>
            ))}
            {selectedAddOns.map((item, i) => (
              <tr key={`a-${i}`}>
                <td>{item.name}</td>
                <td>${item.cost}</td>
                <td>{item.quantity}</td>
                <td>${item.cost * item.quantity}</td>
              </tr>
            ))}
            {selectedMeals.map((item, i) => (
              <tr key={`m-${i}`}>
                <td>{item.name}</td>
                <td>${item.cost}</td>
                <td>For {meals.numberOfPeople} people</td>
                <td>${item.cost * meals.numberOfPeople}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}