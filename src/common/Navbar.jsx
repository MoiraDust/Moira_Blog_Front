import React, { useState } from "react";

import Img from "../assets/images/avatar.jpeg";
import {
  NavbarContainer,
  InnerNavbarContainer,
  LeftNavbar,
  RightNavbar,
  Avatar,
  LinkContainer,
  NavBarLink,
  ExtendContainer,
  OpenLinkButton,
  ExtendLink,
} from "../style/Navbar.style.js";

export default function Navbar() {
  const [isShowExtend, setIsShowExtend] = useState(false);
  return (
    <div>
      <NavbarContainer>
        <InnerNavbarContainer>
          <LeftNavbar>
            <Avatar src={Img}></Avatar>
            <span>Moira Blog</span>
            <OpenLinkButton
              onClick={() => {
                setIsShowExtend((curr) => !curr);
              }}
            >
              {isShowExtend ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinkButton>
          </LeftNavbar>
          <RightNavbar>
            {/* links */}
            <LinkContainer>
              <NavBarLink to="/">Home</NavBarLink>
              <NavBarLink to="/article">Article</NavBarLink>
              <NavBarLink to="/portfolio">Portfolio</NavBarLink>
              <NavBarLink to="/bbs">Message</NavBarLink>
              <NavBarLink to="/contact">Contact</NavBarLink>
            </LinkContainer>
            {/* search bar */}
          </RightNavbar>
        </InnerNavbarContainer>
        {isShowExtend ? (
          <ExtendContainer>
            <ExtendLink to="/">Home</ExtendLink>
            <ExtendLink to="/article">Article</ExtendLink>
            <ExtendLink to="/portfolio">Portfolio</ExtendLink>
            <ExtendLink to="/bbs">Message</ExtendLink>
            <ExtendLink to="/contact">Contact</ExtendLink>
          </ExtendContainer>
        ) : (
          <></>
        )}
      </NavbarContainer>
    </div>
  );
}
