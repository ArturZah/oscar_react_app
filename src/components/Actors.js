import React from 'react'
import { ActorsData } from '../data/data';
import { Link } from 'react-router-dom';
import '../css/actors.css';

export default function Actors(props) {
  
  let actors = ActorsData.map((person) => {

      return (
        <div className="foto-tile">
          <Link to={`/actors/${person.url}`}>
            <div className="actor-img" style={{ backgroundImage: "url(" + person.img_src + ")"}}>

            </div>
          </Link>
          <h3 align="center">{ person.name }</h3>
        </div>
      );
  });

  return (
    <div>
      <div className="main-cnt">
        <div className="cnt">
          <div className="header-nav">
            <Link className="back-btn" to="/">Back</Link>
            <h2>{ props.title }</h2>
          </div>
          <div className="tiles-cnt">
            { actors }
          </div>
        </div>
      </div>
    </div>
  )
}