import React, { useState } from 'react'

export default function BookRegistration() {

    const [book,setBook]=useState({
        bookname:"",
        authorname:"",
        bookgenre:"",
        numberofbooks:"",
        date:""
    });
    const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
   const handleSubmit = (e) => {
   
    let books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));

    alert("Book Registered");
  };

  return (
    <><div>BookRegistration</div><form onSubmit={handleSubmit}>
          <input name="bookname" placeholder="Book Name" onChange={handleChange} required />
          <br /><br />

          <input name="authorname" placeholder="Author Name" onChange={handleChange} required />
          <br /><br />

          <input name="bookgenre" placeholder="Genre" onChange={handleChange} required />
          <br /><br />
          <input name="numberofbooks" placeholder="Total Books" onChange={handleChange} required />
          <br /><br />
          <input name="date" placeholder="Date" onChange={handleChange} required />
          <br /><br />

          <button type="submit">Add Book</button>
      </form></>
  )
}
