import React, { Component } from 'react'

export default class WidgetRecentPosts extends Component{
    render(){
        return(
            <div className="widget widget-popular-posts">
            <h4 className="widget-title">Recent Posts</h4>
            <ul className="posts-list">
            <li>
            <div className="widget-thumb">
            <a href="#"><img src="assets/img/blog/thumb1.jpg" alt="" /></a>
            </div>
            <div className="widget-content">
            <a href="#">Eum Iriure Dolor Duis Autem</a>
            <span><i className="icon-calendar"></i>June 21, 2018</span>
            </div>
            <div className="clearfix"></div>
            </li>
            <li>
            <div className="widget-thumb">
            <a href="#"><img src="assets/img/blog/thumb2.jpg" alt="" /></a>
            </div>
            <div className="widget-content">
            <a href="#">Consectetuer Adipiscing Elit</a>
            <span><i className="icon-calendar"></i>June 18, 2018</span>
            </div>
            <div className="clearfix"></div>
            </li>
            <li>
            <div className="widget-thumb">
            <a href="#"><img src="assets/img/blog/thumb3.jpg" alt="" /></a>
            </div>
            <div className="widget-content">
            <a href="#">Et Leggings Fanny Pack</a>
            <span><i className="icon-calendar"></i>June 17, 2018</span>
            </div>
            <div className="clearfix"></div>
            </li>
            <li>
            <div className="widget-thumb">
            <a href="#"><img src="assets/img/blog/thumb4.jpg" alt="" /></a>
            </div>
            <div className="widget-content">
            <a href="#">Exercitation Photo Booth</a>
            <span><i className="icon-calendar"></i>June 12, 2018</span>
            </div>
            <div className="clearfix"></div>
            </li>
            <li>
            <div className="widget-thumb">
            <a href="#"><img src="assets/img/blog/thumb5.jpg" alt="" /></a>
            </div>
            <div className="widget-content">
            <a href="#">Eum Iriure Dolor Duis Autem</a>
            <span><i className="icon-calendar"></i>June 9, 2018</span>
            </div>
            <div className="clearfix"></div>
            </li>
            </ul>
            </div>
        )
    }
}