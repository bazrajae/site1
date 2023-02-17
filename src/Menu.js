import React from 'react';
import { NavLink } from 'react-router-dom';
  import"./Menu.css"
  

const Menu = () => {
    return (
        <div className='bbb' >
           
            <ul class="listes">
            {/* <NavLink to='/' className="items"> <li >Accueil</li></NavLink> */}
                <NavLink to='/site1' className="items"> <li >Accueil</li></NavLink>
                <NavLink to='/Portofolio' className="items"> <li >Portofolio</li></NavLink>
                <NavLink to='/Services' className="items"> <li >Services</li></NavLink>
                {/* <NavLink to='/Apropos' className="items"> <li>A propos</li></NavLink> */}
                <NavLink to='/Contact' className="items"> <li>Contact</li></NavLink>
            </ul>
        </div>
    );
};

export default Menu;