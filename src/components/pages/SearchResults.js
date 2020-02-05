import React, { Component } from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import equal from 'fast-deep-equal'


import HeroAreaSmall from '../parts/HeroAreaSmall'
import { connect } from 'react-redux'
import { getSearchRes } from '../../actions/getSearchResAction'

class SearchResults extends Component{
    state = {
        lang: localStorage.getItem("lang")  || "ru",
        loading: false,
        regions: {
            23: 'Minsk region',
            24: 'Brest region',
            25: 'Grodno region',
            26: 'Mogilev region',
            27: 'Gomel region',
            28: 'Vitebsk region'
        },
    }
    getResults = () => {
        window.scrollTo(0, 0)
        this.props.changeLoading()
        const lang = this.state.lang
        const cat_id = queryString.parse(this.props.location.search).cat_id
        const reg_id = queryString.parse(this.props.location.search).reg_id
        const search = queryString.parse(this.props.location.search).search

        this.props.getSearchRes(search, cat_id, reg_id, lang)
    }
    componentDidMount(){
        this.getResults()
    }
    componentDidUpdate(prevProps){
            this.getResults()            
    }
    render(){
        const { items } = this.props
        const { loading } = this.props
        return(
            <React.Fragment>
            <HeroAreaSmall />
            <div id="list-view" className="tab-pane fade active show">
    <div className="row">
        {
            (loading) ? (<img src="/808.gif" alt="preloader" className="preloader" style={{marginTop: 180, marginBottom: 180}}/>) : items.length ? items.map((item) => {
                return <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="featured-box">
                <figure>
                <div className="icon">
                <i className="lni-heart"></i>
                </div>
                <a href="#"><img className="img-fluid" src={item.post_image} alt="image" /></a>
                </figure>
                <div className="feature-content">
                <div className="product">
                {item.post_category.map((category)=> {
                    return <Link to={`/category?cat_id=${category.term_id}`}><i className="lni-folder"></i>{category.name} </Link>
                            })}
                </div>
            <h4><a href="ads-details.html">{item.title.rendered}</a></h4>
                <ul className="address">
                <li>
            <a href="#"><i className="lni-map-marker"></i> {this.state.lang == 'ru' ? item.post_region[0] : this.state.regions[item.region]}</a>
                </li>
                <li>
                <i className="lni-alarm-clock"></i> {item.date.slice(0,10)}
                </li>
                <li>
                <i className="lni-user"></i> {item.post_author}
                </li>
                <li>
                {/* <a href="#"><i className="lni-package"></i> Brand New</a> */}
                </li>
                </ul>
                <div className="listing-bottom">
            <h3 className="price float-left">${item.price}</h3>
                <a href="account-myads.html" className="btn-verified float-right"><i className="lni-check-box"></i> Verified Ad</a>
                </div>
                </div>
                </div>
                </div>
            }) : <div style={{paddingTop: 180, paddingBottom: 180}}>{this.state.lang == 'ru' ?  `Пока нет данных...` : `Sorry, no items yet...`}</div>
        }

    </div>
    </div>
            </React.Fragment>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        items: state.items,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchRes: (search, cat_id, reg_id, lang) => { dispatch(getSearchRes(search, cat_id, reg_id, lang)) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)