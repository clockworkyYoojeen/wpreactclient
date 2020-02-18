import React, { Component } from 'react'

export default class HeroAreaPage extends Component {
    render(){
        return(
<div className="page-header header-small">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <div className="breadcrumb-wrapper">
        <h2 className="product-title">{this.props.pageTitle}</h2>
    {/* <ol className="breadcrumb">
    <li><a href="#">Home /</a></li>
    <li className="current">About Us</li>
    </ol> */}
    </div>
    </div>
    </div>
    </div>
    </div>
        )
    }
} 