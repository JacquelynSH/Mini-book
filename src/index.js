import React from 'react'
import ReactDom from 'react-dom/client'
import { books } from './books';
import Book from './Book';
import './index.css';


function BookList() {
  return (
    // itterating over our books array with the map function
    <section className='booklist'>
      {books.map((book, index) => {
      return <Book key={book.id} {...book}></Book>;
    })}
    </section>
  );
}

ReactDom.createRoot(document.getElementById('root')).render(<BookList />)
