import React from 'react';
import './Random.css'

const Random = (props) => {
     
    return (
        <div className='choosen-phone'>
            <p>We Choose Apple {props.random.name} for you.</p>
            <img src={props.random.image} alt="" />
        </div>
    );
};

export default Random;