// Navbar.styles.ts

import { Link } from "react-scroll";
import styled from "styled-components";

const NavbarContainer = styled.nav<{ extendNavbar: boolean }>`
  width: 100%;
  ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 3;

  @media (min-width: 825px) {
    height: 80px;
  }
`;

const InnerNavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

const OuterNavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 825px) {
    display: none;
  }
`;

const RightContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;

  @media (max-width: 300px) {
    padding-right: 0px;
  }
`;

const LeftContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

const Logo = styled.img`
  margin: 10px;
  cursor: pointer;
  max-width: 200px;
  height: auto;

  @media (max-width: 300px) {
    max-width: 150px;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavbarLink = styled(Link)`
  font-size: 24px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
  color: ${(props) => (props.selected ? "black" : "#989393")};

  &.active {
    color: black;
  }

  @media (max-width: 821px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 825px) {
    display: none;
  }
`;

const ResponsiveNavbarLink = styled(Link)`
  color: ${(props) => (props.selected ? "black" : "#989393")};
  font-size: x-large;
  font-weight: bold;
  text-decoration: none;
  margin: 10px;
  cursor: pointer;

  &.active {
    color: black;
  }
`;

export {
  NavbarContainer,
  InnerNavbarContainer,
  OuterNavbarContainer,
  RightContainer,
  LeftContainer,
  Logo,
  NavbarLinkContainer,
  NavbarLink,
  HamburgerButton,
  ResponsiveNavbarLink,
};
