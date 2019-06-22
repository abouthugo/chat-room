import React from 'react';
import styles from "./Message.module.scss";

let config = {
  hour: 'numeric',
  minute: 'numeric'
};
let date = new Date(),
  time = date.toLocaleString('en-Us', config);

export default function MessagePresenter({ name, message }) {
  return (
    <div className={ styles.container }>
      <figure>
        <img src={ `https://ui-avatars.com/api/?name=${name}` } alt="avatar"/>
        { time }
      </figure>
      <div className={ styles.wrapper }>
        <div className={ styles.message }>
          { message }
        </div>
      </div>
    </div>
  );
}