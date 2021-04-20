import React from "react"

const PizzaForm = ({ selectedPizza, handleOnChange, handleRadioChange, handleOnSubmit }) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" value={selectedPizza.topping} onChange={handleOnChange} />
      </div>
      <div className="col">
        <select name="size" value={selectedPizza.size} onChange={handleOnChange} className="form-control">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input className="form-check-input" type="radio" value="Vegetarian" checked={selectedPizza.vegetarian} onChange={handleRadioChange} />
          <label className="form-check-label">
            Vegetarian
            </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!selectedPizza.vegetarian} onChange={handleRadioChange} />
          <label className="form-check-label">
            Not Vegetarian
            </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={handleOnSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default PizzaForm