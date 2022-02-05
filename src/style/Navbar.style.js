import styled from "styled-components";
import { Link } from "react-router-dom";

/* font-family: 'Bungee Inline', cursive;
 * font-family: 'Ubuntu', sans-serif;
 * font-family: 'Zen Kurenaido', sans-serif; */

// The whole Navbar container
export const NavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  background-color: black;
  height: 8em;
  /* height: 100vh; */
  flex-direction: column;
`;

// Inner NavbarContainer
export const InnerNavbarContainer = styled.div`
  width: 100%;
  height: 8em;
  display: flex;
  /* background-color: red; */
`;
// Left part of the Navbar
export const LeftNavbar = styled.div`
  padding-left: 0.5em;
  display: flex;
  flex: 30%;
  align-items: center;
  justify-content: flex-start;
  font-size: 3em;
  font-family: "Zen Kurenaido", sans-serif;
  font-weight: 900;
  /* background-color: blue; */
  color: white;
  span {
    @media (max-width: 817px) {
      display: none;
    }
  }
`;
export const Avatar = styled.img`
  max-width: 2.3em;
  height: auto;
  border-radius: 50%;
  margin-right: 0.5em;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const OpenLinkButton = styled.button`
  /* display: flex; */
  width: 2em;
  height: 2em;
  background: none;
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;
// Right part of the navbar
export const RightNavbar = styled.div`
  display: flex;
  flex: 70%;
  /* background-color: green; */
  @media (max-width: 700px) {
    display: none;
  }
`;
// links
export const LinkContainer = styled.div`
  display: flex;
  /* background-color: red; */
  flex: 90%;
  justify-content: flex-end;
`;
export const NavBarLink = styled(Link)`
  display: flex;
  font-size: 2em;
  align-items: center;
  padding: 1em;
  font-family: "Bungee Inline", cursive;
  :hover {
    background-color: #333333;
  }
`;
// Extend NavbarContainer when screen is small
export const ExtendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 8em; */
  /* border: 1em solid #333333; */
  /* background-color: azure; */

  @media (min-width: 700px) {
    display: none;
  }
`;
export const ExtendLink = styled(Link)`
  color: #333333;
  font-size: x-large;
  margin: 2em;
  font-family: "Ubuntu", sans-serif;
  text-decoration: none;

  @media (min-width: 700px) {
    display: none;
  }
`;
