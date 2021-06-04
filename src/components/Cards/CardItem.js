import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.sass'

function CardItem(props) {
  return (
    <>
      <li className='works-single'>
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
    </>
  );
}

export default CardItem;
