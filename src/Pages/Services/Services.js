import React from 'react';
import Menu from '../../Menu';
import pasta from '../../images/pasta.jpg';
import pasta2 from '../../images/pasta2.jpg';
import pasta3 from '../../images/pasta3.jpg';

const Services = () => {
    return (
        <div>
            <Menu/>
          
            <section class="services-section">
        <div class="container">
            <div class="srv1 w-30 srv-carte">
            <img src={pasta} width="100%" height="auto" alt="rajae"/> 
                <h1>Pasta fruit de mer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mus.</p>
                <a href="#">Lire suite...</a>
            </div>
            <div class="srv2 w-30 srv-carte">
            <img src={pasta2} width="100%" height="auto" alt="rajae"/>
                <h1>Pasta al Tono</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mus.</p>
                <a href="#">Lire suite...</a>
            </div>
            <div class="srv3 w-30 srv-carte">
            <img src={pasta3} width="100%" height="auto" alt="rajae"/>
                <h1>Creamy Pasta</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mus.</p>
                <a href="#">Lire suite...</a>
            </div>
        </div>
    </section>

        </div>
    );
};

export default Services;