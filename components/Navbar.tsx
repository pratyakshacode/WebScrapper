import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  const navIcons = [
    {src: '/assets/icons/search.svg', alt: 'search'},
    {src: '/assets/icons/black-heart.svg', alt: 'heart'},
    {src: '/assets/icons/user.svg', alt: 'user'},

  ]
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-1'>
          <Image src={'/assets/icons/logo.svg'}  height={27} width={27} alt='logo'/>
          <p className='nav-logo-main'>Scrap<span className='nav-logo-span'>All</span></p>
        </Link>

        <div className='flex  items-center gap-5'>
          {navIcons.map((icon)=> {
            return <Image className='invert-icon' key={icon.alt} src={icon.src} alt={icon.alt} width={28} height={28}/>
          })}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
