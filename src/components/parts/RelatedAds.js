import React, { Component } from 'react';
import { connect } from 'react-redux'


class RelatedAds extends Component {
  render() {
    return (
        <section className="featured-lis section-padding">
        <div className="container">
        <h3 className="section-title">Featured Products</h3>
        <div className="row">
        <div className="col-lg-4 col-md-6 col-xs-12">
        <div className="product-item">
        <div className="carousel-thumb">
        <img className="img-fluid" src="assets/img/product/img1.jpg" alt="" />
        <div className="overlay">
        </div>
        <div className="btn-product bg-yellow">
        <a href="#">New</a>
        </div>
        </div>
        <div className="product-content">
        <h3 className="product-title"><a href="ads-details.html">Apple Macbook Pro</a></h3>
        <p>Lorem ipsum dolor sit</p>
        <span className="price">$ 89.00</span>
        <div className="meta">
        <span className="icon-wrap">
        <i className="lni-star-filled"></i>
        <i className="lni-star-filled"></i>
        <i className="lni-star-filled"></i>
        <i className="lni-star"></i>
        <i className="lni-star"></i>
        </span>
        <span className="count-review">
        <span>1</span> Reviews
        </span>
        </div>
        <div className="card-text">
        <div className="float-left">
        <a href="#"><i className="lni-map-marker"></i> East 7th stree 98</a>
        </div>
        <div className="float-right">
        <div className="icon">
        <i className="lni-heart"></i>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-xs-12">
        <div className="product-item">
        <div className="carousel-thumb">
        <img className="img-fluid" src="assets/img/product/img2.jpg" alt="" />
        <div className="overlay">
        </div>
        </div>
        <div className="product-content">
        <h3 className="product-title"><a href="ads-details.html">Nikon D70 Camerar</a></h3>
        <p>Lorem ipsum dolor sit</p>
        <span className="price">$ 79.00</span>
        <div className="meta">
        <span className="icon-wrap">
        <i className="lni-star-filled"></i>
        <i className="lni-star-filled"></i>
        <i className="lni-star-filled"></i>
        <i className="lni-star"></i>
        <i className="lni-star"></i>
        </span>
        <span className="count-review">
        <span>1</span> Reviews
        </span>
        </div>
        <div className="card-text">
        <div className="float-left">
        <a href="#"><i className="lni-map-marker"></i> Drive Street, US</a>
        </div>
        <div className="float-right">
        <div className="icon">
        <i className="lni-heart"></i>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-4 col-md-6 col-xs-12">
        <div className="product-item">
        <div className="carousel-thumb">
        <img className="img-fluid" src="assets/img/product/img3.jpg" alt="" />
        <div className="overlay">
        </div>
        <div className="btn-product bg-red">
        <a href="#">Discount 50%</a>
        </div>
        </div>
        <div className="product-content">
        <h3 className="product-title"><a href="ads-details.html">Iphone X</a></h3>
        <p>Lorem ipsum dolor sit</p>
        <span className="price">$ 30.00</span>
        <div className="meta">
        <span className="icon-wrap">
        <i className="lni-star-filled"></i>
        <i className="lni-star-filled"></i>
        <i className="lni-star-filled"></i>
        <i className="lni-star"></i>
        <i className="lni-star"></i>
        </span>
        <span className="count-review">
         <span>1</span> Reviews
        </span>
        </div>
        <div className="card-text">
        <div className="float-left">
        <a href="#"><i className="lni-map-marker"></i> Louis, Missouri, US</a>
        </div>
        <div className="float-right">
        <div className="icon">
        <i className="lni-heart"></i>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    );
  }
}

export default connect(null,null)(RelatedAds)

