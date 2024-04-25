import React, { useEffect, useState } from 'react'
import { Table, TableBody } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() =>{
    fetch("https://bookstore-bx08.onrender.com/all-books")
    .then(res =>res.json())
    .then(data => setAllBooks(data));
  },[])

  //delete a book
  const handleDelete = (id) =>{
    console.log(id);
    fetch(`https://bookstore-bx08.onrender.com/book/${id}`,{method: "DELETE"})
    .then(data => {
      alert("Books is deleted successfully!!")
    })
    
  }
  return (
    <div className='px-4 my-12'>
      <h1 className=' mt-9 text-center text-blue-700 text-3xl font-bold'>Manage Your Books</h1><br/>

      {/* table */}
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Sr No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          
          <Table.HeadCell>
            <span className="sr-only">Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) =>(
            <Table.Body className='divide-y ' key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorname}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </Link>
              <button className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:text-gray-600 hover:bg-teal-200 ml-2' onClick={() => handleDelete(book._id)}>Delete</button>
            </Table.Cell>
          </Table.Row>
            </Table.Body>
          ))
        }
      </Table>

    </div>
  )
}

export default ManageBooks