import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>

     <div className="row" id="footer">
        <div className="twelve columns">
           <ul className="social-links">
               <li><a href="https://www.facebook.com/Adyasha8105"><i className="fa fa-facebook"></i></a></li>
               <li><a href="https://www.linkedin.com/in/adyasha-mohanty-7a6254191/"><i className="fa fa-linkedin"></i></a></li>
               <li><a href="https://www.instagram.com/adyaa_08/"><i className="fa fa-instagram"></i></a></li>
               <li><a href="https://twitter.com/Adyasha8105"><i className="fa fa-twitter"></i></a></li>
               <li><a href="https://github.com/Adyasha8105"><i className="fa fa-github"></i></a></li>
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020 <a title="Adyasha" href="!#">Adyasha Mohanty</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
