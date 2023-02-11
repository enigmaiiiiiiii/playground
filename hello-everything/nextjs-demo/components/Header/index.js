import React from 'react'
import Link from 'next/link'

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
    <nav>
      <ul className="flex">
        <li className="mr-6">
          <Link href="/" className="hover:text-gray-500">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/BlogList" className="hover:text-gray-500">
            Blog
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/About" className="hover:text-gray-500">
            About
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/Contact" className="hover:text-gray-500">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <h1 className="font-medium text-2xl">Dopomine Blog</h1>
    <form className="flex items-center">
      <input type="text" placeholder="Search..." className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-64 mr-4"/>
      <button type="submit" className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-full">Submit</button>
    </form>
  </header>
)

export default Header