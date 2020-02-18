import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getItems } from '../../actions/getItemsAction'

const Entities = require('html-entities').XmlEntities

class RelatedAds extends Component {
  state = {
    lang: localStorage.getItem("lang")  || "ru",
    entities: new Entities(),
    regions: {
      23: 'Minsk region',
      24: 'Brest region',
      25: 'Grodno region',
      26: 'Mogilev region',
      27: 'Gomel region',
      28: 'Vitebsk region'
  },
  }
  componentDidMount(){
    this.props.getItems(this.props.cat_id, null, this.state.lang)
  }

  render() {
    const items = this.props.items.slice(0, 3)
    const { loading } = this.props
    return (
        <section className="featured-lis section-padding">
        <div className="container">
    <h3 className="section-title">{this.state.lang == 'en' ? `Featured Products` : `Похожие объявления`}</h3>
        <div className="row">
          {
            (loading) ? (<img src="/808.gif" class="preloader" alt="preloader" />) : items.length ? items.map(item => {
              return <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="product-item">
              <div className="carousel-thumb">
              <img className="img-fluid" src={item.post_image} alt="image" />
              <div className="overlay">
              </div>
              </div>
              <div className="product-content">
            <h3 className="product-title"><Link to={`/product?id=${item.id}&cat_id=${item.post_category[0].term_id}`}>{this.state.entities.decode(item.title.rendered)}</Link></h3>
              <p>Lorem ipsum dolor sit</p>
            <span className="price">$ {item.price}</span>
              <div className="meta">
              <span className="icon-wrap">
              <i className="lni-eye"></i>
              </span>
              <span className="count-review">
            <span>{item.viewsCounter}</span> Views
              </span>
              </div>
              <div className="card-text">
              <div className="float-left">
              <Link to={`/category?reg_id=${item.region}`}><i className="lni-map-marker"></i> {this.state.lang == 'ru' ? item.post_region[0] : this.state.regions[item.region]}</Link>
              </div>
              <div className="float-right">
              <div className="icon">
              <i className="lni-heart"></i>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
            }) : this.state.lang == 'en' ? `Sorry, no items yet...` : `Пока нет данных...` 
              
              
          }
        
        </div>
        </div>
        </section>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(RelatedAds)

