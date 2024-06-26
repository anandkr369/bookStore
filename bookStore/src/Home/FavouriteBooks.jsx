//bestseller
import React from 'react'
import { useState, useEffect } from 'react'
import BookCards from "../components/BookCards.jsx"
const FavouriteBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch("https://bookstore-bx08.onrender.com/all-books")
        .then(res=>res.json())
        .then(data =>setBooks(data.slice(0,8)));
    })
  return (
    <div>
      <BookCards books = {books} headline = "Best Seller"/>
    </div>
  )
}

export default FavouriteBooks