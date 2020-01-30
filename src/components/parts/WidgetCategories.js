import React, { Component } from 'react'

export default class WidgetCategories extends Component {
    render() {
        return (
            <div className="widget categories">
            <h4 className="widget-title">All Categories</h4>
            <ul className="categories-list">
            <li>
            <a href="#">
            <i className="lni-dinner"></i>
            Hotel and Travels <span className="category-counter">(5)</span>
            </a>
            </li>
            <li>
            <a href="#">
            <i className="lni-control-panel"></i>
            Services <span className="category-counter">(8)</span>
            </a>
            </li>
            <li>
            <a href="#">
            <i className="lni-github"></i>
            Pets <span className="category-counter">(2)</span>
            </a>
            </li>
            <li>
            <a href="#">
            <i className="lni-coffee-cup"></i>
            Restaurants <span className="category-counter">(3)</span>
            </a>
            </li>
            <li>
            <a href="#">
            <i className="lni-home"></i>
            Real Estate <span className="category-counter">(4)</span>
            </a>
            </li>
            <li>
            <a href="#">
            <i className="lni-pencil"></i>
            Jobs <span className="category-counter">(5)</span>
            </a>
            </li>
            <li>
            <a href="#">
            <i className="lni-display"></i>
            Electronics <span className="category-counter">(9)</span>
            </a>
            </li>
            </ul>
            </div>
        )
    }
}
