import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { account } from './appWrite-config';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
function Header() {

  const headerStyle = {
    width: '100%',
    height: '5vh',
  };

  const [showLoader, setShowLoader] = useState(false);
  let navigate = useNavigate();


  const logout = async () => {
    setShowLoader(true);
    try {
      await account.deleteSession('current');
      navigate("/login")
      // Redirect or perform any other actions after successful logout
  } catch (error) {
      console.error('Logout failed:', error);
  }
  };
  return (
    <div style={headerStyle} className='text-end'>
      <Button  variant="link" onClick={logout}>Logout</Button>
    </div>
  )
}

export default Header