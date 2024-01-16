import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo.png";
import {
  HamburgerButton,
  InnerNavbarContainer,
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarLink,
  NavbarLinkContainer,
  OuterNavbarContainer,
  ResponsiveNavbarLink,
  RightContainer,
} from "./styled";

const Navbar = (): JSX.Element => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <InnerNavbarContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              Home
            </NavbarLink>
            <NavbarLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              About
            </NavbarLink>
            <NavbarLink
              activeClass="active"
              to="education"
              spy={true}
              offset={-100}
              smooth={true}
              duration={1000}
            >
              Education
            </NavbarLink>
            <NavbarLink
              to="skill"
              activeClass="active"
              spy={true}
              offset={-100}
              smooth={true}
              duration={1000}
            >
              Skill
            </NavbarLink>
            <NavbarLink
              activeClass="active"
              to="projects"
              spy={true}
              offset={-50}
              smooth={true}
              duration={1000}
            >
              Projects
            </NavbarLink>
            <NavbarLink
              activeClass="active"
              to="contact"
              spy={true}
              offset={-100}
              smooth={true}
              duration={1000}
            >
              Contact
            </NavbarLink>
            <HamburgerButton
              onClick={() => {
                setExtendNavbar((current) => !current);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </HamburgerButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={logo} alt="Logo" onClick={scrollToTop} />
        </RightContainer>
      </InnerNavbarContainer>
      {extendNavbar && (
        <OuterNavbarContainer>
          <ResponsiveNavbarLink
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            activeClass="active"
            onClick={() => {
              setExtendNavbar(false);
            }}
          >
            Home
          </ResponsiveNavbarLink>
          <ResponsiveNavbarLink
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            activeClass="active"
            onClick={() => {
              setExtendNavbar(false);
            }}
          >
            About
          </ResponsiveNavbarLink>
          <ResponsiveNavbarLink
            to="education"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            activeClass="active"
            onClick={() => {
              setExtendNavbar(false);
            }}
          >
            Education
          </ResponsiveNavbarLink>
          <ResponsiveNavbarLink
            to="skill"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            activeClass="active"
            onClick={() => {
              setExtendNavbar(false);
            }}
          >
            Skill
          </ResponsiveNavbarLink>
          <ResponsiveNavbarLink
            to="projects"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-50}
            activeClass="active"
            onClick={() => {
              setExtendNavbar(false);
            }}
          >
            Projects
          </ResponsiveNavbarLink>
          <ResponsiveNavbarLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            activeClass="active"
            onClick={() => {
              setExtendNavbar(false);
            }}
          >
            Contact
          </ResponsiveNavbarLink>
        </OuterNavbarContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
