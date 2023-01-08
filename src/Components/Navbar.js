import React, { Component } from 'react'
import x from '../N.jpg'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={x} alt="Logo" width="50" height="54" className="d-inline-block align-text-top mx-3" />
              <strong style={{ color: "white", fontFamily: "cursive" }}>NikharaNEWS</strong>
            </a>
          </div>
        </nav >
      </div >
    )
  }
}

export default Navbar
