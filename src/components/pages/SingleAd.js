import React, { Component } from 'react'
import HeroAreaPage from '../parts/HeroAreaPage'

import { Link } from 'react-router-dom'
import  queryString  from 'query-string'
import { connect } from 'react-redux'
import { getSingleAd } from '../../actions/getSingleAdAction'

class SingleAd extends Component {
    state = {
        lang: localStorage.getItem("lang")  || "ru",
        regions: {
            23: 'Minsk region',
            24: 'Brest region',
            25: 'Grodno region',
            26: 'Mogilev region',
            27: 'Gomel region',
            28: 'Vitebsk region'
        }
    }
    componentDidMount(){
        this.props.changeLoading()
        let id = queryString.parse(this.props.location.search).id
        this.props.getSingleAd(id, this.state.lang)
    }
    render() {
        // const { items } = this.props
        console.log(this.props)
        return (
            <div>
              <HeroAreaPage />

              <div className="section-padding">
    <div className="container">
    
    <div className="product-info row">
    <div className="col-lg-7 col-md-12 col-xs-12">
    <div className="details-box ads-details-wrapper">
    <div id="owl-demo" className="">
    <div className="item">
    <div className="product-img">
    <img className="img-fluid" src="assets/img/productinfo/img1.jpg" alt="" />
    </div>
    <span className="price">$1,550</span>
    </div>
    </div>
    </div>
    </div>
    <div className="col-lg-5 col-md-12 col-xs-12">
    <div className="details-box">
    <div className="ads-details-info">
    <h2>iMac Pro 2018 with 256 SSD and 8GB RAM</h2>
    <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum saepe suscipit debitis neque, laborum! Magni ducimus suscipit modi.</p>
    <div className="details-meta">
    <span><a href="#"><i className="lni-alarm-clock"></i> 7 Jan, 10:10 pm</a></span>
    <span><a href="#"><i className="lni-map-marker"></i> New York</a></span>
    <span><a href="#"><i className="lni-eye"></i> 299 View</a></span>
    </div>
    <h4 className="title-small mb-3">Specification:</h4>
     <ul className="list-specification">
    <li><i className="lni-check-mark-circle"></i> 256GB PCIe flash storage</li>
    <li><i className="lni-check-mark-circle"></i> 2.7 GHz dual-core Intel Core i5</li>
    <li><i className="lni-check-mark-circle"></i> Turbo Boost up to 3.1GHz</li>
    <li><i className="lni-check-mark-circle"></i> Intel Iris Graphics 6100</li>
    <li><i className="lni-check-mark-circle"></i> 8GB memory</li>
    <li><i className="lni-check-mark-circle"></i> 10 hour battery life</li>
    <li><i className="lni-check-mark-circle"></i> 13.3" Retina Display</li>
    <li><i className="lni-check-mark-circle"></i> 1 Year international warranty</li>
    </ul>
    </div>
    <ul className="advertisement mb-4">
    <li>
    <p><strong><i className="lni-folder"></i> Categories:</strong> <a href="#">Electronics</a></p>
    </li>
    <li>
    <p><strong><i className="lni-archive"></i> Condition:</strong> New</p>
    </li>
    <li>
    <p><strong><i className="lni-package"></i> Brand:</strong> <a href="#">Apple</a></p>
    </li>
    </ul>
    <div className="ads-btn mb-4">
    <a href="#" className="btn btn-common btn-reply"><i className="lni-envelope"></i> Email</a>
    <a href="#" className="btn btn-common"><i className="lni-phone-handset"></i> 01154256643</a>
    </div>
    <div className="share">
    <span>Share: </span>
    <div className="social-link">
    <a className="facebook" href="#"><i className="lni-facebook-filled"></i></a>
    <a className="twitter" href="#"><i className="lni-twitter-filled"></i></a>
    <a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a>
    <a className="google" href="#"><i className="lni-google-plus"></i></a>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    
    <div className="description-info">
    <div className="row">
    <div className="col-lg-8 col-md-6 col-xs-12">
    <div className="description">
    <h4>Description</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
    </div>
    <div className="col-lg-4 col-md-6 col-xs-12">
    <div className="short-info">
    <h4>Short Info</h4>
    <ul>
    <li><a href="#"><i className="lni-users"></i> More ads by <span>User</span></a></li>
    <li><a href="#"><i className="lni-printer"></i> Print this ad</a></li>
    <li><a href="#"><i className="lni-reply"></i> Send to a friend</a></li>
    <li><a href="#"><i className="lni-warning"></i> Report this ad</a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    
    </div>
    </div>
    
    
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        single: state.single,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleAd: () => { dispatch(getSingleAd()) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleAd)