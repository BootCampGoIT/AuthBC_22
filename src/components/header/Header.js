import React from 'react';
import Navigation from './navigation/Navigation';



const Header = () => {
    return (
        <div style={{height: "40px", backgroundColor: "black", width: "100%", display: "flex", alignItems: "center", }}>
        <Navigation/>
        </div>
    );
}

export default Header;