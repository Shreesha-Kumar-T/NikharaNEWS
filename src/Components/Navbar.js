import React, { Component } from 'react'
import x from '../N.jpg'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/general">
              <img src={x} alt="Logo" width="50" height="54" className="d-inline-block align-text-top mx-3" />
              <strong style={{ color: "white", fontFamily: "cursive" }}>NikharaNEWS</strong>
            </a>
            <ul className="navbar-nav d-flex flex-row mb-3 p-2 m-2 me-auto mb-2 mb-1g-0">
              <li className="nav-item"><Link to="/general" className="nav-link mx-3" style={{ color: "white", fontFamily: "cursive" }}>General</Link></li>
              <li className="nav-item"><Link to="/business" className="nav-link mx-3" style={{ color: "white", fontFamily: "cursive" }}>Business</Link></li>
              <li className="nav-item"><Link to="/entertainment" className="nav-link mx-3" style={{ color: "white", fontFamily: "cursive" }}>Entertainment</Link></li>
              <li className="nav-item"><Link to="/health" className="nav-link mx-3" style={{ color: "white", fontFamily: "cursive" }}>Health</Link></li>
              <li className="nav-item"><Link to="/science" className="nav-link mx-3" style={{ color: "white", fontFamily: "cursive" }}>Science & Tech</Link></li>
              <li className="nav-item"><Link to="/sports" className="nav-link mx-3" style={{ color: "white", fontFamily: "cursive" }}>Sports</Link></li>
            </ul>
          </div>
        </nav >
      </div >
    )
  }
}

export default Navbar
