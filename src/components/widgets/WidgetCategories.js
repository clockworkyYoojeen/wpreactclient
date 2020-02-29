import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategories } from '../../actions/getCategoriesAction'

class WidgetCategories extends Component {
    state = {
        lang: localStorage.getItem("lang") || "ru"
    }
    componentDidMount(){
        let { lang } = this.state;
        this.props.getCategories(lang)
    }
    render() {
        const { items } = this.props
        const { loading } = this.props
        return (
            <div className="widget categories">
            <h4 className="widget-title">{this.state.lang == 'ru' ? 'Все Категории' : "All Categories"}</h4>
            <ul className="categories-list">
            {
                (loading) ? (<img src="/808.gif" alt="preloader" className="preloader" />) : items.length ? items.map((item, i) => {
                return <li key={i}>
                <Link to={`/category?cat_id=${item.id}`}>
                <i className={`${item.cat_icon}`}></i>
                {item.name} <span className="category-counter">({item.posts_num})</span>
                </Link>
                </li> 
                }) : this.state.lang == 'ru' ? `Пока нет данных...` : `Sorry, no items yet...` 
            }
            </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.categories,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: (lang) => { dispatch(getCategories(lang)) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WidgetCategories)
