import React, { Component } from 'react';
import HeroAreaSmall from '../parts/HeroAreaSmall'
import WidgetSearch from '../widgets/WidgetSearch'
import WidgetRecentPosts from '../widgets/WidgetRecentPosts'
import WidgetCategories from '../widgets/WidgetCategories'
import WidgetTagCloud from '../widgets/WidgetTagCloud'
import WidgetAdvertisement from '../widgets/WidgetAdvertisement'
import HeroAreaPage from '../parts/HeroAreaPage'

export default class AboutUs extends Component {
  render() {
    return (
      <div> 
        <HeroAreaPage pageTitle="About Us" />

    
<div id="content" className="section-padding">
    <div className="container">
    <div className="row">
    <div className="col-lg-8 col-md-12 col-xs-12">
    
    <div className="blog-post single-post">
    
    <div className="post-thumb">
    <img className="img-fluid" src="assets/img/blog/blog1.jpg" alt="cool" />
    <div className="hover-wrap">
    </div>
    </div>
    
    
    <div className="post-content">
    <h2 className="post-title"><a href="single-post.html">Eum Iriure Dolor Duis Autem</a></h2>
    <div className="meta">
    <span className="meta-part"><a href="#"><i className="lni-user"></i> Clasihub</a></span>
    <span className="meta-part"><a href="#"><i className="lni-alarm-clock"></i> June 21, 2018</a></span>
    <span className="meta-part"><a href="#"><i className="lni-folder"></i> Sticky</a></span>
    <span className="meta-part"><a href="#"><i className="lni-comments-alt"></i> 1 Comments</a></span>
    </div>
    <div className="entry-summary">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi qui fuga quam hic possimus nihil iure assumenda odio at reprehenderit magni debitis cupiditate quidem nobis <strong>Helvetica</strong> repellendus doloribus, rerum aut in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repellat autem accusantium cupiditate animi consectetur. Beatae quia labore, sunt fugit accusantium. Deleniti excepturi ducimus error, ipsam voluptates eius sint odio!</p>
    <p>Lorem ipsum dolor sit amet, <strong>consectetuer</strong> adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. <strong>Investigationes</strong> demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram</p>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className="share-items">
    <ul className="list-inline">
    <li>Share : </li>
    <li className="fb-share"><i className="lni-facebook-filled"></i></li>
    <li className="tw-share"><a href="#"><i className="lni-twitter-filled"></i></a></li>
    <li className="gplus-share"><a href="#"><i className="lni-google-plus"></i></a></li>
    <li className="pinit-share"><a href="#"><i className="fa fa-pinterest"></i></a></li>
    </ul>
    </div>
    </div>
    
    </div>
    
    
    </div>
    
    <aside id="sidebar" className="col-lg-4 col-md-12 col-xs-12 right-sidebar">
    
      <WidgetSearch />
      <WidgetCategories />    
      <WidgetRecentPosts />
      <WidgetTagCloud />
      <WidgetAdvertisement />
    </aside>
    
    </div>
    </div>
    </div>
    </div>
    );
  }
}
