import React from 'react';
import './css/Header.css';
import Logo from './Logo';
import Navbar from './Navbar';

class Header extends React.Component {
    render(){
        return(
            <header className="row">
                <div className="col-12 no-padding">
                    <div className="Header">
                        <Logo />
                        <Navbar />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;