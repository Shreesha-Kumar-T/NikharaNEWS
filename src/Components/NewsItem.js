import React, { Component } from 'react'

export default class
  extends Component {
  render() {
    let {title,description,imgurl,newsurl,date}=this.props;
    return (
      <div>
        <div className="card" style={{width: "auto", margin:"2rem"}}>
          <img src={imgurl==null?"https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png":imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">Date: {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer"href={newsurl} target="_blank"className="btn btn-dark">Read Complete NEWS</a>
            </div>
        </div>
      </div>
    )
  }
}