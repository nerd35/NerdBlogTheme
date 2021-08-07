import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo/logo.jpg'

const Header = () => {
    return (
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="#"><img src={Logo} alt="logo" className="logo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="mx-auto mb-2 navbar-nav mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">FAQ</Link>
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
