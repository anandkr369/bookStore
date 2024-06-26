import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import MyFooter from './MyFooter';

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://bookstore-bx08.onrender.com/all-books')
      .then((res) => res.json())
      .then(data => setBooks(data));
  })
  return (
    <div className='bg-teal-100'>
      <div className='mt-28 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center'>All Books are here</h2><br />
        <div className='grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
          {
            books.map(books => <Card>
              <img src={books.imgURL} alt="bookImg" className='h-96' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {books.bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {books.book_description}
              </p>
              <button className='bg-blue-700 font-semibold text-white py-2 rounded-md'>Buy Now</button>
            </Card>)
          }
        </div>
      </div>
      <div>
        <MyFooter />
      </div>
    </div>
  )
}

export default Shop