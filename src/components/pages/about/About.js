import React from "react";
import './about.sass';
import CardItem from '../../Cards/CardItem';

const About = () => {
  return (
    <div className='About'>
      <h1>About Me!</h1>
      <div className='About-container'>
        <div className='About-wrapper'>
          <ul className='About-items'>
            {abouts.map((data,index) =>{
              return(
                <CardItem key={index} label={data.data().Title} path='/'
                src={data.data().img} text={data.data().desc}/>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
