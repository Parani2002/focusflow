import { auth } from '@/auth'
import React from 'react'

const Navbar = async () => {
    const session  = await auth();
  return (
    <div>Navbar
        {session ? (
            <div>
            <p>Welcome, {session.user?.name}</p>
            <a href="/api/auth/signout">Sign Out</a>
            </div>
        ) : (
            <a href="/api/auth/signin">Sign In</a>
        )}
    </div>
  )
}

export default Navbar