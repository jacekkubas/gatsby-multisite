import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 30px 0;
  margin-bottom: 80px;
  display: flex;
`;

const LinkWrapper = styled.div`
  margin-right: 15px;

  a {
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <LinkWrapper>
        <Link to="/">home</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/sample-page">sample</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/about">about</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/contact">contact</Link>
      </LinkWrapper>
    </HeaderWrapper>
  );
};

export default Header;
