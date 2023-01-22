import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  api=process.env.REACT_APP_NEWSAPI; 
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={100}
        onLoaderFinished={() => this.state.setProgress(0)}
      />
          <Routes>
            <Route exact path="/general" element={<News key="unique1" country={"in"} pagesize={9} category={"general"} apiKey={this.api}/>} />
            <Route exact path="/health" element={<News key="unique2" country={"in"} pagesize={9} category={"health"} apiKey={this.api}/>} />
            <Route exact path="/science" element={<News key="unique3" country={"in"} pagesize={9} category={"science"} apiKey={this.api}/>} />
            <Route exact path="/entertainment" element={<News key="unique4" country={"in"} pagesize={9} category={"entertainment"} apiKey={this.api}/>} />
            <Route exact path="/business" element={<News key="unique5" country={"in"} pagesize={9} category={"business"} apiKey={this.api}/>} />
            <Route exact path="/sports" element={<News key="unique6" country={"in"} pagesize={9} category={"sports"} apiKey={this.api}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
