import React from 'react';

const Random = (props) => {
    
    console.log(props);
     
    return (
        <div>
            {props.random.name}
            
        </div>
    );
};

export default Random;