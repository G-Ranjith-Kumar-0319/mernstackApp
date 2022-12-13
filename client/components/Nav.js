import React from 'react'
import Link from "next/link"
const Nav = () => {
  return <nav className='nav bg-dark d-flex justify-content-between'>
            <Link href="/" legacyBehavior>
                <a  className='nav-link text-light'>Home</a>
            </Link>
        
            <Link href="/login" legacyBehavior>
                <a  className='nav-link text-light'>Login</a>
            </Link> 
            <Link href="/register" legacyBehavior>
                <a  className='nav-link text-light'>Register</a>
            </Link> 
    </nav>
}

export default Nav
