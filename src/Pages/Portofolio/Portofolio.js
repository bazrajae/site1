import React from 'react';
import Menu from '../../Menu';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Portofolio.css";
import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import p5 from '../../images/p5.jpg';
import p6 from '../../images/p6.jpg';
import p7 from '../../images/p7.jpg';
import p8 from '../../images/p8.jpg';
function App() {
    const responsive={
    superLargeDesktop:{
      breakpoint:{max: 4000, min:3000},
      items: 5
    },
    desktop:{
      breakpoint:{max: 3000, min:1024},
      items: 3
    },
    tablet:{
      breakpoint:{max: 1024, min:464},
      items: 2
    },
    mobile:{
      breakpoint:{max: 464, min:0},
      items: 1
    },
  
   };
   return (
    <div className="App">
     <Menu/>
      
      <Carousel responsive={responsive}>

            <div className='aaa'><img src={p1} alt="rajae"/> </div>
            <div className='aaa'><img src={p2}  alt="rajae"/> </div>
            <div className='aaa'><img src={p3}  alt="rajae"/></div> 
            <div className='aaa'><img src={p4}  alt="rajae"/> </div>
           <div className='aaa'> <img src={p5}  alt="rajae"/> </div>
           <div className='aaa'><img src={p6} alt="rajae"/> </div>
           <div className='aaa'><img src={p7}  alt="rajae"/> </div>
           <div className='aaa'><img src={p8}alt="rajae"/></div> 
        
        </Carousel>
    </div>
    );
};

export default App;