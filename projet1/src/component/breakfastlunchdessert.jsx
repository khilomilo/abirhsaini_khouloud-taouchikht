import React from 'react';


const Bld = (props) => {
  
    console.log(props.name);
    
    return (
        <div className='menu'>
            <span className='time'> {props.time} heeee</span>
            
            <img className='image' src={require(`../assets/image/${props.name}`)} alt="" />
            
            
        </div>
    );
};

export default Bld;