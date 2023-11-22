import React, { createContext, useContext, useState } from 'react';

// Create a context
const bookDataContext = createContext();

// Create a context provider component
export function BookData({ children }) {
  const [book,setBookData] = useState([  {
    "bookId": 1,
    "bookName": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "copies": 10,
    "price": 12.99,
    "category": "Classic"
  },
  {
    "bookId": 2,
    "bookName": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "copies": 8,
    "price": 15.99,
    "category": "Fiction"
  },
  {
    "bookId": 3,
    "bookName": "1984",
    "author": "George Orwell",
    "copies": 5,
    "price": 9.99,
    "category": "Dystopian"
  },
  {
    "bookId": 4,
    "bookName": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "copies": 12,
    "price": 11.49,
    "category": "Fiction"
  },
  {
    "bookId": 5,
    "bookName": "Pride and Prejudice",
    "author": "Jane Austen",
    "copies": 15,
    "price": 14.99,
    "category": "Romance"
  },
  {
    "bookId": 6,
    "bookName": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "copies": 20,
    "price": 18.99,
    "category": "Fantasy"
  },
  {
    "bookId": 7,
    "bookName": "The Harry Potter Series",
    "author": "J.K. Rowling",
    "copies": 25,
    "price": 29.99,
    "category": "Fantasy"
  },
  {
    "bookId": 8,
    "bookName": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "copies": 18,
    "price": 22.99,
    "category": "Fantasy"
  },
  {
    "bookId": 9,
    "bookName": "The Chronicles of Narnia",
    "author": "C.S. Lewis",
    "copies": 14,
    "price": 17.49,
    "category": "Fantasy"
  },
  {
    "bookId": 10,
    "bookName": "Brave New World",
    "author": "Aldous Huxley",
    "copies": 7,
    "price": 13.99,
    "category": "Dystopian"
  }]) ;
  const addBook = (newBook) => {
    setBookData(prevBooks => [...prevBooks, newBook]);
  };
 

  return (
    <bookDataContext.Provider value={{ book,setBookData,addBook}}>
      {children}
    </bookDataContext.Provider>
  );
}

// Custom hook for consuming the context
export function useDisplay() {
  return useContext(bookDataContext);
}