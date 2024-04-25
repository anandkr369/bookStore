import React from 'react'
import Banner from './Banner.jsx'
import FavouriteBooks from './FavouriteBooks.jsx'
import FavBook from './FavBook.jsx'
import PromoBanner from "./PromoBanner.jsx"
import OtherBooks from './OtherBooks.jsx'
import MyFooter from '../components/MyFooter.jsx'
function Home() {
  return (
    <div className='h-screen'>  
      <div className='flex-grow h-screen'>
        <Banner/>
        <FavouriteBooks/>
        <FavBook/>
        <PromoBanner/>
        <OtherBooks/>
        <MyFooter/>
      </div>
      
    </div>
  )
}

export default Home