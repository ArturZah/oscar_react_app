import React from 'react'
import { ActressData } from '../data/data';
import { Link } from 'react-router-dom';
import '../css/actors.css';

export default function Actress(props) {
  
  let actress = ActressData.map((person) => {

      return (
        <div className="foto-tile">
          <a>
            <div className="actor-img" style={{ backgroundImage: "url(" + person.img_src + ")"}}>

            </div>
          </a>
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
            { actress }
          </div>
        </div>
      </div>
    </div>
  )
}