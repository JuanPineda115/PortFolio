import React from 'react';
import {Myworks} from './worksData'
import CardItem from '../../Cards/CardItem'

export default function Works() {
  return (
    <div className='Myworks'>
      <h1 className="works-intro">These are some of my projects</h1>
      <div className='works-container'>
        <div className='works-wrapper'>
          <ul className='works-items'>
            {Myworks.map((item,index) =>{
              return(
              <CardItem
                key={index}
                src={item.src}
                text={item.text}
                label={item.label}
                path={item.path}
              />
              )}
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
