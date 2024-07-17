import React, { useEffect, useState } from 'react';
import logo from '../../images/twlogo.png';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
  Nav, 
  NavbarContainer,
  NavLogo, 
  NavIcon,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink 
} from './HeaderElements';


const Header = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >+ 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

const toggleHome = () => {
  scroll.scrollToTop();
};

  return (
    <>
    <IconContext.Provider value={{ color: '#e1affd' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'>
                  <NavIcon src={logo} onClick={toggleHome} />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  {/* <NavItem>
                    <NavLinks 
                      to='about'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80} 
                    >
                      About</NavLinks>
                  </NavItem>
                  <NavItem>
                  <NavLinks 
                      to='projects'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact='true'
                      offset={-80} 
                    >
                      Projects</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                    to='developers'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >
                    Developers</NavLinks>
                  </NavItem> */}
                  <NavItem>
                    <NavLinks 
                    to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                      Services</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to="/home" onClick={toggle}>Home</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Header;