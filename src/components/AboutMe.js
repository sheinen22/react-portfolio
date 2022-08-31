import React from 'react';
import Me from '../images/headshot2.JPG';
import park from '../images/globelife.jpg'


function AboutMe () {
    return (
        <section className="container">
          <div className="row align-items-center">

                <div className="card" style={{width: "100%", marginTop: "2vh", backgroundColor: ''}}>
                  <div className="row">

                    <div className="col-4" style={{marginTop: "8vh", marginBottom: "8vh"}}>
                  <img src={Me} className="card-img-top" alt="..."/>
                </div>
                
                <div className="col-8">
                  <div className="card-body" style={{backgroundColor: "black", borderRadius: "50px", color: "white", marginTop: "8vh"}}>
                    <h5 className="card-header text-center">About Me</h5>
                    <div className="card-body text-center">
                      <p>Hi, my name is Stephen Heinen.  I am originally from Fort Worth, Texas, but recently moved down to San Antonio. I graduated from Texas State University with a B.S. in Criminal Justice, and I've spent the last five years in the oil and gas industry as a Regional Safety Manager. My two biggest hobbies are spots, especially baseball, and working out. I just graduated from the Full-Stack Web Development Bootcamp hosted by the University of Arizona.  I am excited for the change of pace, and eager to face the upcoming challenges!</p>
                    </div>
                </div>
                  <div className="col 8">
                    <img style={{maxWidth: "91vh", borderRadius: "50px", marginTop: "2vh"}} src={park}></img>
                  </div>
              </div>
             </div>

            </div>
          </div>

        </section>
    )
}

export default AboutMe;