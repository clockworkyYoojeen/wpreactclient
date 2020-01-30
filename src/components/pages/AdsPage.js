import React, { Component } from 'react';
import HeaderAreaSmall from '../parts/HeroAreaSmall'
import WidgetSearch from '../parts/WidgetSearch'
import WidgetCategories from '../parts/WidgetCategories';
import WidgetAdvertisement from '../parts/WidgetAdvertisement';
import ProductFilter from '../parts/ProductFilter';
import Items from '../parts/Items';
import Pagination from '../Pagination';

export default class Categories extends Component {
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
        <Items />
        <Pagination />
        </div>
    </div>
    </div>
    </div>
  </React.Fragment>
    );
  }
}
