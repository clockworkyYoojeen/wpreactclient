import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { getCategoryPosts } from '../../actions/getCategoryPostsAction'

class Items extends Component {
    state = {
        lang: localStorage.getItem("lang")  || "ru"
    }
    componentDidMount(){
        let { lang } = this.state
        let cat_id = this.props.cat_id
        this.props.getCategoryPosts(cat_id, lang)
    }
    render() {
        const { items } = this.props
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
        <div className="icon">
        <i className="lni-heart"></i>
        </div>
        <Link to={`/product/${item.id}`}><img className="img-fluid" src={item.post_image} alt="image" /></Link>
        </figure>
        <div className="feature-content">
        <div className="product">
        {item.post_category.map((category)=> {
                    return <Link to={`/${category.term_id}`}><i className="lni-folder"></i>{category.name} </Link>
                            })}
        </div>
    <h4><a href="ads-details.html">{item.title.rendered}</a></h4>
        <ul className="address">
        <li>
        <a href="#"><i className="lni-map-marker"></i> {item.post_region[0]}</a>
        </li>
        <li>
        <i className="lni-alarm-clock"></i> {item.date.slice(0,10)}
        </li>
        <li>
    <a href="#"><i className="lni-user"></i> {item.post_author}</a>
        </li>
        <li>
        {/* <a href="#"><i className="lni-package"></i> Used</a> */}
        </li>
        </ul>
        <div className="listing-bottom">
    <h3 className="price float-left">{item.price}</h3>
        </div>
        </div>
        </div>
        </div>
    }) : this.state.lang == 'ru' ?  `Пока нет данных...` : `Sorry, no items yet...`
}    

    </div>
    </div>
            </div>
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
        getCategoryPosts: (cat_id, lang) => { dispatch(getCategoryPosts(cat_id, lang)) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Items)
