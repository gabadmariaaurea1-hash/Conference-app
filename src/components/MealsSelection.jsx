import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNumberOfPeople, toggleMealOption } from '../features/mealsSlice';

export default function MealsSelection() {
  const { numberOfPeople, options } = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  const totalCost = options.reduce((acc, m) => {
    return acc + (m.selected ? m.cost * numberOfPeople : 0);
  }, 0);

  return (
    <div id="meals-section" className="section-container">
      <h2 className="section-header">Meals Selection</h2>
      <div className="meals-input-group">
        <label>Number of People: </label>
        <input
          type="number"
          min="1"
          value={numberOfPeople}
          onChange={(e) => dispatch(setNumberOfPeople(Math.max(1, parseInt(e.target.value) || 1)))}
        />
      </div>
      <div className="meals-grid">
        {options.map((meal, idx) => (
          <div key={idx} className="meal-option">
            <input
              type="checkbox"
              id={`meal-${idx}`}
              checked={meal.selected}
              onChange={() => dispatch(toggleMealOption(idx))}
            />
            <label htmlFor={`meal-${idx}`}>
              <strong>{meal.name}</strong>
              <div>${meal.cost}</div>
            </label>
          </div>
        ))}
      </div>
      <div className="subtotal-box">Total Cost: ${totalCost}</div>
    </div>
  );
}