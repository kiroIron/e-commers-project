import React from 'react'
import Navbar from './components/nav_bar/Navbar'
import ContainerCard from './components/card/ContainerCard';
import Footer from './components/Footer';
const App = () => {


  return (
  <>
  <Navbar/>

  <ContainerCard/>
  <Footer/>
  {/* <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                    </li>
                ))}
            </ul>
        </div> */}
  </>
  )
}

export default App