import React, { Component } from 'react'

export default class WidgetAdvertisement extends Component {
    state = {
        lang: localStorage.getItem("lang") || "ru"
    }
    render() {
        return (
            <div className="widget">
            <h4 className="widget-title">{this.state.lang === 'ru' ? 'Реклама' : "Advertisement"}</h4>
            <div className="add-box">
            <img className="img-fluid" src="assets/img/img1.jpg" alt="advertisement" />
            </div>
            </div>
        )
    }
}
