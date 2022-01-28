import Navigation from '../component/navigation';
import "../style/index.scss"
import "../style/breakfast.scss"
import Produit from '../component/produit';
import img1 from '../assets/image/Italian-Meatball-Soup-17.webp';
import img2 from '../assets/image/Quick_Easy_Chicken_Noodle_Soup_11.webp';
import img3 from '../assets/image/African-Peanut-Soup-11.webp';


import "@fontsource/zen-tokyo-zoo";
import "@fontsource/fanwood-text";

import React from "react";
const Dinner = () => {
    
    
   
    return ( 
        
        <div className="container-md ">
            <div>
            
            
        <Navigation />
        </div>
        <div class="container">
    <nav class="navbar navbar-expand-sm navbar-dark ">
        
        <strong class="brk">our dinner menu</strong>

        
       
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Soup <span class="sr-only"></span></a>
            <a class="nav-item nav-link" href="#">Pasta</a>
            <a class="nav-item nav-link" href="#">Pizza</a>
            
          </div>
        </div>
        
    </nav>
</div>
        <div className="plat1">
          <a className="photo1"><img className="photo" src={img1} alt="baked eggs " /></a>
          <p className="o"><strong>Italian Meatball Soups</strong> <br />
          soup + meatballs! A tomato-y broth, noodles and some mini Italian pork meatballs<br />
            <em>$23.00</em></p>
            
         
          
          
        </div>
        <div className="plat2">
          <a className="photo2"><img className='photo' src={img2} alt='granola' /></a>
          <p className="o"><strong>Quick and Easy Chicken Noodle Soup</strong><br />
          Chicken broth, veggies, some dried herbs.<br />
            <em>$25.00</em></p>
          <div>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star " />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
        </div>
        <div className="plat3">
          <a className="photo3"><img className="photo" src={img3} alt="raspberry-oatmeal-breakfast-bars " /></a>
          <p className="o"><strong>African Peanut Soup</strong><br />
          Fresh  ginger Jalapeno diced,  Tomato paste Canned crushed tomatoes .Sweet potatoes<br />
            <em>$19.00</em></p>
          <div>
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
          </div>
        </div>
        
        
        
      </div>
    

    );
};
export default Dinner;