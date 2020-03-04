import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        lang: localStorage.getItem("lang")  || "ru",
    }
    changeLang = (e) => {
      let lang = e.target.dataset.name;
      this.props.changeLang(lang)
  }
  handleMenu = () => {
    const menuToggler = document.querySelector('.mobile-toggler i')
    menuToggler.classList.toggle('lni-menu')
    menuToggler.classList.toggle('lni-close')

    const mobileMenu = document.querySelector('#mobileMenu')
    mobileMenu.classList.toggle('show')
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
          <div className="mobile-toggler">
              <i className="lni-menu" onClick={this.handleMenu}></i>
          </div>
                  <div className="mobile-menu-cont">
                  <ul id="mobileMenu">
        <li><i className="lni-check-mark-circle"></i>
        <Link onClick={this.handleMenu} className="active" to="/">
        {this.state.lang === 'ru' ? 'Главная' : "Home"}
        </Link>
        </li>
        <li><i className="lni-check-mark-circle"></i>
        <Link onClick={this.handleMenu} to="/about">{this.state.lang === 'ru' ? 'О нас' : "About Us"}</Link>
        </li>
        <li><i className="lni-check-mark-circle"></i>
        <Link onClick={this.handleMenu} to="/contact">
        {this.state.lang === 'ru' ? 'Контакты' : "Contacts"}
        </Link>
        </li>
        <li><i className="lni-check-mark-circle"></i>
        <span>{this.state.lang === 'ru' ? 'Язык' : "Language"}</span>
        <ul className="dropdown">
        <li><span className="dropdown-item" data-name="en" onClick={this.changeLang}>English</span></li>
        <li><span className="dropdown-item" data-name="ru" onClick={this.changeLang}>Russian</span></li>
        </ul>
        </li>
        <li><i className="lni-check-mark-circle"></i>
        <Link onClick={this.handleMenu} to="/favourite">{this.state.lang === 'ru' ? 'Избранные' : "My Favourite"}</Link>
        </li>
        <li><i className="lni-check-mark-circle"></i>
        <a href="http://wptest.cmssites.hosty.by/wp-login">{this.state.lang === 'ru' ? 'Объявление' : "Post an Add"}</a>
        </li>
        </ul>
        </div>
        <div className="container">
        
        <div className="navbar-header">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        <span className="lni-menu"></span>
        <span className="lni-menu"></span>
        <span className="lni-menu"></span>
        </button>
        <Link to="/" className="navbar-brand"><img src="assets/img/logo.png" alt="logo" /></Link>
        </div>
        <div className="collapse navbar-collapse" id="main-navbar">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown active">
        <Link  className="nav-link dropdown-toggle" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {this.state.lang === 'ru' ? 'Главная' : "Home"}
        </Link>
        </li>
        {/* <li className="nav-item">
        <Link className="nav-link" to="/ads">
        Categories
        </Link>
        </li> */}
        <li className="nav-item dropdown">
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/about" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {this.state.lang === 'ru' ? 'О нас' : "About Us"}
        </Link>
        {/* <div className="dropdown-menu">
        <a className="dropdown-item" href="about.html">About Us</a>
        <a className="dropdown-item" href="services.html">Services</a>
        <a className="dropdown-item" href="ads-details.html">Ads Details</a>
        <a className="dropdown-item" href="post-ads.html">Ads Post</a>
        <a className="dropdown-item" href="pricing.html">Packages</a>
        <a className="dropdown-item" href="testimonial.html">Testimonial</a>
        <a className="dropdown-item" href="faq.html">FAQ</a>
        <a className="dropdown-item" href="404.html">404</a>
        </div> */}
        </li>

        <li className="nav-item">
        <Link className="nav-link" to="/contact">
        {this.state.lang === 'ru' ? 'Контакты' : "Contacts"}
        </Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/blog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {this.state.lang === 'en' ? `Language ` : `Язык `}
      <img src={this.state.lang  === 'en' ? "/united-kingdom-flag-icon-32.png" : "/russia-flag-icon-32.png"} alt="flag" />
        </Link>
        <div className="dropdown-menu">
        <span className="dropdown-item" data-name="en" onClick={this.changeLang}>English</span>
        <span className="dropdown-item" data-name="ru" onClick={this.changeLang}>Russian</span>
        </div>
        </li>
        </ul>
        <ul className="sign-in">
        <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="/favourite" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="lni-user"></i> {this.state.lang === 'ru' ? 'Избранные' : "My Favourites"}</Link>
        {/* <div className="dropdown-menu">
        <a className="dropdown-item" href="account-profile-setting.html"><i className="lni-home"></i> Account Home</a>
        <a className="dropdown-item" href="account-myads.html"><i className="lni-wallet"></i> My Ads</a>
        <a className="dropdown-item" href="account-favourite-ads.html"><i className="lni-heart"></i> Favourite ads</a>
        <a className="dropdown-item" href="account-archived-ads.html"><i className="lni-folder"></i> Archived</a>
        <a className="dropdown-item" href="login.html"><i className="lni-lock"></i> Log In</a>
        <a className="dropdown-item" href="signup.html"><i className="lni-user"></i> Signup</a>
        <a className="dropdown-item" href="forgot-password.html"><i className="lni-reload"></i> Forgot Password</a>
        <a className="dropdown-item" href="account-close.html"><i className="lni-close"></i>Account close</a>
        </div> */}
        </li>
        </ul>
        <a className="tg-btn" href="http://wptest.cmssites.hosty.by/wp-login.php">
        <i className="lni-pencil-alt"></i> {this.state.lang === 'ru' ? 'Объявление' : "Post an Add"}
        </a>
        </div>
        </div>
        

        
        </nav>
    );
  }
}
