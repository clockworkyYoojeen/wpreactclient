import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategoriesInfo } from '../../actions/categoriesInfoAction'

class CategoriesFront extends Component {
    state = {
        items: [],
        lang: localStorage.getItem("lang") || "ru"
    }
    componentDidMount(){
        let { lang } = this.state;
        this.props.getCategoriesInfo(localStorage.getItem("lang") || "ru")
    }
    render() {
        const { items } = this.props
        const { loading } = this.props
        return (
            <div>
    <section id="categories" className="section-padding bg-drack">
    {/* <img className="preloader" src="/808.gif" alt="preloader" /> */}
    <div className="container">
    <div className="row">
{
    (loading) ? (<img class="preloader" src="/808.gif" alt="preloader" />) : items.length ? items.map(item => {
    return <div className="col-lg-3 col-md-6 col-xs-12">
    <div className="category-box">
    <div className="icon">
    <i className={`${item.cat_icon}`}></i>
    </div>
    <div className="category-header">
    <h4>{item.name}</h4>
    </div>
    <div className="category-content">
    <ul>
    {item.children_info.map((elem) => {
    let arr = elem.split('/');
    return <li><Link to={`/category?cat_id=${arr[1]}`}>{arr[0]}</Link><span className="category-counter">({arr[2]})</span></li>
})}
    </ul>
    </div>
    </div>
    </div> 

    }) : this.state.lang = 'ru' ? `Пока нет данных...` : `Sorry, no data yet...`
}


    </div>
    </div>
    </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.categoriesInfo,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCategoriesInfo: (lang) => { dispatch(getCategoriesInfo(lang)) },
        changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesFront)
