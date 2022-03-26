import React from 'react';
import './Random.css'

const Random = (props) => {
     
    return (
        <div className='choosen-phone'>
            <img src={props.random.image} alt="" />
            <h3>{props.random.name}</h3>
        </div>
    );
};

export default Random;