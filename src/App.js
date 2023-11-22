import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    const storedRole = localStorage.getItem("Role");
    setUserRole(storedRole);

    // Redirect to Home if userRole is present
 
  }, []);

  return (
    <Router>
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />     
           
     </Routes>
  
    </Router>
  );
}

export default App;
