import React, { Component } from 'react'

export default class WidgetSearch extends Component {
    render() {
        return (
    <div className="widget_search">
    <form role="search" id="search-form">
    <input type="search" className="form-control" autoComplete="off" name="s" placeholder="Search..." id="search-input" />
    <button type="submit" id="search-submit" className="search-btn"><i className="lni-search"></i></button>
    </form>
    </div>
        )
    }
}
