import React, { useState, useEffect } from 'react';
import { Myworks } from './worksData'
import CardItem from '../../Cards/CardItem'
import demo from '../../../../public/images/demoo.jpeg'

export default function Works() {return (
  <>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
      <div className='Myworks'>
        {/* <img className="BigScreen-image" src='https://wallpapersfortech.com/wp-content/uploads/2021/03/Aesthetic-Minimalist-Background.png'></img> */}
        <h1 className="works-intro">These are some of my projects</h1>
        <div className='works-container'>
          <div className='works-wrapper'>
            <ul className='row works-items'>
              {Myworks.map((item, index) => {
                return (
                  <CardItem
                    key={index}
                    src={item.src}
                    text={item.text}
                    label={item.label}
                    path={item.path}
                  />
                )
              }
              )}
              <CardItem
                key={10}
                src={demo}
                text="I also collaborated in this Ecommerce page demo, reading the products available in the page and writing orders using firebase firestore."
                label="React, firebase"
                path="https://proyecto2dev.stw-uvg.site/"
              />
            </ul>
          </div>
        </div>
    </div>
  </>

  );
}
