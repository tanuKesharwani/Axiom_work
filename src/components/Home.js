import React,{useEffect, useState} from 'react'
import CategoryCard from './CategoryCard';
import books from '../bookList';
import { useDisplay } from '../StateManagement/BookData';
import {useUserContext} from '../StateManagement/UserData';
function Home() {
    const {book,setBookData,addBook} = useDisplay();
    const { user, setUserData } = useUserContext();
    const [selectedCategory, setSelectedCategory] = useState('All'); // Initial category is 'All'
   const userId = localStorage.getItem("userId");
   const userRole = localStorage.getItem("Role");
   const categories = ['All', 'Classic', 'Fiction', 'Dystopian', 'Romance', 'Fantasy', 'Horror'];
   const [filteredBooks, setFilteredBooks] = useState(book);  

   const [newBook, setNewBook] = useState({
    bookId: '',
    bookName: '',
    author: '',
    copies: 0,
    price: 0,
    category: ''
  });
   const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const newFilteredBooks = category === 'All'
      ? book
      : book.filter(boos => boos.category === category);

    setFilteredBooks(newFilteredBooks);

    // Now you can do something with the filteredBooks if needed
    console.log(newFilteredBooks);

};
const handleInputChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value
    });
  };

  const handleAddBook = () => {
    // You can perform any validation here before adding the book
    addBook(newBook);
    setNewBook({
      bookId: '',
      bookName: '',
      author: '',
      copies: 0,
      price: 0,
      category: ''
    });
  };

  const [newUser, setNewUser] = useState({
    userId: '',
    name: '',
    duration: '',
    pending: '',
  });

  const handleAddUser = () => {
    // You can perform any validation here before adding the user
    setUserData({
      ...user,
      userId: newUser.userId,
      name: newUser.name,
      duration: newUser.duration,
      pending: newUser.pending,
    });
    setNewUser({
      userId: '',
      name: '',
      duration: '',
      pending: '',
    });
  };
  const handleInputChangeUser = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const [showUserList, setShowUserList] = useState(false);

  const handleShowUserList = () => {
    setShowUserList(true);
  };
   return (
    <div>
        <center><h1>Welcome {userId} as {userRole} </h1></center>
        <div className='categorySection'>
        {categories.map(category => (
         <CategoryCard categoryName={category} onClick={() => handleCategoryClick(category)} />
        ))}
      
        </div>
        <h2>Books</h2>
     
        
        
          <table key={book.bookId}>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Available Copies</th>
              <th>price</th>
              <th>category</th>

            </tr>
          </thead>
          {filteredBooks.map(book => (
          <tbody id="bookList">
          <tr key={book.bookId}>
          <td>{book.bookId}</td>

          <td>{book.bookName}</td>
          <td>{book.author}</td>
          <td>{book.copies}</td>
          <td>{book.price}</td>
          <td>{book.category}</td>
          
        </tr>
     
          </tbody>
             ))}
        </table>
      
      

      {userRole==='admin'&&<div className="SectionAdmin">
        <div className='forMember'>
            <h2>Add user</h2><h2>Add user</h2>
            <label>User ID</label><br />
            <input
              type="text"
              name="userId"
              value={newUser.userId}
              onChange={handleInputChangeUser}
            /><br />
            <label>Name</label><br />
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChangeUser}
            /><br />
            <label>Duration</label><br />
            <input
              type="text"
              name="duration"
              value={newUser.duration}
              onChange={handleInputChangeUser}
            /><br />
            <label>Pending</label><br />
            <input
              type="text"
              name="pending"
              value={newUser.pending}
              onChange={handleInputChangeUser}
            /><br /><br />
            <button onClick={handleAddUser}>Add User</button>


            <div><br /><br />
      <button onClick={handleShowUserList}>Show User List</button>
      {showUserList && (
        <div>
          <h2>User List</h2>
          <ul>
            {user.map((users) => (
              <li key={users.userId}>
                {users.name} - Duration: {users.duration}, Pending: {users.pending}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
          </div>
        <div className='forBooks'>
      
        <h2>Add books</h2>
            <label>Book ID</label><br />
            <input type='text' name='bookId' value={newBook.bookId} onChange={handleInputChange} /><br />
            <label>Title</label><br />
            <input type='text' name='bookName' value={newBook.bookName} onChange={handleInputChange} /><br />
            <label>Author</label><br />
            <input type='text' name='author' value={newBook.author} onChange={handleInputChange} /><br />
            <label>Available Copies</label><br />
            <input type='number' name='copies' value={newBook.copies} onChange={handleInputChange} /><br />
            <label>Price</label><br />
            <input type='number' name='price' value={newBook.price} onChange={handleInputChange} /><br />
            <label>Category</label><br />
            <input type='text' name='category' value={newBook.category} onChange={handleInputChange} /><br />
            <button onClick={handleAddBook}>Add Book</button>
            </div>
      </div>}
    </div>
  )
}

export default Home