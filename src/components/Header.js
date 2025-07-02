import React, {useState} from "react";
import  logo from "../assets/logo.png"
import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import {Bs0CircleFill, BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from "react-scroll";

const Header = () => {
const[nav, setNav] = useState(false)

const handleClick = () => setNav(!nav)


    return (
        
        <div className=" fixed w-full h-[80px] flex justify-between bg-[#0a192f] px-4 items-center text-gray-300">
        <div>
        <Link to="home" smooth={true} duration={500}  >
       <img alt="Logo " className="w-[80px] hover:cursor-pointer" src={logo} />
    </Link>
         
         
        </div>
       
        {/* Menu */}
        
          <ul className="hidden md:flex ">
            <li>
    <Link to="about" smooth={true} duration={500} className="hover-link" >
      À propos
    </Link>
            </li>
            <li>
    <Link to="skills" smooth={true} duration={500} className="hover-link" >
            Skills
    </Link>
              
              </li>
     {/*       <li>
    <Link to="about" smooth={true} duration={500}  >
            Réalisations
    </Link>
    </li> */}
            <li>
      <Link to="contact" smooth={true} duration={500} className="hover-link" >
            Contact
    </Link>
    </li>
          </ul>
        
  
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>
  
        {/* Mobile menu */}
        <ul className= {!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"} >
    <li  className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}  >
      À propos
            </Link>
    </li>
    <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}  >
            Skills
            </Link>
    </li>
         {/* <li className="py-6 text-4xl">Réalisations</li>*/}
    <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}  >
            Contact
            </Link>
    </li>
        </ul>

        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duratio-300 bg-blue-600" >
                    <a className="flex justify-between items-center w-full text-gray-300 " 
                      href="https://www.linkedin.com/in/emile-fourtan%C3%A9-124257233/" target="_blank" rel="noreferrer" >
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duratio-300 bg-[#3333]" >
                    <a className="flex justify-between items-center w-full text-gray-300 " 
                      href="https://github.com/MiloLaD" target="_blank" rel="noreferrer" >
                        Github <FaGithub size={30}/>
                    </a>
                </li>{/*
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duratio-300 bg-blue-600"
                
                >
                    <a className="flex justify-between items-center w-full text-gray-300 " 
                     href="/" >
                        Email <Bs0CircleFill size={30}/>
                    </a>
  </li>*/}
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duratio-300 bg-[#565f69]"
                  >
                    <a className="flex justify-between items-center w-full text-gray-300 " 
                      href="/CV_alternance2025_Emile.pdf" target="_blank" rel="noreferrer" >
                        CV <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>


            </ul>


        </div>
      </div>
    );
  };
  
  export default Header;
  
