import { auth, signIn,signOut} from '@/auth'

import Link from 'next/link';
import React from 'react'

const Navbar = async () => {
    const session  = await auth();
  return (
   
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyApp</div>
        <div className="space-x-4">
          {session && session?.user ?(
           <><Link href="tasks/create" className="text-white hover:underline">
              <span>Create Task</span>
            </Link><form action={async () => {
              'use server'
              await  signOut({redirectTo: '/'})}
              }
              >
                <button type="submit" className="text-white hover:underline">Logout</button>
              </form></>

          ):(
            <form action={async () => {
              'use server'
              await signIn('github')}}>
              <button type='submit'>Login</button>
            </form>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar