import { useReducer } from "react";

// 🔹 reducer (logic)
function Reducer(balance, action) {
  switch (action.type) {
    case "DEPOSIT":
      return balance + action.amount;

    case "WITHDRAW":
      return balance - action.amount;

    default:
      return balance;
  }
}

export default function App() {
  const [balance, dispatch] = useReducer(Reducer, 100);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🏦 Bank Balance: ${balance}</h1>

      <button onClick={() => dispatch({ type: "DEPOSIT", amount: 50 })}>
        Deposit $50
      </button>

      <button onClick={() => dispatch({ type: "WITHDRAW", amount: 30 })} style={{ marginLeft: "10px" }}>
        Withdraw $30
      </button>
    </div>
  );
}