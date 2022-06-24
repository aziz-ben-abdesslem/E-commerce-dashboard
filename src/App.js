import './App.css';
import Home from './Views/home/home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./Views/home/layout/layout"
import { Navigate } from 'react-router-dom';

import GetAllArticles from './Views/home/articles/GetAllArticles'
import AddArticles from "./Views/home/articles/AddArticles"
import UpdateArticles from './Views/home/articles/UpdateArticles' 

import GetAllOrders from './Views/home/commandes/getAllOrders'
import UpdateOrders from "./Views/home/commandes/UpdateOrders"
import Contact from './Views/home/Contact/getAllMessages'

import GetAllServices from './Views/home/serviceRep/GetAllServices';
import AddServices from './Views/home/serviceRep/AddServices'
import UpdateServices from './Views/home/serviceRep/UpdateServices';

import GetAllUsers from "./Views/home/Users/getAllUsers"
import UpdateUsers from "./Views/home/Users/UpdateUsers"

import Error404 from './Views/errors/error'
import Login from './Views/login/login'
import Register from './Views/home/Users/Register'

function App() {
  
  const isAdmin = JSON.parse(localStorage.getItem("role"))

  const PrivateRoute1 = ({children})=>{
    return isAdmin === true ? children : <Navigate to="/Login"/>
  }

  const PrivateRoute = ({auth : {isAuthenticated}, children})=>{
    return isAuthenticated ? children : <Navigate to="/Login"/>;
  }
  return (
    <div className="App">
     
         <BrowserRouter>
         
      <Routes>
      <Route path="/" element={<PrivateRoute1><Home/></PrivateRoute1>}></Route>

        <Route path="/" element= {<PrivateRoute auth={{isAuthenticated: localStorage.getItem("isAuthenticated")}}> <Home /> </PrivateRoute>} >
          
          <Route index path="/" element={<Layout />} />
          <Route index path="/getAllMessages" element={<Contact/>} />

          <Route index path="/getAllArticles" element={<GetAllArticles/>} />
          <Route index path="/addArticles" element={<AddArticles />} />
          <Route index path="/updateArticles/:id" element={<UpdateArticles />} />

        
          <Route index path="/getAllOrders" element={<GetAllOrders/>} />
          <Route index path="/updateOrders/:id" element={<UpdateOrders/>} /> 
          
          {/* <Route index path="/getAllLiv" element={<GetAllLiv/>} />
          <Route index path="/addLiv" element={<AddLiv/>} />
          <Route index path="/updateLiv/:id" element={<UpdateLiv/>} />  */}

          <Route index path="/getAllServices" element={<GetAllServices/>} />
          <Route index path="/addService" element={<AddServices />} />
          <Route index path="/updateServices/:id" element={<UpdateServices />} />

          <Route index path="/getAllUsers" element={<GetAllUsers/>} />
          <Route index path="/UpdateUsers/:id" element={<UpdateUsers/>} />
        </Route>

        <Route path="/Login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Error404/>} />
        
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
