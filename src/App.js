import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/general" element={<News key="unique1" country={"in"} pagesize={9} category={"general"} />} />
            <Route exact path="/health" element={<News key="unique2" country={"in"} pagesize={9} category={"health"} />} />
            <Route exact path="/science" element={<News key="unique3" country={"in"} pagesize={9} category={"science"} />} />
            <Route exact path="/entertainment" element={<News key="unique4" country={"in"} pagesize={9} category={"entertainment"} />} />
            <Route exact path="/business" element={<News key="unique5" country={"in"} pagesize={9} category={"business"} />} />
            <Route exact path="/sports" element={<News key="unique6" country={"in"} pagesize={9} category={"sports"} />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
