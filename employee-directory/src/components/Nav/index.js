import React from 'react';
import NameSearch from "../NameSearch";
import "./Nav.css";


//Setting up the Nav.
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <NameSearch />
    </div>
</nav>
    );
}
export default Nav;