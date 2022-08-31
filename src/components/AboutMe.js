import React from 'react';
import me from '../images/headshot2.JPG';
import rig from '../images/oilrig.webp'

function AboutMe () {
    return (
        <section className="container">
          <div className="row align-items-center">

                <div className="card" style="width: 100%">
                  <div className="row">

                    <div className="col-4">
                  <img src={me} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h3 className="card-title text-center">Stephen Heinen</h3>
                    <p className="card-text text-center">Full-Stack Web Developer</p>
                    <p className="card-text text-center"><small className="text-white-30">JavaScript | React | HTML | CSS | APIs | NodeJS | Express | SQL</small></p>
                  </div>
                </div>
                
                <div className="col-8">
                <div className="card-body">
                  <h5 className="card-header text-center" id="aboutMe">About Me</h5>
                  <div className="card-body text-center">
                    <p className="card-text lh-lg">Hello! My name is Stephen Heinen. I am from San Antonio, Texas, and I am a recent graduate from the University of Arizona Full Stack Bootcamp.  I have a B.S. in Criminal Justice from Texas State University, and have spent the last five years in the oil and gas industry. I'm looking forward to the change in pace and the new challenges ahead!</p>
                    <img src={rig} className="card-img-top align-items-center" alt="..." style="width: 50%"/>
                  </div>
                </div>
              </div>
             </div>

            </div>
          </div>

        </section>
    )
}

export default AboutMe;