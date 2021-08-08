import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../assets/images/logo/logo.jpg'

const Header = () => {
    return (
        <nav className="mb-5 shadow-sm navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src={Logo} alt="logo" className="logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="mx-auto mb-2 navbar-nav mb-lg-0">
        <li className="mb-2 nav-item">
          <NavLink className="nav-link " activeClassName="active" to="/" exact>Home</NavLink>
        </li>
        <li className="mb-2 nav-item">
          <NavLink className="nav-link" to="/blog" activeClassName="active" >Blog</NavLink>
        </li>
        <li className="mb-2 nav-item">
          <NavLink className="nav-link" to="/single_post" activeClassName="active">Single Post</NavLink>
        </li>
        <li className="mb-2 nav-item">
          <NavLink className="nav-link" to="/login" activeClassName="active">Login</NavLink>
        </li>
        <li className="mb-2 nav-item">
          <NavLink className="nav-link" to="/register" activeClassName="active">Register</NavLink>
        </li>
        <li className="mb-2 nav-item">
          <NavLink className="nav-link" to="/not_found" activeClassName="active">Not Found</NavLink>
        </li>
      </ul>
      <ul className="mb-2 ms-auto navbar-nav mb-lg-0 ">
          <li  className="d-none d-lg-block d-inline">
              <Link className="social-icons" to="#">
              <i class="fab fa-facebook-f"></i>
              </Link>
          </li>
         <li  className="d-none d-lg-block d-inline">
              <Link className="social-icons"  to="#">
              <i class="fab fa-twitter"></i>
              </Link>
          </li>
         <li  className="d-none d-lg-block d-inline">
              <Link className="social-icons"  to="#">
              <i class="fab fa-instagram"></i>
              </Link>
          </li>
         <li  className="d-none d-lg-block d-inline">
              <Link className="social-icons"  to="#">
              <i class="fab fa-youtube"></i>
              </Link>
          </li>
          <li  className="d-none d-lg-block d-inline">
              <Link className="social-icons" to="#">
              <i class="fab fa-whatsapp"></i>
              </Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header
