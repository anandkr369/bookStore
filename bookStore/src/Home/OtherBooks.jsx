import React from 'react'
import { useEffect, useState } from 'react'
import BookCards from "../components/BookCards.jsx"

const OtherBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch("https://bookstore-bx08.onrender.com/all-books")
        .then(res=>res.json())
        .then(data =>setBooks(data.slice(4,16)));
    })
  return (
    <div>
      <BookCards books = {books} headline = "Other Books"/>
    </div>
  )
}

export default OtherBooks