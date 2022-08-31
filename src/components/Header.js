import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header className='header' style={{backgroundColor: "darkgrey"}}>
            <nav className="navbar navbar-expand-lg text-white">
            <div className="container-fluid">
              <div>

                <h1 className="navbar-nav me-auto" style={{paddingBottom: "15", fontSize: "50"}}>Stephen Heinen</h1>
        
                <div>
                  <ul className="navbar-nav">
                    <li>
                      <Link className="text-white" aria-current="page" to="/AboutMe" style={{fontSize: "20", margin: "1vh"}}>About Me</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="text-white" aria-current="page" to="/Portfolio" style={{fontSize: "20", margin: "1vh"}}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="text-white" aria-current="page" to="/Contact" style={{fontSize: "20", margin: "1vh"}}>Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="text-white" aria-current="page" to="/Resume" style={{fontSize: "20", margin: "1vh"}}>Resume</Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </nav>
        </header>
    )
}

export default Header;