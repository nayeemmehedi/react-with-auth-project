import React, {useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import SingUp from './components/SingUp/SingUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ContextRoom from './components/contextRoom/ContextRoom';



export const userContext = React.createContext();


function App() {
  const [loggedInUser,setLoggedInUser] =useState({})



  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
     { loggedInUser.email && <p style={{textAlign:'right'}}>Email {loggedInUser.email}</p>}
      
      
      
      <Router>
         
          <Header/>
          <Switch>
          <ContextRoom >
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

          
           
            <PrivateRoute path="/book/:Typename">

            <Book />

               
              
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/SignUp">
              <SingUp/>
              
            </Route>
            </ContextRoom >

          </Switch>
          
      </Router>
      </userContext.Provider>
  );
}

export default App;
