import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.scss';


function Footer() {
    return (
        <div className="footer">
            <NavLink to={'/'} exact>
                <h2 className='home link'>home</h2>
            </NavLink> 
            <NavLink to={'about'} exact>
                <h2 className='about link'>about</h2>
            </NavLink>
            <NavLink to={'impressum'} exact>
                <h2 className='impressum link'>impressum</h2>
            </NavLink>      
        </div>  
    );
  }


export default Footer;

