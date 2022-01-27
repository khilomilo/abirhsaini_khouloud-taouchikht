import React from 'react';
import Navigation from '../component/navigation';
import Order1 from '../component/order1';
import "../style/tout.scss"

const Ordenonline1 = () => {
    const plat =[{id:1,image:"c.jpg",title :"Morning eggs",description:"Baked in a deeply savory mixture of cream, chard, and briny green olives. Sprinkle some toasted panko breadcrumbs to give it a little textural punch, and some salty feta. No sickly sweet sugar crash or carb coma to follow, but all the flavor, heartiness and satisfaction you love about a breakfast done right."}];
    var map = plat.map((items)=>{
        return <Order1 image={items.image} title={items.title} description={items.description} />

    })
    return (
        <div>

            <Navigation />
            <div className='order1'> {map}</div>
        </div>
    );
};

export default Ordenonline1;