// [] write App Component
// [] build pizza Components in same folder

import React from 'react'
import ReactDOM from 'react-dom'
import awesomeImage from "./pizzas/spinaci.jpg"



const pizzaData = [
  {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,

  },
  {
      name:"Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizza/margherita.jpg",
      soldOut: false,
  },

  {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,

  },

  {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12, 
      photoName: "pizza/funghi.jpg",
      soldOut: false,

  },

  {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizza/salamino.jpg",
      soldOut: true,
  },

  {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "piza/prosciutto.jpg",
      soldOut: false,
  },
];




function App () {
  return ( 
  <div>
   
    <Header/>
    <Menu/>
    <Footer/>
  </div>

  )
}

function Header () {
  return ( 
    <div>
        <h1>Fast React Pizza Co.</h1>
        <h5>Thank you Truck Drivers</h5>
        <h6>Hot Food Served 24 hours</h6>
    </div>
  )
}

function Menu () {
  return (
      <div>
        <h2>Our Menu</h2>
        <Pizza />
      </div>
  )

}

function Footer () {
  return (
    <div>
       <footer>We're currently open</footer>
    </div>
  )
}

function Pizza () {
  return (
   <div> 
  <img src={awesomeImage} alt="Pizza Spinaci" />
  <h2>Pizza Spinaci</h2>
  <p> Tomato, mozarella, spinach, and ricotta cheese </p>
  
  </div>
  )
  
}

export default App