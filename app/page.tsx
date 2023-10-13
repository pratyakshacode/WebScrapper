import HeroCarousel from '@/components/HeroCarousel'
import ProductCard from '@/components/ProductCard'
import SearchBar from '@/components/SearchBar'
import { getAllProducts } from '@/lib/actions'
import Image from 'next/image'
import React from 'react'

const Home = async () => {

  const allProducts = await getAllProducts()
  
  return (
    <>
      <section className='md:px-20'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image src={'/assets/icons/arrow-right.svg'} alt='arrow-right' width={16} height={16}/>
            </p>

            <h1 className='head-text'>
              Unlease the Power of 
              <span className="text-primary">ScrapAll</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <SearchBar/>
          </div>

          <HeroCarousel/>
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gapy-y-16">
          {
            allProducts?.map((product)=> {
              return <ProductCard key={product._id} product = {product}/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home
