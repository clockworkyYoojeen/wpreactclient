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
            <h4 className="widget-title">All Categories</h4>
            <ul className="categories-list">
            {
                (loading) ? (<img src="/808.gif" alt="preloader" class="preloader" />) : items.length ? items.map((item) => {
                return <li>
                <Link to={`/${item.id}`}>
                <i className={`${item.cat_icon}`}></i>
                {item.name} <span className="category-counter">(5)</span>
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
