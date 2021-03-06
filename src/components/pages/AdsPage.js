import React, { Component } from 'react';
import HeaderAreaSmall from '../parts/HeroAreaSmall'
import WidgetSearch from '../widgets/WidgetSearch'
import WidgetCategories from '../widgets/WidgetCategories';
import WidgetAdvertisement from '../widgets/WidgetAdvertisement';
import ProductFilter from '../parts/ProductFilter';
import Items from '../parts/Items';

export default class Categories extends Component {
  state = {
    cat_id: this.props.match.params.cat_id
  }
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
  <React.Fragment>
    <HeaderAreaSmall />
    <div className="main-container section-padding">
    <div className="container">
    <div className="row">
    <div className="col-lg-3 col-md-12 col-xs-12 page-sidebar">
<aside>
  <WidgetSearch />
  <WidgetCategories />
  <WidgetAdvertisement />
</aside>
      </div>
      {/* end sidebar */}
    
      {/* main content */}
      <div className="col-lg-9 col-md-12 col-xs-12 page-content">
        <ProductFilter />
        <Items cat_id={this.state.cat_id} location={this.props.location} />
        </div>
    </div>
    </div>
    </div>
  </React.Fragment>
    );
  }
}
