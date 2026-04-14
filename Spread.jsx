// This is a simple React component that demonstrates how to use the spread operator to update state.

import { useState } from "react";

export default function Spread() {
  const [user, setUser] = useState({
    name: "Smit",
    role: "Student",
    age: 21
  });

  const updateAge = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1
    }));
  };

  const { name, age, role } = user;

  return (
    <div>
      <h1>{name} is {age} years old</h1>
      <h2>{name} is a {role}</h2>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
}