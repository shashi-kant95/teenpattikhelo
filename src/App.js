import { useState, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './Loader';
import Login from './Login';
import { account } from './appWrite-config';


function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    async function getUser() {
      setShowLoader(true);
      try{
      let response = await account.get();
      setShowLoadingScreen(false);
      if(!response.emailVerification){
       // alert("please verify email");
      }
      setIsLoggedin(true);
      setShowLoader(false);
      }
      catch(error){
      setShowLoadingScreen(false);

        setIsLoggedin(false);
      setShowLoader(false);

      }
    }
    getUser();
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={showLoadingScreen ? <Loader showLoader={true} /> : isLoggedin ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<Register />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
