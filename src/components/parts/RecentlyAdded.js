import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRecentAds } from '../../actions/getRecentPostsAction'

class RecentlyAdded extends Component{
    state = {
        lang: localStorage.getItem("lang")  || "ru"
    }
    componentDidMount(){
        let { lang } = this.state
        this.props.getRecentAds(lang)
    }
    render(){
        const { lang } = this.state
        const { items } = this.props
        const { loading } = this.props
        return(
            <section className="featured section-padding bg-drack">
            <div className="container">
        <h2 className="section-title">{lang == 'ru' ? `свежие объявления` : `recently added`}</h2>
            <div className="row">
                {
                    loading ? (<img src="/808.gif" />) : items.length ? (items.map((item) => {
                return <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
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
                    <h4><Link to={`/product/${item.id}`}>{item.title.rendered}</Link></h4>
                        <ul className="address">
                        <li>
                    <Link to="/"><i className="lni-map-marker"></i> {item.post_region[0]}</Link>
                        </li>
                        <li>
                    <i className="lni-alarm-clock"></i> {item.date.slice(0,10)}
                        </li>
                        <li>
                    <Link to="/"><i className="lni-user"></i> {item.post_author}</Link>
                        </li>
                        <li>
                        {/* <Link to="/"><i className="lni-package"></i> Used</a> */}
                        </li>
                        </ul>
                        <div className="listing-bottom">
                    <h3 className="price float-left">${item.price}</h3>
                        {/* <a href="account-myads.html" className="btn-verified float-right"><i className="lni-check-box"></i> Verified Ad</a> */}
                        </div>
                        </div>
                        </div>
                        </div>
                    })) : lang == 'ru' ? `Пока нет данных...` : `Sorry, no items yet...`
                }
            </div>
            </div>
            </section>
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
        getRecentAds: (lang) => { dispatch(getRecentAds(lang)) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentlyAdded)