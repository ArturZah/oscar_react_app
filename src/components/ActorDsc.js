import React from 'react';
import { Link } from 'react-router-dom';
import '../css/actors.css';

export default function ActorDsc(props) {

  return (
    <div>
      <div className="main-cnt">
        <div className="cnt">
          <div className="header-nav">
            <Link className="back-btn" to="/actors">Back</Link>
          </div>
          <div className="actor-dsc-ctn">
            <div className="image-profile" style={{ backgroundImage: "url(" + props.img + ")"}}></div>
            <h2>{ props.name }</h2>
            <p align="justify">{ props.dsc }</p>
          </div>
        </div>
      </div>
    </div>
  )
}