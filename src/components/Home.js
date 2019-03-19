import React from 'react'
import { HomeImg } from '../data/data';
import '../css/Home.css';

export default function Home(props) {
  const homeImgSrc = 'https://drraa3ej68s2c.cloudfront.net/wp-content/uploads/2019/02/24211315/0f4be43c4171da2bfcd53c97632fc0c8c1c86f858206393bcf7598f2b2ac6da7-770x443.jpg'

  let thumbnail = HomeImg.map((img) => {
    return (
      <div className="home-thumbnail" style={{ backgroundImage: "url(" + img.url + ")"}}></div>
    );
  });

  return (
    <div>
      <div className="main-cnt">
        <div className="cnt">
          <h2>{ props.title }</h2>
          <div className="home-img" style={{ backgroundImage: "url(" + homeImgSrc + ")"}}></div>
          <div className="thumbnail-cnt">
            { thumbnail }
          </div>
        </div>
      </div>
    </div>
  )
}