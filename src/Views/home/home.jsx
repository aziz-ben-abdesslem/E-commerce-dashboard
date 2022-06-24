import React, { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { Link, Outlet } from "react-router-dom";
import LoginService from "../../Services/LoginService";

const Home = () => {
  const [data,setData]=useState({})

  const handleClick = (e)=>{
    e.preventDefault()
    LoginService.logout(data)
    .then(res=>{
    console.log(res)
    window.location="/Login"
    localStorage.clear()
    }).catch(error=>{
      console.log(error)
    })
    }
  return (
    <div>
      {/* START PAGE CONTAINER */}
      <div className="page-container">

        <Sidebar />

        {/* PAGE CONTENT */}
        <div className="page-content">
          {/* START X-NAVIGATION VERTICAL */}
          <ul className="x-navigation x-navigation-horizontal x-navigation-panel">
            {/* TOGGLE NAVIGATION */}
            <li className="xn-icon-button">
              <a href="#" className="x-navigation-minimize">
                <span className="fa fa-dedent" />
              </a>
            </li>

            <Header />

          </ul>
          <Outlet></Outlet>
        </div>

      </div>
      <div

        className="message-box animated fadeIn"
        data-sound="alert"
        id="mb-signout"
      >
        <div className="mb-container">
          <div className="mb-middle">
            <div className="mb-title">
              <span className="fa fa-sign-out" /> Se <strong>déconnecter</strong> ?
            </div>
            <div className="mb-content">
              <p>Êtes-vous sûr de vouloir vous déconnecter?</p>
              <p>
                Appuyez sur <strong>Non</strong> si vous souhaitez continuer à travailler.<br />
                Appuyez sur <strong>Oui</strong> pour déconnecter l'utilisateur actuel.
              </p>
            </div>
            <div className="mb-footer">
              <div className="pull-right">
                <button className="btn btn-success btn-lg" onClick={handleClick}>
                  Oui
                </button>
                <button className="btn btn-default btn-lg mb-control-close">
                  Non
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END MESSAGE BOX*/}
    </div>
  );
};

export default Home;

