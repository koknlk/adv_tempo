import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNav.css';


const TopNav = () => {
    return (
        <div className="">
    <nav className="navbar topbarnav">
        <a className="navbar-brand" href="#">
            {/* SVG Icon Here */}
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                {/* ... other nav items ... */}
            </ul>

            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="notificationDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bi bi-bell"></i> Notifications
                    </a>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="notificationDropdown">
                        {/* Notification items here */}
                        <a className="dropdown-item" href="#">Notification 1</a>
                        {/* ... other notifications ... */}
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</div>
    );
}

export default TopNav;