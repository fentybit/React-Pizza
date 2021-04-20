import React from "react"

const Pizza = (props) => {
  const { pizza, selectedPizza } = props

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Yes' : 'No'}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => selectedPizza(pizza)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza