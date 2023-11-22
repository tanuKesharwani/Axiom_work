import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BookData } from './StateManagement/BookData';
import { UserDataProvider } from './StateManagement/UserData';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BookData>
    <UserDataProvider>
    <App />
    </UserDataProvider>
    </BookData>

);


