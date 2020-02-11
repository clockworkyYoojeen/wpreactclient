import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import SearchResults from '../pages/SearchResults'

// import { getCategoriesInfo } from '../../actions/categoriesInfoAction'
// import { getRegions } from '../../actions/getRegionsAction'


class HeroAreaSmall extends Component {
  state = {
    lang: localStorage.getItem("lang") || "ru",
    search: '',
    reg: '',
    cat: '',
    eng_regions: [
      'Brest region',
      'Vitebsk region',
      'Gomel region',
      'Grodno region',
      'Minsk region',
      'Mogilev region'
  ]
  }
  componentDidMount(){
    let { lang } = this.state;
    // this.props.getRegions(lang)
    // this.props.getCategoriesInfo(lang)
}
  handleKeyword = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
  }
  handleRegion = (e) => {
    this.setState({
        ...this.state,
        reg: e.target.value
    })
}
handleCategory = (e) => {
    this.setState({
        ...this.state,
        cat: e.target.value
    })
}
// handleClick = (e) => {
//     e.preventDefault()
//     this.props.changeLoading()
//     this.props.history.push(`/search?search=${this.state.search}&reg_id=${this.state.reg}&cat_id=${this.state.cat}`)

// }
  render() {
    const { regions } = this.props
    const { categories } = this.props
    return (
        <div id="hero-area">
        <div className="overlay"></div>
        <div className="container">
        <div className="row">
        <div className="col-md-12 col-sm-12 text-center">
        <div className="contents-ctg">
        <div className="search-bar">
        <div className="search-inner">
        <form className="search-form">
        <div className="form-group inputwithicon">
        <i className="lni-tag"></i>
        <input onChange={this.handleKeyword} type="text" name="customword" className="form-control" placeholder={this.state.lang == 'en' ? `Enter product keyword` : `Что ищем`} />
        </div>
        <div className="form-group inputwithicon">
        <i className="lni-map-marker"></i>
        <div className="select">
        <select onChange={this.handleRegion}>
        <option value="">{this.state.lang === "en" ? `All locations` : `Все области`}</option>
        {regions.map((item, i) => {
              return <option value={item.id}>{this.state.lang === "ru" ? item.name : this.state.eng_regions[i]}</option>
      })}

        </select>
        </div>
        </div>
        <div className="form-group inputwithicon">
        <i className="lni-menu"></i>
        <div className="select">
        <select onChange={this.handleCategory}>
        <option value="">{this.state.lang === "en" ? `Select Categories` : `Выберите категорию`}</option>
        {categories.map((item, i) => {
            return <option value={item.id}>{item.name}</option>
        })}
        </select>
        </div>
        </div>
        <Link to={`/search?search=${this.state.search}&reg_id=${this.state.reg}&cat_id=${this.state.cat}`} className="btn btn-common" type="button"><i className="lni-search"></i> {this.state.lang === "en" ? `SEARCH` : `НАЙТИ`}</Link>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      categories: state.categories,
      regions: state.regions,
      loading: state.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      // getRegions: (lang) => { dispatch(getRegions(lang)) },
      // getCategoriesInfo: (lang) => { dispatch(getCategoriesInfo(lang)) },
      changeLoading: () => { dispatch({ type: 'CHANGE_LOADER', loading: true }) }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeroAreaSmall))
