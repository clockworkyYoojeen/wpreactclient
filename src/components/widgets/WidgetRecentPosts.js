import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRecentAds } from '../../actions/getRecentPostsAction'
const Entities = require('html-entities').XmlEntities

class WidgetRecentPosts extends Component{
    state = {
        lang: localStorage.getItem("lang")  || "ru",
        entities: new Entities(),
    }
    render(){
        const { lang } = this.state
        const { items }  = this.props
        const { loading } = this.props
        return(
            <div className="widget widget-popular-posts">
            <h4 className="widget-title">{lang == 'ru' ? `Свежие Объявления` : `Recent Posts`}</h4>
            <ul className="posts-list">
                {
                    loading ? (<img src="/808.gif" />) : items.length ? (items.map((item, i) => {
                        return <li key={i}>
                        <div className="widget-thumb">
                        <Link to={`/product/${item.id}`}><img className="img-fluid" src={item.post_image} alt="image" /></Link>
                        </div>
                        <div className="widget-content">
                        <Link to={`/product?id=${item.id}&cat_id=${item.post_category[0].term_id}`}>{this.state.entities.decode(item.title.rendered)}</Link>
                        <span><i className="icon-calendar"></i>{item.date.slice(0,10)}</span>
                        </div>
                        <div className="clearfix"></div>
                        </li>
                    })) : lang == 'ru' ? `Пока нет данных...` : `Sorry, no items yet...`
                }
            </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.recent,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getRecentAds: (lang) => { dispatch(getRecentAds(lang)) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WidgetRecentPosts)