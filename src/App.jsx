import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "94.00",
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car",
      amount: "1000.2",
      date: new Date(2022, 3, 28),
    },
    {
      id: "e3",
      title: "Dog Food",
      amount: "653.55",
      date: new Date(2019, 6, 20),
    },
  ];

  return (
    <>
      <h1>Agora vai</h1>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </>
  )
}

export default App;
