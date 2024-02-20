import React from "react";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <nav className="flex justify-center items-center flex-row h-32 relative">
      <article className="flex absolute left-16">
        <img src="../images/jflogo.png" alt="Logo" className="w-20 h-20" />
      </article>
      <ul className="flex items-center text-lg text-white uppercase font-bold nav-ts">
        <li className="mr-7 hover:animate-bounce font-main">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Me
          </Link>
        </li>
        <li className="mr-7 hover:animate-bounce font-main">
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Services
          </Link>
        </li>
        <li className="mr-7 hover:animate-bounce font-main">
          <Link
            activeClass="active"
            to="recipes"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Recipes
          </Link>
        </li>
        <li className="mr-7 hover:animate-bounce font-main">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
