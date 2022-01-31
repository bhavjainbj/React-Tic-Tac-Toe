import React from 'react';
import './Navbar.css';


function NavBar(props) {
    return (
        <div style={{textAlign: 'right', marginRight: '90px', marginTop: '20px'}}>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className={"form-check-label"} htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
            </div>

        </div>);
}

export default NavBar;
