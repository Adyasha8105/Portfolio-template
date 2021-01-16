import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src="././images/profile_pic.jpg" alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I'm a second-year IT undergraduate pursuing B.Tech and a passionate web developer, love to contribute to open-source projects, eager to expand my skills and learn as more as I move forward.
               I am proficient in Web development and have built various projects and work under many organizations.<br></br> Meanwhile I am passionate about solving problems related to Data structure and Algorithms. </p>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href="mailto:adyashamohanty8105@gmail.com" className="button button1" target="_blank"><i className="fa fa-envelope"></i>Get in Touch</a>
                     <a href="https://drive.google.com/uc?export=pdf&id=1JZ_9_koC-W0jVg39lGh8Jd0hwJzv8kqn" className="button button2" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
