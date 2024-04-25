import React from 'react'
import {useLoaderData} from 'react-router-dom'

const SingleBook = () => {
    const {_id,bookTitle, imgURL } = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imgURL} alt={bookTitle} className='w-72'/>
        SingleBook: {bookTitle}
    </div>
    
  )
}

export default SingleBook