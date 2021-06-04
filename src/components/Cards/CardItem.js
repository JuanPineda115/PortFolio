import React, { useState, useEffect } from 'react';
import './Cards.sass'

function CardItem(props) {
  const [mobview, setmobview] = useState(false);
  const showButton = () => {
    if (window.innerWidth <= 1100) {
      setmobview(true);
    } else {
      setmobview(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <div className={mobview ? "" : "col-3"} >
      <li className='works-single' >
        <a className='works-item__link' href={props.path} target='_blank'>
          <figure className='works-item__pic-wrap' data-category={props.label}>
            <img
              className='works-item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='works-item__info'>
            <h5 className='works-item__text'>{props.text}</h5>
          </div>
        </a>
      </li>
    </div>
  );
}


export default CardItem;
