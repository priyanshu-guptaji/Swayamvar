import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"
import { FaHeart } from 'react-icons/fa'

const Header = () => {
  const [showLogoModal, setShowLogoModal] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-amber-50 to-yellow-100 text-amber-900 shadow-md border-b border-amber-200">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
            <div className="w-14 h-14 flex items-center justify-center">
              <img 
                src="/images/logo.jpg" 
                alt="Swayamvar Logo" 
                className="w-12 h-12 object-contain rounded-full border border-amber-300 cursor-pointer hover:shadow-lg transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogoModal(true);
                }}
              />
            </div>
            <span className="ml-3 text-xl font-semibold text-amber-800 hover:text-amber-600 transition-colors duration-300">Swayamvar</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-amber-200 flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 text-amber-800 hover:text-amber-600 transition-colors duration-300 cursor-pointer">Home</Link>
            <Link to="/decorations" className="mr-5 text-amber-800 hover:text-amber-600 transition-colors duration-300 cursor-pointer">Decorations</Link>
            <Link to="/contact" className="mr-5 text-amber-800 hover:text-amber-600 transition-colors duration-300 cursor-pointer">Contact</Link>
            <Link to="/wishlist" className="mr-5 text-amber-800 hover:text-amber-600 transition-colors duration-300 cursor-pointer flex items-center">
              <FaHeart className="mr-1" />
              Wishlist
            </Link>
          </nav>
          
          <SignedOut>
            <SignInButton mode="modal">
              <button className='bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-7 py-2 rounded-full font-medium hover:from-amber-700 hover:to-yellow-600 transition-all duration-300 shadow-md border border-amber-400'>
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </header>

      {/* Logo Modal */}
      {showLogoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setShowLogoModal(false)}
        >
          <div className="relative max-w-4xl mx-auto p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setShowLogoModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src="/images/logo.jpg"
              alt="Swayamvar Logo Full Size"
              className="max-h-[90vh] w-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Header