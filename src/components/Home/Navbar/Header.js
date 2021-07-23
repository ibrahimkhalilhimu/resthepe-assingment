import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
    <nav className=" navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="/">
      <img style={{width:"44px",height:"66px"}} src="https://i.ibb.co/23ddmdV/Frame.png" alt="img" />
      <span className="pl-2 font-weight-bold">RASTHEPE</span>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item logInBtn">
        <a className="nav-link " href="/">Login</a>
      </li>
      <p className="middle">Or</p>
      <li className="nav-item logInBtn">
        <a className="nav-link" href="/">Register</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Header;