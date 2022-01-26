import React from 'react';
import ReactDOM  from 'react-dom';
import Input from '../component/input';
import Navigation from '../component/navigation';
import "../style/tout.scss"


const Reservation = () => {
    return (
        <div className='reservation'>
            <div className="a"> <Navigation  /></div>
           
            <div className="b"><Input  /></div>
            

            </div>
    );
};

ReactDOM.render(<Reservation />,document.getElementById("root.Reservation"))
export default Reservation;