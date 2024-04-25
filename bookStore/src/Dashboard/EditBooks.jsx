import React from 'react';
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorname, imgURL, category, book_description, book_pdf_url } = useLoaderData();

  const bookCategories = [
    "select",
    "Friction",
    "Non-Fiction",
    "Mistery",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Bussiness",
    "Education",
    "Children Books",
    "Travel",
    "Art and Design",
    "Other"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleSelectedCategory = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // Update books
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorname = form.authorname.value;
    const imgURL = form.imgURL.value;
    const category = form.category.value;
    const book_description = form.book_description.value;
    const book_pdf_url = form.book_pdf_url.value;

    const booksObj = {
      bookTitle,
      authorname,
      imgURL,
      category,
      book_description,
      book_pdf_url
    };

    // Update book data using the id from URL params
    fetch(`https://bookstore-bx08.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(booksObj)
    })
      .then(res => res.json())
      .then(data => {
        alert("Book Updated Successfully!!");
      })
      .catch(error => {
        console.error('Error updating book:', error);
        alert("An error occurred while updating the book.");
      });
  };

  return (
    <div className='px-4 my-12 '>
      <h2 className='mb-8 text-3xl font-bold'> Update the Books Data</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>
        {/* 1st Row */}
        <div className='flex gap-8'>
          {/* book title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput className='lg:w-96 md:w-64  sm:w-20' id="bookTitle" type="text" placeholder="Book Name" required defaultValue={bookTitle} />
          </div>

          {/* book author */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorname" value="Book Author" />
            </div>
            <TextInput className='lg:w-96 md:w-64  sm:w-20' id="authorname" type="text" placeholder="Book Author" required defaultValue={authorname} />
          </div>
        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          {/* book image */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imgURL" value="Book-Image URL" />
            </div>
            <TextInput className='lg:w-96 md:w-64  sm:w-20' id="imgURL" type="text" placeholder="Book URL" required defaultValue={imgURL} />
          </div>

          {/* book Categories from array ( in the top of this code) */}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='inputState' value='Book Category' />
            </div>

            <Select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleSelectedCategory}>
              {bookCategories.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        {/* 3rd row */}
        <div className='flex gap-8'>
          {/* book Description */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="book_description" value="Book Description" />
            </div>
            <Textarea className='lg:w-96 md:w-64  sm:w-20' id="book_description" type="text" defaultValue={book_description} placeholder="Book Description here..." required rows={7} />
          </div>

          {/* book pdf link */}
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='book_pdf_url' value='Book PDF URL' />
            </div>
            <div>
              <TextInput className='lg:w-96 md:w-64  sm:w-20' id='book_pdf_url' placeholder='Book URL' required type='text' defaultValue={book_pdf_url} />
            </div>
          </div>
        </div>
        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>
  );
};

export default EditBooks;
