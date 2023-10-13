'use client'
import { scrapeAndStoreProduct } from '@/lib/actions';
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;

    if(hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')) {
      return true;
    }
  } catch(err) {
    return false;
  }
}
const SearchBar = () => {

  
    const[searchPrompt, setSearchPrompt] = useState('');
    const[isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (event: FormEvent<HTMLFormElement>)=> {
      event.preventDefault();

      const isValidLink = isValidAmazonProductURL(searchPrompt);
      if(!isValidLink) return alert('Please provide a valid Amazon link');
      try {

        setIsLoading(true);

        const product = await scrapeAndStoreProduct(searchPrompt);
        

      } catch(err) {
        console.log(err);
      } finally {
        setIsLoading(false)
      }
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-12">
        <input type="text" placeholder='Enter Product Link' className='searchbar-input' value={searchPrompt} onChange={(e)=>setSearchPrompt(e.target.value)}/>
        <button type='submit' disabled={searchPrompt === ''}className="searchbar-btn">{isLoading ? "Searching..." : "Search"}</button>
    </form>
  )
}

export default SearchBar
