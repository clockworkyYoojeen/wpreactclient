import React from 'react'
import $ from 'jquery'
import './assets/css/slicknav.css' 
import './assets/js/jquery.slicknav.js'


import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/parts/Navbar'
import Home from './components/pages/Home'
import AdsPage from './components/pages/AdsPage'
import Footer from './components/parts/Footer'
import BlogPage from './components/pages/BlogPage'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'

export default class App extends React.Component{
  state = {
    lang: localStorage.getItem("lang")  || "ru"
  }
  componentDidMount(){
    this.headerHandle()
  }
  headerHandle(){
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 100) {
          $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
          $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
  });
  $('.mobile-menu').slicknav({
    prependTo: '.navbar-header',
    parentTag: 'liner',
    allowParentLinks: true,
    duplicate: true,
    label: '',
    closedSymbol: '<i class="lni-chevron-right"></i>',
    openedSymbol: '<i class="lni-chevron-down"></i>',
  });
  }
  changeLang = (lang) => {
    this.setState({
      ...this.state,
      lang: lang
    })
    localStorage.setItem("lang", lang)
    window.location.reload(true)
  }
  render(){
    return(
      <div>
        <header id="header-wrap">
<BrowserRouter>
<Navbar changeLang={this.changeLang} lang={this.state.lang} />
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/ads" component={AdsPage} />
<Route exact path="/blog" component={BlogPage} />
<Route exact path="/about" component={AboutUs} />
<Route exact path="/contact" component={Contact} />
</Switch>
</BrowserRouter>
        </header>
<Footer />
      </div>
    )
  }
}
