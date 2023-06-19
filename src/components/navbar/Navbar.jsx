import React, {useState} from 'react';
import { RiMenu3LIne, RiCloseLine } from 'react-icons/ri';
import './navbar.css'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
     <p><a href="#wgpt3">What is GPT3?</a></p>
     <p><a href="#possibility">Open AI</a></p>
     <p><a href="#features">Case Studies</a></p>
     <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
     <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo" />
      <div>
      <div className=:"gpt3__navbar-links_container">
      <Menu />
     <p><a href="#home">Home</a></p>
     <p><a href="#wgpt3">What is GPT3?</a></p>
     <p><a href="#possibility">Open AI</a></p>
     <p><a href="#features">Case Studies</a></p>
     <p><a href="#blog">Library</a></p>
      </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <divclassName="gpt3__navbar-menu"></div>
      {toggleMenu
      ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
      : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
      </div>
      }

      {toggleMenu && (
        <><div className="gpt3__navbar-menu_container scaleup-center"></div>
        <div className="gpt3__navbar-menu_container-links"></div>
        <Menu />
        <><div className="gpt3__navbar-menu_container-links-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
        </div>  
        )
      }
      </div>
    </div>
  )
}


default Navbar
