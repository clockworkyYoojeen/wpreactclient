import React, { Component } from 'react'

export default class WidgetTagCloud extends Component {
    render(){
        return(
            <div className="widget tag">
            <h4 className="widget-title">Tag Cloud</h4>
            <div className="tagcloud">
            <a style={{fontSize:30}} href="#"> fashion</a>
            <a href="#"> clothing</a>
            <a href="#"> trends</a>
            <a style={{fontSize:30}} href="#"> shoes</a>
            <a style={{fontSize:30}} href="#"> man fashion</a>
            <a href="#"> Sell Off</a>
            <a style={{fontSize:30}} href="#">tops</a>
            </div>
            </div>
        )
    }
}