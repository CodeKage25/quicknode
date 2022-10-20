import React from 'react';

import { Container } from 'reactstrap';
import logo from '../../assets/images/Cattering-logo.png'

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <div className='nav__wrapper'>
                    <div className='logo'>
                        <img src={logo} alt="logo" />
                        <h5>Food Hub</h5>
                    </div>
                </div>
                </Container>
        </header>

        
    );
}

export default Header;