import React, { Component } from 'react'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import equal from 'fast-deep-equal'


import HeroAreaSmall from '../parts/HeroAreaSmall'
import Pagination from '../parts/Pagination'

import { connect } from 'react-redux'
import { getFav } from '../../actions/getFavouriteAddsAction'

const Entities = require('html-entities').XmlEntities

class FavouriteAdds extends Component{
    state = {
        lang: localStorage.getItem("lang")  || "ru",
        loading: false,
        ids: localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")).join() : "",
        entities: new Entities(),
        regions: {
            23: 'Minsk region',
            24: 'Brest region',
            25: 'Grodno region',
            26: 'Mogilev region',
            27: 'Gomel region',
            28: 'Vitebsk region'
        },
        currentPage: 1,
        postsPerPage: 4,
        indexOfLastPost: 4,
        indexOfFirstPost: 0
    }
    componentDidMount(){
        
        this.props.getFav(this.state.ids, this.state.lang)
    }
    removeFromFav = (e) => {
        e.preventDefault()
        const elem = e.target.closest('.featured-box')
        const id = e.target.dataset.id
        elem.parentNode.removeChild(elem)
        const favs = JSON.parse(localStorage.getItem("favs"))
        const index = favs.findIndex(item => item == id)
        favs.splice(index, 1)
        localStorage.setItem("favs", JSON.stringify(favs))
    }
    paginate = (pageNumber) => {
        window.scrollTo(0,0)
        this.setState({
            ...this.state,
            currentPage: pageNumber,
            indexOfLastPost: pageNumber * this.state.postsPerPage,
            indexOfFirstPost: (pageNumber * this.state.postsPerPage) - this.state.postsPerPage
        })
    }
    render(){
        let items = this.props.items.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
        const { loading } = this.props
        return(
            <React.Fragment>
            <HeroAreaSmall />
            <div id="list-view" className="tab-pane fade active show">
    <div className="row">
        {
            (loading) ? (
                <div style={{
                    display: "flex",
                    width: "100%",
                    height: "400px",
                    justifyContent: "center",
                    alignItems: "center"}}><img src="/808.gif" alt="preloader" className="preloader" /></div>
            ) : items.length ? items.map((item) => {
                return <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="featured-box">
                <figure>
                <div className="icon">
                <i className="lni-heart fav"></i>
                </div>
                <Link to={`/product?id=${item.id}&cat_id=${item.post_category[0].term_id}`}><img className="img-fluid" src={item.post_image} alt="image" /></Link>
                </figure>
                <div className="feature-content">
                <div className="product">
                {item.post_category.map((category)=> {
                    return <Link to={`/category?cat_id=${category.term_id}`}><i className="lni-folder"></i>{category.name} </Link>
                            })} 
                </div>
            <h4><Link to={`/product?id=${item.id}&cat_id=${item.post_category[0].term_id}`}>{this.state.entities.decode(item.title.rendered)}</Link></h4>
                <ul className="address">
                <li>
            <Link to={`/category?reg_id=${item.region}`}><i className="lni-map-marker"></i> {this.state.lang == 'ru' ? item.post_region[0] : this.state.regions[item.region]}</Link>
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
                        <a href="account-myads.html" onClick={this.removeFromFav} className="btn-verified float-right"><i className="lni lni-close"></i> {this.state.lang == 'en' ? `Remove from list` : `Удалить из списка`}</a>
                </div>
                </div>
                </div>
                </div>
            }) : <div style={{
                display: "flex",
                width: "100%",
                height: "400px",
                justifyContent: "center",
                alignItems: "center"}}>{this.state.lang == 'ru' ?  `Пока нет данных...` : `Sorry, no items yet...`}</div>
        }

    </div>
    <Pagination
                postsPerPage={this.state.postsPerPage}
                totalPosts={this.props.items.length}
                paginate={this.paginate}
            />
    </div>
    <br />
            </React.Fragment>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        items: state.favourites,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFav: (ids, lang) => { dispatch(getFav(ids, lang)) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavouriteAdds)