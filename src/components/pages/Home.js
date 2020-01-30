import React, { Component } from 'react';
import HeroAreaBig from '../parts/HeroAreaBig'
import CategoriesFront from '../parts/CategoriesFront'
import RecentlyAdded from '../parts/RecentlyAdded'

export default class Home extends Component {
  render() {
    return (
      <div>
          <HeroAreaBig />
          <CategoriesFront />
          <RecentlyAdded />
            </div>
    );
  }
}
