import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <ul className='bg-green-800 text-3xl m-2 p-4 flex justify-between'>
        <Link to={'/home'}>Home</Link>
        <Link to={'/home'}>About</Link>
        <Link to={'/home'}>Blogs</Link>
        <Link to={'/home'}>Products</Link>
        <Link to={'/home'}>Contact</Link>
       </ul>
    </div>
  )
}

export default Navbar