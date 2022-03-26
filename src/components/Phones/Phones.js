import './Phones.css';
import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import SelectedPhones from '../SelectedPhones/SelectedPhones';

const Phones = () => {
    
    //get data by using useState and useEffect
    
    const [phones, setPhones] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    }, []);

    const [cart, setCart] = useState([]);
    
    //passing the handler
    
    const handleAddToCart = (addedPhone) => {
        const newCart = [...cart, addedPhone];
       setCart(newCart);
    }

    const removeCart = (cart) => {
        cart = [];
        setCart(cart);
    }


    return (
        <div className='phones'>
            <div className='phones-container'>
                {
                    phones.map(phone => <Phone 
                        phone={phone} 
                        key={phone.id}
                        handleAddToCart={handleAddToCart}
                        ></Phone>)
                }
            </div>
            <div className='selected-phones-container'>
                <SelectedPhones 
                cart={cart}
                removeCart={removeCart}
                ></SelectedPhones>
            </div>
        </div>
    );
};

export default Phones;