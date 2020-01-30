import React, { Component } from 'react';

export default class BlogPage extends Component {
  render() {
    return (
<div>
<div className="page-header header-small">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <div className="breadcrumb-wrapper">
    <h2 className="product-title">Blog</h2>
    <ol className="breadcrumb">
    <li><a href="#">Home /</a></li>
    <li className="current">Blog</li>
    </ol>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    
    <div id="content" className="section-padding">
    <div className="container">
    <div className="row">
    <div className="col-lg-8 col-md-12 col-xs-12">
    
    <div className="blog-post">
    
    <div className="post-thumb">
    <a href="#"><img className="img-fluid" src="assets/img/blog/blog1.jpg" alt="" /></a>
    <div className="hover-wrap"></div>
    </div>
    
    
    <div className="post-content">
    <ul className="list-inline cat-meta">
    <li className="tr-cats"><a href="#">Blogging</a></li>
    </ul>
    <h2 className="post-title"><a href="single-post.html">Eum Iriure Dolor Duis Autem</a></h2>
    <div className="meta">
    <span className="meta-part"><a href="#"><i className="lni-user"></i> Clasihub</a></span>
    <span className="meta-part"><a href="#"><i className="lni-alarm-clock"></i> June 21, 2018</a></span>
    <span className="meta-part"><a href="#"><i className="lni-folder"></i> Sticky</a></span>
    <span className="meta-part"><a href="#"><i className="lni-comments-alt"></i> 1 Comments</a></span>
    </div>
    <div className="entry-summary">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis soluta libero molestiae, id reiciendis ipsum consequuntur odit sapiente accusantium odio. Esse nemo quos quaerat illo! Enim saepe impedit distinctio, placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum dolores mollitia consequatur velit, veritatis in pariatur ducimus numquam ipsa iusto! Rem eveniet dolorum, quisquam neque beatae quas ea tenetur!</p>
    </div>
    <a href="single-post.html" className="btn btn-common btn-rm">Read More</a>
     </div>
    
    </div>
    
    
    <div className="blog-post">
    
    <div className="post-thumb">
    <a href="#"><img className="img-fluid" src="assets/img/blog/blog2.jpg" alt="" /></a>
    <div className="hover-wrap"></div>
    </div>
    
    
    <div className="post-content">
    <ul className="list-inline cat-meta">
    <li className="tr-cats"><a href="#">Social</a></li>
    </ul>
    <h2 className="post-title"><a href="single-post.html">Consectetuer Adipiscing Elit</a></h2>
    <div className="meta">
    <span className="meta-part"><a href="#"><i className="lni-user"></i> Clasihub</a></span>
    <span className="meta-part"><a href="#"><i className="lni-alarm-clock"></i> June 21, 2018</a></span>
    <span className="meta-part"><a href="#"><i className="lni-folder"></i> Sticky</a></span>
    <span className="meta-part"><a href="#"><i className="lni-comments-alt"></i> 1 Comments</a></span>
    </div>
    <div className="entry-summary">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis soluta libero molestiae, id reiciendis ipsum consequuntur odit sapiente accusantium odio. Esse nemo quos quaerat illo! Enim saepe impedit distinctio, placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum dolores mollitia consequatur velit, veritatis in pariatur ducimus numquam ipsa iusto! Rem eveniet dolorum, quisquam neque beatae quas ea tenetur!</p>
    </div>
    <a href="single-post.html" className="btn btn-common btn-rm">Read More</a>
    </div>
    
    </div>
    
    
    <div className="blog-post quote-post">
    <div className="quote-wrap">
    <i className="fa fa-quote-left"></i>
    <blockquote className="text-center">
    Crafting visually stunning memorable experiences
    <br />
    for web and interfaces.
    </blockquote>
    <i className="fa fa-quote-right"></i>
    </div>
    </div>
    
    
    <div className="blog-post">
    
    <div className="post-thumb">
    <a href="#"><img className="img-fluid" src="assets/img/blog/blog3.jpg" alt="" /></a>
    <div className="hover-wrap"></div>
    </div>
    
    
    <div className="post-content">
    <ul className="list-inline cat-meta">
    <li className="tr-cats"><a href="#">Marketing</a></li>
    </ul>
    <h2 className="post-title"><a href="single-post.html">Et Leggings Fanny Pack</a></h2>
    <div className="meta">
    <span className="meta-part"><a href="#"><i className="lni-user"></i> Clasihub</a></span>
    <span className="meta-part"><a href="#"><i className="lni-alarm-clock"></i> June 21, 2018</a></span>
    <span className="meta-part"><a href="#"><i className="lni-folder"></i> Sticky</a></span>
    <span className="meta-part"><a href="#"><i className="lni-comments-alt"></i> 1 Comments</a></span>
    </div>
    <div className="entry-summary">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis soluta libero molestiae, id reiciendis ipsum consequuntur odit sapiente accusantium odio. Esse nemo quos quaerat illo! Enim saepe impedit distinctio, placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum dolores mollitia consequatur velit, veritatis in pariatur ducimus numquam ipsa iusto! Rem eveniet dolorum, quisquam neque beatae quas ea tenetur!</p>
    </div>
    <a href="single-post.html" className="btn btn-common btn-rm">Read More</a>
    </div>
    
    </div>
    
    
    <div className="blog-post video-post">
    
    {/* <div className="post-thumb">
    <div className="video-wrapper">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/qighCE8WfBk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    </div> */}
    
    
    <div className="post-content">
    <ul className="list-inline cat-meta">
    <li className="tr-cats"><a href="#">Video</a></li>
    </ul>
    <h2 className="post-title"><a href="single-post.html">Exercitation Photo Booth</a></h2>
    <div className="meta">
    <span className="meta-part"><a href="#"><i className="lni-user"></i> Clasihub</a></span>
    <span className="meta-part"><a href="#"><i className="lni-alarm-clock"></i> June 21, 2018</a></span>
    <span className="meta-part"><a href="#"><i className="lni-folder"></i> Sticky</a></span>
    <span className="meta-part"><a href="#"><i className="lni-comments-alt"></i> 1 Comments</a></span>
    </div>
    <div className="entry-summary">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis soluta libero molestiae, id reiciendis ipsum consequuntur odit sapiente accusantium odio. Esse nemo quos quaerat illo! Enim saepe impedit distinctio, placeat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate voluptatum dolores mollitia consequatur velit, veritatis in pariatur ducimus numquam ipsa iusto! Rem eveniet dolorum, quisquam neque beatae quas ea tenetur!</p>
    </div>
    <a href="single-post.html" className="btn btn-common btn-rm">Read More</a>
    </div>
    
    </div>
    
    
    <div className="pagination-bar">
    <nav>
    <ul className="pagination">
    <li className="page-item"><a className="page-link active" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">Next</a></li>
    </ul>
    </nav>
    </div>
    
    </div>
    
    <aside id="sidebar" className="col-lg-4 col-md-12 col-xs-12 right-sidebar">
    
    <div className="widget_search">
    <form role="search" id="search-form">
    <input type="search" className="form-control" autoComplete="off" name="s" placeholder="Search..." id="search-input"  />
    <button type="submit" id="search-submit" className="search-btn"><i className="lni-search"></i></button>
    </form>
    </div>
    
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
    <div className="widget">
    <h4 className="widget-title">Advertisement</h4>
    <div className="add-box">
    <img src="assets/img/img1.jpg" alt="" />
    </div>
    </div>
    </aside>
    
    </div>
    </div>
    </div>
</div>
    );
  }
}
