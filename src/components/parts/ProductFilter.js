import React from 'react'

export default function ProductFilter() {
    return (
        <div className="product-filter">
        <div className="short-name">
        <span>Showing (1 - 12 products of 7371 products)</span>
        </div>
        <div className="Show-item">
        <span>Show Items</span>
        <form className="woocommerce-ordering" method="post">
        <label>
        <select name="order" className="orderby" defaultValue="49 items">
        <option  value="menu-order">49 items</option>
        <option value="popularity">popularity</option>
        <option value="popularity">Average ration</option>
        <option value="popularity">newness</option>
        <option value="popularity">price</option>
        </select>
        </label>
        </form>
        </div>
        <ul className="nav nav-tabs">
        <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#grid-view"><i className="lni-grid"></i></a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" data-toggle="tab" href="#list-view"><i className="lni-list"></i></a>
        </li>
        </ul>
        </div>
    )
}
