import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    padding: 1em;
    background: #f5f4f0;

    @media (max-width: 700px) {
        padding-top: 64px;
    }

    @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
        overflow-y: scroll;
    }
`;

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1em;
        color: #333;
    }
    a:visited {
        color: #333;
    }
    a:hover,
    a:focus {
        color: #0077cc;
    }
`;

const NavItem = styled.li`
    border-bottom: dashed #000;
`

const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <NavItem>
                    <Link to="/">🏠Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/new">✏️Write Note</Link>
                </NavItem>
                <NavItem>
                    <Link to="/mynotes">📓My Notes</Link>
                </NavItem>
                <NavItem>
                    <Link to="/favorites">⭐Favorites</Link>
                </NavItem>
            </NavList>
        </Nav>
    )
}

export default Navigation
