import React from 'react'
import { user } from './objects'
import { products } from './objects'
import RegisterForm from './RegisterForm'
import Spread from './spread'
import Counter from './useeffecthook'
import Fetchsuer_ue from './Fetchsuer_ue'
import Reducer from './Reducer'


function App() {

  return (
    <div>
      <h1>Users</h1>
      <ul>

       {user.map((i) => (
          <li> {i.name} - {i.age} years old - {i.isAdmin ? 'Admin' : 'User'}</li>
        ))}

      </ul> 

      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li>
            {product.name} - ${product.price.toFixed(2)} - {product.inStock ? 'In Stock' : 'Out of Stock'}
          </li>
        ))}
      </ul>
      < Reducer /> 
      <RegisterForm />
      <Spread />
      <Counter />
      <Fetchsuer_ue />
    </div>
  )
}

export default App