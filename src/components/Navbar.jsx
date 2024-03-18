import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-700 border-b border-purple-500'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-20 items-center justify-between'>
                <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                    <a className='flex flex-shrink-0 items-center mr-4' href='/index.html'>
                        <img className='h-10 w-auto' src='/assets/logo.svg' alt='React-logo' />    
                </div>
            </div>        
        </div>
      
    </nav>
  )
}

export default Navbar