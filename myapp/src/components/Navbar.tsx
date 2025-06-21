

import { auth, signIn, signOut } from '@/auth'
import React from 'react'
import { Bell, Menu, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'



const Header = async () => {
  const session = await auth();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
         
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">F</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">FocusFlow</h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 min-w-[300px]">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-transparent border-0 outline-none flex-1 text-sm"
          />
        </div>

        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </Button>

        {session?.user ? (
          <form
            action={async () => {
              'use server'
              await signOut({ redirectTo: '/' });
            }}
          >
            <button type="submit">
              <User className="h-5 w-5" />
            </button>
          </form>
        ) : (
          <form
            action={async () => {
              'use server'
              await signIn('github');
            }}
          >
            <button type="submit">
              <User className="h-5 w-5" />
            </button>
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
