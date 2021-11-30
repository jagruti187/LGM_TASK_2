import React from 'react'

const Navbar = ({getpersonData}) => {
    return(
    <nav className="navbar">
        <div className="logo"><p>Users Data</p></div>
        <button type="button" onClick={() =>getpersonData(1)}>Get Users</button>
    </nav>
    )
}

export default Navbar;