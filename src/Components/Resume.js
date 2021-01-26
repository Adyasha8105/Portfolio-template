import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var Experience = this.props.data.Experience.map(function(Experience){
        return <div key={Experience.company}><h3>{Experience.company}</h3>
            <p className="info">{Experience.title}<span>&bull;</span> <em className="date">{Experience.years}</em></p>
            <p className="newline">{Experience.description}</p>
        </div>
      })
      var Volunteer = this.props.data.Volunteer.map(function(Volunteer){
        return <div key={Volunteer.company}><h3>{Volunteer.company}</h3>
            <p className="info">{Volunteer.title}<span>&bull;</span> <em className="date">{Volunteer.years}</em></p>
            <p className="newline">{Volunteer.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
      var projectImage = 'images/tech/'+skills.image;
        return <div key={skills.name} className="columns feature-item">
                  <img className='skill' alt={skills.name} src={projectImage} />
                  <h5>{skills.name}</h5>
                  <p>{skills.description}</p>
               </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experience</span></h1>
         </div>

         <div className="nine columns main-col">
          {Experience}
        </div>
    </div>

    <div className="row work">

      <div className="three columns header-col">
       <h1><span>Volunteer</span></h1>
      </div>

      <div className="nine columns main-col">
       {Volunteer}
      </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Favorite Tech</span></h1>
         </div>

         <div>
           <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div>
				   <ul className="bgrid-quarters s-bgrid-thirds cf">
					  {skills}
					 </ul>
			  </div>
      </div>
   </section>
    );
  }
}

export default Resume;
