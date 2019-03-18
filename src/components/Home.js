import React from 'react'
import '../css/Home.css';

export default function Home(props) {
  return (
    <div>
      <div className="main-cnt">
        <div className="cnt">
          <h2>{ props.title }</h2>
          <div className="home-img"></div>
          <div className="thumbnail-cnt">
            <div className="home-thumbnail"></div>
            <div className="home-thumbnail"></div>
            <div className="home-thumbnail"></div>
          </div>
        </div>
      </div>
    </div>
  )
}