import React, { Component } from 'react'
import HeroAreaPage from '../parts/HeroAreaPage'

import { Link } from 'react-router-dom'
import  queryString  from 'query-string'
import equal from 'fast-deep-equal'
import { connect } from 'react-redux'

import { getSingleAd } from '../../actions/getSingleAdAction'
import RelatedAds from '../parts/RelatedAds'
const Entities = require('html-entities').XmlEntities

class SingleAd extends Component {
    state = {
        lang: localStorage.getItem("lang")  || "ru",
        favs: localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")) : [],
        entities: new Entities(),
        cat_id: queryString.parse(this.props.location.search).cat_id,
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
        const id = queryString.parse(this.props.location.search).id
        this.props.getSingleAd(id, this.state.lang)
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wpreactapp/v1/manage-views?id=${id}`, {method: 'POST'})
    }
    componentDidUpdate(prevProps){
        if(!equal(this.props.location.search, prevProps.location.search)){
        window.scrollTo(0,0)
        const id = queryString.parse(this.props.location.search).id
        this.props.getSingleAd(id, this.state.lang)
        fetch(`http://wptest.cmssites.hosty.by/wp-json/wpreactapp/v1/manage-views?id=${id}`, {method: 'POST'})
      }
      }
    addToFavs = (e) => {
        const { favs } = this.state
        const id = e.target.dataset.id
        if(!favs.includes(id)){
            favs.push(id)
            localStorage.setItem('favs', JSON.stringify(favs))
            e.target.classList.add('fav')
            alert(this.state.lang == 'en' ? `Added to your favourites` : `Добавлено в избранные`)
        }else{
            alert(this.state.lang == 'en' ? `You've already added to your favourites` : `Вы добавляли ранее`)
        }
    }
    render() {
        const { single } = this.props
        let { loading } = this.props
        const { favs } = this.state
        
        return (
            <div>
              <HeroAreaPage/>

              {(loading) ? (<img src="/808.gif" class="preloader" alt="preloader" />) : 
            Object.keys(single).length !== 0 ? <div className="section-padding">
    <div className="container">   
    <div className="product-info row"> 
                <div className="col-lg-7 col-md-12 col-xs-12">
            <div className="details-box ads-details-wrapper">
            <div id="owl-demo" className="">
            <div className="item">
            <div className="product-img">
            <img className="img-fluid" src={single.post_image_large} alt="product_image" />
            </div>
        <span className="price">${single.price}</span>
            </div>
            </div>
            </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
            <div className="details-box">
            <div className="icon">
                <i className={favs.includes(String(single.id)) ? `lni-heart fav` : `lni-heart`} onClick={this.addToFavs} data-id={single.id}></i>
            </div>
            <div className="ads-details-info">
        <h2>{this.state.entities.decode(single.title.rendered)}</h2>
        <p className="mb-2" style={{overflowWrap: "break-word"}}>{single.custom_excerpt}</p>
            
            <div className="details-meta">
        <span><i className="lni-alarm-clock"></i> {single.date.slice(0,10)}</span>
        <span><Link to={`/category?reg_id=${single.region}`}><i className="lni-map-marker"></i>{this.state.lang == 'ru' ? single.post_region[0] : this.state.regions[single.region]}</Link></span>
            <span><i className="lni-eye"></i> {single.viewsCounter} View</span>
            </div>
        <h4 className="title-small mb-3">{this.state.lang == 'en' ? `Specification:` : `Детали:`}</h4>
             <ul className="list-specification">
            {
            
            Object.keys(single.additional.value).map((key, index) => {
            return  single.additional.value[key] ? <li><i className="lni-check-mark-circle"></i> {single.additional.value[key]}</li> : `` 
            })}
            {/* <li><i className="lni-check-mark-circle"></i> 2.7 GHz dual-core Intel Core i5</li>
            <li><i className="lni-check-mark-circle"></i> Turbo Boost up to 3.1GHz</li>
            <li><i className="lni-check-mark-circle"></i> Intel Iris Graphics 6100</li>
            <li><i className="lni-check-mark-circle"></i> 8GB memory</li>
            <li><i className="lni-check-mark-circle"></i> 10 hour battery life</li>
            <li><i className="lni-check-mark-circle"></i> 13.3" Retina Display</li>
            <li><i className="lni-check-mark-circle"></i> 1 Year international warranty</li> */}
            </ul>
            </div>
            <ul className="advertisement mb-4">
            <li>
            <p>{single.post_category.map((category)=> {
                    return <Link to={`/category?cat_id=${category.term_id}`}><strong><i className="lni-folder"></i>{category.name}</strong> </Link>
                            })}</p>
            </li>
            <li>
                        <p><strong><i className="lni-archive"></i> {this.state.lang == `en` ? `Condition` : `Состояние`}:</strong> {single.condition}</p>
            </li>
            <li>
            </li>
            </ul>
            <div className="ads-btn mb-4">
                        <a href="#" className="btn btn-common btn-reply"><i className="lni-envelope"></i> {single.email}</a>
                        <a href="#" className="btn btn-common"><i className="lni-phone-handset"></i> {single.phone}</a>
            </div>
            {/* <div className="share">
            <span>Share: </span>
            <div className="social-link">
            <a className="facebook" href="#"><i className="lni-facebook-filled"></i></a>
            <a className="twitter" href="#"><i className="lni-twitter-filled"></i></a>
            <a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a>
            <a className="google" href="#"><i className="lni-google-plus"></i></a>
            </div>
            </div> */}
            </div>
            </div>
    </div>

        {/* description */}
        <div className="description-info">
    <div className="row">
    <div className="col-lg-8 col-md-6 col-xs-12">
    <div className="description">
        <h4>{this.state.lang == `en` ? 'Description' : `Описание`}</h4>
    <p style={{overflowWrap: "break-word"}}>{single.custom_excerpt}</p>

    </div>
    </div>
    <div className="col-lg-4 col-md-6 col-xs-12">
    {/* <div className="short-info">
    <h4>Short Info</h4>
    <ul>
    <li><a href="#"><i className="lni-users"></i> More ads by <span>User</span></a></li>
    <li><a href="#"><i className="lni-printer"></i> Print this ad</a></li>
    <li><a href="#"><i className="lni-reply"></i> Send to a friend</a></li>
    <li><a href="#"><i className="lni-warning"></i> Report this ad</a></li>
    </ul>
    </div> */}
    </div>
    </div>
    </div>
    </div>
    </div> : this.state.lang == `en` ? `Sorry, no items yet...` : `Пока нет данных...`}
    <RelatedAds cat_id={this.state.cat_id}/>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        single: state.single,
        loading: state.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSingleAd: (id, lang) => { dispatch(getSingleAd(id, lang)) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleAd)