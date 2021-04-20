import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: {
      id: '',
      topping: '',
      size: '',
      vegetarian: true
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(fetchedPizzas => this.setState({ pizzas: fetchedPizzas }))
  }

  selectedPizza = (pizza) => {
    this.setState({ selectedPizza: pizza })
  }

  handleOnChange = (event) => {
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        [event.target.name]: event.target.value
      }
    })
  }

  handleRadioChange = () => {
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        vegetarian: !this.state.selectedPizza.vegetarian
      }
    })
  }

  handleOnSubmit = () => {
    console.log('submitted')
    fetch(`http://localhost:3000/pizzas/${this.state.selectedPizza.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json'
      },
      body: JSON.stringify(
        this.state.selectedPizza
      )
    })
      .then(resp => resp.json())
      .then(newPizza => {
        const updatedPizzas = this.state.pizzas.map(pizza => {
          return newPizza.id === pizza.id ? newPizza : pizza
        })
        this.setState({
          pizzas: updatedPizzas,
          selectedPizza: {
            id: '',
            topping: '',
            size: '',
            vegetarian: true
          }
        })
      })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm
          selectedPizza={this.state.selectedPizza}
          handleOnChange={this.handleOnChange}
          handleRadioChange={this.handleRadioChange}
          handleOnSubmit={this.handleOnSubmit}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          selectedPizza={this.selectedPizza}
        />
      </Fragment>
    );
  }
}

export default App;