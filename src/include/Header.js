import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

export default function Header() {
  return (
    <header className="py-4 px-3 sticky-top bg-white shadow-sm">
      <div className="container">
        <div className="d-flex  align-items-center justify-content-between">
          <div className="logo ">
            <Link className="" to="/">
              <img src={logo} alt="logo"/>
            </Link>
          </div>
          <nav className="d-flex align-items-center d-none d-lg-block">
            <Link to="/About" className="px-3 py-1  text-decoration-none links text-dark">About</Link>
            <Link to="/Contact" className="px-3 py-1  text-decoration-none links text-dark">Contac us</Link>
          </nav>
          {/* <div className="menu d-block d-lg-none">menu</div> */}
        </div>
      </div>
    </header>
  );
}
