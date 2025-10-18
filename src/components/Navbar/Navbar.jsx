import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <ul className='bg-green-800 text-3xl m-2 p-4 flex justify-between'>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/blogs'}>Blogs</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/contact'}>Contact</Link>
       </ul>
    </div>
  )
}

export default Navbar