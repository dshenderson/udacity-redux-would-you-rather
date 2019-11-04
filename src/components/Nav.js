import React from 'react';
import {NavLink as RRNavLink} from 'react-router-dom';
import styled from '@emotion/styled';

const NavWrapper = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 2rem;
`;

const NavLink = styled.a`
  cursor: pointer;
  font-size: 1.25rem;
  text-decoration: none;
  color: blue;
  -webkit-text-fill-color: deepskyblue;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  &:hover,
  &:active {
    -webkit-text-fill-color: gold;
  }
  @media (max-width: 414px) {
    font-size: 1rem;
  }
`;

export default function Nav () {
  return (
    <NavWrapper>
      <NavItem>
        <NavLink as={RRNavLink} to="/" exact activeClassName="active">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={RRNavLink} to="/add" activeClassName="active">
          New Question
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink as={RRNavLink} to="/leaderboard" activeClassName="active">
          Leaderboard
        </NavLink>
      </NavItem>
    </NavWrapper>
  );
}
