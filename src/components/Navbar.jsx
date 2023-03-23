import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { coat_of_arms, au_icon } from "../assets";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 z-20`}
    >
      <div className='w-full flex justify-between items-center max-w-7-xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={coat_of_arms}
            alt='logo'
            className='w-[4em] h-auto object-contain'
          />
          <div className='w-[1px] h-10 element-bg'></div>
          <img
            src={au_icon}
            alt='logo'
            className='w-[4em] h-auto object-contain'
          />
          &nbsp;
          <p className='text-white text-[18px] font-bold font-poppins cursor-pointer flex flex-col'>
            Africa Climate&nbsp;
            <span className='sm:block hidden'>
              Summit&#44; <span className='font-poppins font-extralight'>2023</span>
            </span>
          </p>
        </Link>
        <ul className={`${isOpen ? "open" : "close"} list-none hidden sm:flex flex-row gap-5 navbar-menu`}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-yellow" : "text-primary"
              } hover:text-yellow text-[1rem] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
              
        <Hamburger
        duration={0.3}
        toggled={isOpen}
        toggle={setIsOpen}
        easing='ease-in'
        className="absolute top-20 right-0 display-none"
      />

      </div>
    </nav>
  );
};

export default Navbar;
