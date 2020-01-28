import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import wolt from '../wolt.png';

const NavBar = () => {
    return (
        <NavContainer className='navbar navbar-expand-sm navbar-dark px-sm-5'>
            <Link to='/'>    {/* link for logo */}
                    <img src={wolt} alt='brandlogo' width="60px" height='auto' className='navbar-brand' />
            </Link>
            <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                    <Link to='/' className='nav-link'>Restaurants</Link>
                </li>
            </ul>
        </NavContainer>
    )
};

const NavContainer = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 1.3rem; 
        text-transform: capitalize;
        display: inline;
    }
`;

export default NavBar;