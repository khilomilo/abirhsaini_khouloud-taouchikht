import Navigation from '../component/navigation';
import "../style/index.scss"

const Home =()=>{
    return(
        <div className="home">
            <div className='header'>
            <Navigation />
            </div>
            <div className='h2'>
                
                    <div className="rectangle">
                        <p className="a">open time :</p>
                        <p className='ab'> Monday – Friday … 11 am – 3 pm <br /> Saturday … 11 am – <br /> 11 pm  sunday … 11 am – 12 pm</p>

                    </div>
                    <div className='rectangle2'>
                        <p> Quality Restaurant <br /> Fresh Food  <br /> Good Service</p>
                    </div>
                
            </div>
            
        </div>

    );
}
export default Home; 