import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  queryString  from 'query-string'
import equal from 'fast-deep-equal'

import Pagination from './Pagination'

import { getItems } from '../../actions/getItemsAction'

class Items extends Component {
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
        currentPage: 1,
        postsPerPage: 4,
        indexOfLastPost: 4,
        indexOfFirstPost: 0
    }
    getResults = () => {
        this.props.changeLoading()
        let cat_id = queryString.parse(this.props.location.search).cat_id
        let reg_id = queryString.parse(this.props.location.search).reg_id           
        let lang = this.state.lang
        this.props.getItems(cat_id, reg_id, lang)
    }
    componentDidMount(){
        this.getResults()
    }
    componentDidUpdate(prevProps){
        if(!equal(this.props.location.search, prevProps.location.search)){
            this.getResults()
        }
    }
    paginate = (pageNumber) => {
        this.setState({
            ...this.state,
            currentPage: pageNumber,
            indexOfLastPost: pageNumber * this.state.postsPerPage,
            indexOfFirstPost: (pageNumber * this.state.postsPerPage) - this.state.postsPerPage
        })
    }
    render() {
        let items = this.props.items.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
        const { loading } = this.props
        return (
    <div className="adds-wrapper">
    <div className="tab-content">
    <div id="grid-view">
    <div className="row">
{
    (loading) ? (<img src="/808.gif" class="preloader" alt="preloader" />) : items.length ? items.map((item) => {
        return <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="featured-box">
        <figure>
        {/* <div className="icon">
        <i className="lni-heart"></i>
        </div> */}
        <Link to={`/product?id=${item.id}`}><img className="img-fluid" src={item.post_image} alt="image" /></Link>
        </figure>
        <div className="feature-content">
        <div className="product">
        {item.post_category.map((category)=> {
                    return <Link to={`/category?cat_id=${category.term_id}`}><i className="lni-folder"></i>{category.name} </Link>
                            })}
        </div>
    <h4><Link to={`/product?id=${item.id}`}>{item.title.rendered.replace("&#039;", "'")}</Link></h4>
        <ul className="address">
        <li>
        <Link to={`/category?reg_id=${item.region}`} ><i className="lni-map-marker"></i> {this.state.lang == 'ru' ? item.post_region[0] : this.state.regions[item.region]}</Link>
        </li>
        <li>
        <i className="lni-alarm-clock"></i> {item.date.slice(0,10)}
        </li>
        <li>
    <i className="lni-user"></i> {item.post_author}
        </li>
        <li>
        {/* <a href="#"><i className="lni-package"></i> Used</a> */}
        </li>
        </ul>
        <div className="listing-bottom">
    <h3 className="price float-left">${item.price}</h3>
        </div>
        </div>
        </div>
        </div>
    }) : this.state.lang == 'ru' ?  `Пока нет данных...` : `Sorry, no items yet...`
}    

    </div>
    </div>
            </div>
            <Pagination
                postsPerPage={this.state.postsPerPage}
                totalPosts={this.props.items.length}
                paginate={this.paginate}
            />
</div>
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
        getItems: (cat_id, reg_id, lang) => { dispatch(getItems(cat_id, reg_id, lang)) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Items)
