import React from 'react'
import CartWidget from './CartWidget'
import './NavStyle.css'


const NavBar = () => {

    return (
    <>
    
    <nav className='contNav'>

    <div>
        <a href="../"><h1 className='titleStyle'>JTech</h1></a>
      
    </div>
    <div className='contButtons'>
      <button className='ButtonStyle'>Hardware</button>
      <button className='ButtonStyle'>Perifericos</button>
      <button className='ButtonStyle'>Monitores</button>
      <button className='ButtonStyle'>Notebooks</button>
    </div>
    <CartWidget />
    

    </nav>
    </>
  )
}

export default NavBar
