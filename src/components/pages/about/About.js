import React, {useState, useEffect} from "react";
import './about.sass';
import CardItem from '../../Cards/CardItem';
import me from '../.././../../public/images/ME.jpeg'

const About = () => {
  const[mobview, setmobview] = useState(false)
  const viewType = () =>{
    if (window.innerWidth <= 960) {
      setmobview(true);
    } else {
      setmobview(false);
    }
  }

  useEffect(() => {
    viewType();
  }, []);

  window.addEventListener('resize', viewType);

  return (
    <div className='About'>
      <div className="About-container">
        {mobview ? 
          <div className="About-main">
            <div className="row">
              <img className="col-6 About-MyPhoto" src={me}></img>
              <h2 className="col-6">Hello, Im Juan Pablo Pineda</h2>
            </div>
            <div className="About-second">
              <h5 >
                My favorite programming language is Python for sure but I enjoy coding for the most
                part and languages. I was born and currently live in Guatemala City.
              </h5>
              <p classname="About-parragraph">
                I enjoy teamwork no matter the team as I also like a lot having challenges
                they help me to prove myself what I am made of, I'm always ready to take on new
                challenges and to get out of my comfort zone.
              </p>
            </div>
        </div> 
        : 
        <div className="row About-main">
          <img className="col-6 About-MyPhoto" src={me}></img>
          <div className="col-6 About-Allinfo">
            <h2 >Hello, Im Juan Pablo Pineda</h2>
            <h5 classname="About-second">
              A guatemalan Computer Science Engineerings student. My favorite programming 
              language is Python for sure but I enjoy coding for the most
              part and languages. I currently live in Guatemala and was born there too in 2001, yes I'm only 20 :D
            </h5>
            <h5 classname="About-parragraph">
              I enjoy teamwork,  having new challenges they help me to prove myself what I am made of, I'm always ready to take on new
              challenges and to get out of my comfort zone.
            </h5>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default About;
