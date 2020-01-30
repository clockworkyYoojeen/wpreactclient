import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        lang: localStorage.getItem("lang")  || "ru"
    }
    changeLang = (e) => {
      let lang = e.target.name;
      this.props.changeLang(lang)
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
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
        <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Home
        </Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/ads">
        Categories
        </Link>
        </li>
        <li className="nav-item dropdown">
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/about" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        About Us
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
        Contact
        </Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/blog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Language
        </Link>
        <div className="dropdown-menu">
        <span className="dropdown-item" name="en" onClick={this.changeLang}>English</span>
        <span className="dropdown-item" name="ru" onClick={this.changeLang}>Russian</span>
        </div>
        </li>
        </ul>
        <ul className="sign-in">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="lni-user"></i> My Account</a>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="account-profile-setting.html"><i className="lni-home"></i> Account Home</a>
        <a className="dropdown-item" href="account-myads.html"><i className="lni-wallet"></i> My Ads</a>
        <a className="dropdown-item" href="account-favourite-ads.html"><i className="lni-heart"></i> Favourite ads</a>
        <a className="dropdown-item" href="account-archived-ads.html"><i className="lni-folder"></i> Archived</a>
        <a className="dropdown-item" href="login.html"><i className="lni-lock"></i> Log In</a>
        <a className="dropdown-item" href="signup.html"><i className="lni-user"></i> Signup</a>
        <a className="dropdown-item" href="forgot-password.html"><i className="lni-reload"></i> Forgot Password</a>
        <a className="dropdown-item" href="account-close.html"><i className="lni-close"></i>Account close</a>
        </div>
        </li>
        </ul>
        <a className="tg-btn" href="post-ads.html">
        <i className="lni-pencil-alt"></i> Post An Ad
        </a>
        </div>
        </div>
        
        <ul className="mobile-menu">
        <li>
        <a className="active" href="index.html">
        Home
        </a>
        <ul className="dropdown">
        <li><a href="index.html">Home 1</a></li>
        <li><a href="index-2.html">Home 2</a></li>
        <li><a className="active" href="index-3.html">Home 2</a></li>
        </ul>
        </li>
        <li>
        <a href="category.html">Categories</a>
        </li>
        <li>
        <a href="#!">
        Listings
        </a>
        <ul className="dropdown">
        <li><a href="adlistinggrid.html">Ad Grid</a></li>
        <li><a href="adlistinglist.html">Ad Listing</a></li>
        <li><a href="ads-details.html">Listing Detail</a></li>
        </ul>
        </li>
        <li>
        <a href="#!">Pages</a>
        <ul className="dropdown">
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="ads-details.html">Ads Details</a></li>
        <li><a href="post-ads.html">Ads Post</a></li>
        <li><a href="pricing.html">Packages</a></li>
        <li><a href="testimonial.html">Testimonial</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="404.html">404</a></li>
        </ul>
        </li>
        <li>
        <a href="blog.html">Blog</a>
        <ul className="dropdown">
        <li><a href="blog.html">Blog - Right Sidebar</a></li>
        <li><a href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
        <li><a href="blog-grid-full-width.html"> Blog full width </a></li>
        <li><a href="single-post.html">Blog Details</a></li>
        </ul>
        </li>
        <li>
        <a href="contact.html">Contact Us</a>
        </li>
        <li>
        <a>My Account</a>
        <ul className="dropdown">
        <li><a href="account-profile-setting.html"><i className="lni-home"></i> Account Home</a></li>
        <li><a href="account-myads.html"><i className="lni-wallet"></i> My Ads</a></li>
        <li><a href="account-favourite-ads.html"><i className="lni-heart"></i> Favourite ads</a></li>
        <li><a href="account-archived-ads.html"><i className="lni-folder"></i> Archived</a></li>
        <li><a href="login.html"><i className="lni-lock"></i> Log In</a></li>
        <li><a href="signup.html"><i className="lni-user"></i> Signup</a></li>
        <li><a href="forgot-password.html"><i className="lni-reload"></i> Forgot Password</a></li>
        <li><a href="account-close.html"><i className="lni-close"></i>Account close</a></li>
        </ul>
        </li>
        </ul>
        
        </nav>
    );
  }
}
