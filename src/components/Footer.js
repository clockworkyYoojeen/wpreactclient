import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
        <footer>
    
        <section className="footer-Content">
        <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
        <div className="widget">
        <p className="footer-logo"><img src="assets/img/logo.png" alt="" /></p>
        <div className="textwidget">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis. Etiam euismod ornare elementum. Sed ex est, consectetur eget facilisis sed, auctor ut purus.</p>
        </div>
        </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
        <div className="widget">
        <h3 className="block-title">Latest Ads</h3>
        <ul className="media-content-list">
        <li>
        <div className="media-left">
        <img className="img-fluid" src="assets/img/art/img1.jpg" alt="" />
        <div className="overlay">
        <span className="price">$ 79</span>
        </div>
        </div>
        <div className="media-body">
        <h4 className="post-title"><a href="ads-details.html">Brand New Macbook Pro</a></h4>
        <span className="date">12 Jan 2018</span>
        </div>
        </li>
        <li>
        <div className="media-left">
        <img className="img-fluid" src="assets/img/art/img2.jpg" alt="" />
        <div className="overlay">
        <span className="price">$ 49</span>
        </div>
        </div>
        <div className="media-body">
        <h4 className="post-title"><a href="ads-details.html">Canon Photography Camera</a></h4>
        <span className="date">28 Mar 2018</span>
        </div>
        </li>
        </ul>
        </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
        <div className="widget">
        <h3 className="block-title">Help and Support</h3>
        <ul className="menu">
        <li><a href="#">Live Chat</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Purchase Protection</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Contact us</a></li>
        </ul>
        </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
        <div className="widget">
        <h3 className="block-title">Subscribe us</h3>
        <p className="text-sub">We have over 5 years of experience Our suppoer avalable to help you 24 hours a day, seven days week</p>
        <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
        <div className="form-group is-empty">
        <input type="email"  name="Email" className="form-control" id="EMAIL" placeholder="Email address" required="" />
        <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i className="lni-check-box"></i></button>
        <div className="clearfix"></div>
        </div>
        </form>
        <ul className="footer-social">
        <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
        <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
        <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </section>
        
        
        <div id="copyright">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
        <div className="site-info float-left">
        </div>
        <div className="float-right">
        <ul className="bottom-card">
        <li>
        <a href="#"><img src="assets/img/footer/card1.jpg" alt="card" /></a>
        </li>
        <li>
        <a href="#"><img src="assets/img/footer/card2.jpg" alt="card" /></a>
        </li>
        <li>
        <a href="#"><img src="assets/img/footer/card3.jpg" alt="card" /></a>
        </li>
        <li>
        <a href="#"><img src="assets/img/footer/card4.jpg" alt="card" /></a>
        </li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        </footer>
    );
  }
}
