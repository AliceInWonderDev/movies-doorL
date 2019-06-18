import React from 'react';

const Header = ({title}) => {
    return ( 
        <nav>
            <div className="nav-wrapper s12 m6 l6">
                <a href="#!" className="brand-logo">{title}</a>
            </div>
        </nav>
    );
}

export default Header;
