/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'

const HomePage = () => {

  return (
    <div className="flex h-screen">
      {/* Left part with image */}
      <div className="w-1/2">
        <img src="/express-redis-nodejs.png" alt="Welcome Image" className="w-full h-full object-cover" />
      </div>

      {/* Right part with welcome message and button */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className="text-lg mb-6">We're glad to have you here.</p>
        <Link href="/register" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default HomePage