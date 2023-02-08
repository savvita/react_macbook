import './Macbook.css';
import nc from '../Macbook/norton.jpg';
import { useState } from 'react';

function Macbook(props) {
  const [power, setPower] = useState(false);

  function switchPower (){
    setPower(!power);
  }

  return (
    <div className="container">
        <div className="mac"></div>
        <div className={power ? "img img_on" : "img img_off"} style={{backgroundImage: props.src ? `url(${props.src})` : `url(${nc})`}}></div>
        <button className={power ? "btn btn_on" : "btn btn_off"} onClick={switchPower}></button>
    </div>
  );
}

export default Macbook;
