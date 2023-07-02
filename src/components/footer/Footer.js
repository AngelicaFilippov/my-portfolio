import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css';





function Footer() {
    return (
        
        <div className="Footer">
            <NavLink to={'/'} exact><h2 className='home link'>home</h2></NavLink> 
            <NavLink to={'about'} exact><h2 className='about link'>about</h2></NavLink>
            <NavLink to={'impressum'} exact><h2 className='impressum link'>impressum</h2></NavLink>      
        </div>
        
    );

    }

export default Footer;

{/*import { NavLink } from "react-router-dom";  

const NavUnlisted = styled.ul`

  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;


function Nav() {
  return (
    <NavUnlisted>
      <NavLink to="/" activeClassName="current" exact>
        <li>Home</li>
      </NavLink>
      <NavLink to="/about" activeClassName="current" exact>
        <li>About</li>
      </NavLink>
    </NavUnlisted>
  );
}*/}