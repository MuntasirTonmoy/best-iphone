import './Phones.css';
import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import PhoneSelection from '../PhoneSelection/PhoneSelection';

const Phones = () => {
    //get data by using useState and useEffect
    const [phones, setPhones] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);
    return (
        <div>
            <h2>This is phone section</h2>
            <Phone></Phone>
            <PhoneSelection></PhoneSelection>
        </div>
    );
};

export default Phones;