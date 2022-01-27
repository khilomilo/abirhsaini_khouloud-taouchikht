import React from 'react';


const Bld = (props) => {
  
    console.log(props.name);
    
    return (
    <div id={props.time}>  
        <div className='menu'>
            <span className='time'> {props.time} </span>
          </div> 
            <img className={props.time}  src={require(`../assets/image/${props.name}`)} alt="" />
            
            
        </div>
    );
};

export default Bld;