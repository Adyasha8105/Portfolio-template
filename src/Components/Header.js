import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header id="home">
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#footer">Contact</a></li>
            <li><a href="https://adyasha-mohanty.vercel.app/" className="button blog-button">Blog</a></li>
         </ul>
      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm Adyasha Mohanty</h1>
            <h3>I'm a web software developer and engineer by passion. I live in India. I learn by making (and breaking) things. I sleep at night sometimes and write #100daysOfCode.</h3>
            <hr />
            <ul className="social">
            <li><a href="https://www.facebook.com/Adyasha8105"><i className="fa fa-facebook"></i></a></li>
               <li><a href="https://www.linkedin.com/in/adyasha-mohanty-7a6254191/"><i className="fa fa-linkedin"></i></a></li>
               <li><a href="https://www.instagram.com/adyaa_08/"><i className="fa fa-instagram"></i></a></li>
               <li><a href="https://twitter.com/Adyasha8105"><i className="fa fa-twitter"></i></a></li>
               <li><a href="https://github.com/Adyasha8105"><i className="fa fa-github"></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
