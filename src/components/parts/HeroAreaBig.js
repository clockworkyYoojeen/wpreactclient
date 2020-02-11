import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class HeroAreaBig extends Component {
  state = {
    lang: localStorage.getItem('lang') || 'ru',
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
  render() {
    const { regions } = this.props
    const { categories } = this.props
    return (
        <div id="hero-area-two">
        <div className="overlay"></div>
        <div className="container">
        <div className="row d-flex justify-content-center">
        <div className="col-md-9 col-lg-9 col-xs-12 text-center">
        <div className="contents">
    <h1 className="head-title">{this.state.lang == 'en' ? `Explore 10000 Ads or Start Posting` : `Смотри 10000 Объявлений или Добавь Своё`}</h1>
    <p>{this.state.lang == 'en' ? `Buy And Sell Everything From Used Cars To Mobile Phones And Computers` : `Покупай и Продавай Всё, от Мобильников до Автомобилей`}</p>
        <div className="search-two-form">
        <form className="search-two" action="">
        <div className="search-inner">
        <div className="row">
        <div className="col-lg-5 col-md-5">
        <div className="form-group search-query">
        <input type="text" name="query" className="form-control" placeholder={this.state.lang == 'en' ? `What are you looking for?` : `Что искать?`} autoComplete="off" />
        </div>
        </div>
        <div className="col-lg-4 col-md-4">
        <div className="select">
        <select id="region-select" onChange={this.handleRegion}>
        <option value="">{this.state.lang === "en" ? `All locations` : `Все области`}</option>
        {regions.map((item, i) => {
              return <option value={item.id}>{this.state.lang === "ru" ? item.name : this.state.eng_regions[i]}</option>
      })}

        </select>
        </div>
        </div>
        <div className="col-lg-3 col-md-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Link className="btn btn-common" style={{color: '#fff'}} to={`/search?search=${this.state.search}&reg_id=${this.state.reg}&cat_id=${this.state.cat}`} ><i className="lni-search"></i> {this.state.lang === "en" ? `SEARCH` : `НАЙТИ`}</Link>

        </div>
        </div>
        </div>
        </form>
        <div className="adverts-search-suggestion">
        <span className="search-suggestion-title">{this.state.lang == 'en' ? `Popular Searchs` : `Популярные`}</span>
        <div className="adverts-search-suggestion-items">
        <ul>
    <li><Link to="/category?cat_id=2">{this.state.lang == 'en' ? `Electronics` : `Электроника`}</Link></li>
        <li><Link to="/category?cat_id=21">{this.state.lang == 'en' ? `Sportswear` : `Спортивная одежда`}</Link></li>
        <li><Link to="/category?cat_id=8">{this.state.lang == 'en' ? `Mobile` : `Мобильные`}</Link></li>
        </ul>
        </div>
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
      regions: state.regions,
      categories: state.categories,
      loading: state.loading
  }
}
export default connect(mapStateToProps)(HeroAreaBig);
