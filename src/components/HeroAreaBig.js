import React, { Component } from 'react';

class HeroAreaBig extends Component {
  render() {
    return (
        <div id="hero-area-two">
        <div className="overlay"></div>
        <div className="container">
        <div className="row d-flex justify-content-center">
        <div className="col-md-9 col-lg-9 col-xs-12 text-center">
        <div className="contents">
        <h1 className="head-title">Explore 12090 Ads or Start Posting</h1>
        <p>Buy And Sell Everything From Used Cars To Mobile Phones And Computers</p>
        <div className="search-two-form">
        <form className="search-two" action="">
        <div className="search-inner">
        <div className="row">
        <div className="col-lg-5 col-md-5">
        <div className="form-group search-query">
        <input type="text" name="query" className="form-control" placeholder="What are you looking for?" autoComplete="off" />
        <div className="search-suggestion">
        <div className="search-suggestion-items">
        <ul>
        <li><a href="#"><i className="lni-display"></i> Electronics</a></li>
        <li><a href="#"><i className="lni-tshirt"></i> Fashion</a></li>
        <li><a href="#"><i className="lni-mobile"></i> Mobiles</a></li>
        <li><a href="#"><i className="lni-paint-roller"></i> Services</a></li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-4">
        <div className="form-group search-location">
        <input type="text" name="location" className="form-control" placeholder="Location" autoComplete="off" />
        <i className="lni-target"></i>
        </div>
        </div>
        <div className="col-lg-3 col-md-3">
        <button className="btn btn-common search-two-submit" type="submit"><i className="lni-search"></i> Search</button>
        </div>
        </div>
        </div>
        </form>
        <div className="adverts-search-suggestion">
        <span className="search-suggestion-title">Popular Searchs</span>
        <div className="adverts-search-suggestion-items">
        <ul>
        <li><a href="#">Electronics</a></li>
        <li><a href="#">Fashion</a></li>
        <li><a href="#">Mobiles</a></li>
        <li><a href="#">Services</a></li>
        </ul>
        </div>
         </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default HeroAreaBig;
