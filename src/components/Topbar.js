import React, {useState} from 'react';
import { FaStream, FaHome, FaLaptop, FaSearch, FaChartBar, FaBell, FaFolder } from 'react-icons/fa'
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useSidebar } from '../services/sidebar';
import { useAuth } from '../services/auth';
import "./Topbar.css";
import EmptyNotificationIcon from '../assets/icons8-notifications-96.png';


const Topbar = () => {
  const [activeItem, setActiveItem] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { toggleSidebar } = useSidebar();
  const { deAuth } = useAuth();
  const open = Boolean(anchorEl);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleDeAuth = () => {
    localStorage.removeItem("credentials");
    deAuth();
  }

  const handleToggle = () => {
    toggleSidebar();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [showSearch, setShowSearch] = useState(false);

  // Toggles the showSearch state
  const toggleSearch = () => setShowSearch(!showSearch);


  // State to keep track of whether the notification panel is shown
  const [showNotifications, setShowNotifications] = useState(false);

  // Toggles the showNotifications state
  const toggleNotifications = () => setShowNotifications(!showNotifications);



  return (
    <div>

      <nav>

        <div>
          <ul id="topmainnavbar" className='mainlist'>
            <li >
              <Link onClick={handleToggle}> <FaStream size={18} />
              </Link>
            </li>
            {/*<li>
              <Link >
                <p><FaHome size={18}/> Home</p>
              </Link>
            </li>*/}
            <li>
              <Link to='/dashboard'

                onClick={handleClick}>
                <p><FaLaptop size={18} /> Dashboard</p>
              </Link>
            </li>
          </ul>

        </div>
        <div>
          <ul className='topsubnav' >
            <li >
              <Link onClick={toggleSearch} > <FaSearch size={18} />
              </Link>
            </li>
            {showSearch && (
              <input type="text" placeholder="Search..." />
            )}
            <li >
              <Link to='/data/quick/check'> <FaChartBar size={18} />
              </Link>
            </li>
            <li >
              <Link to='/data/intake/form'> <IoMdAddCircleOutline size={18} />
              </Link>
            </li>
            <li >
              <Link to='/data/folder'> <FaFolder size={18} />
              </Link>
            </li>
            <li>
              <Link onClick={toggleNotifications} > <FaBell size={18} /> </Link>
            </li>
            
            {showNotifications && (
          <div className="notification-panel">
            {/* Notification content goes here */}
            <p className='notitification-text'>You have no notifications.</p>
            <br />
            <img className='emptyNotf' src={EmptyNotificationIcon} alt='EmptyIcon' />
            {/* Add more notification items */}
          </div>
        )}
            <li>
            <Link to='/data/setting'> <FiSettings size={18} /> </Link>
            </li>
            <li>
              <Link onClick={handleDeAuth} > <FiLogOut size={18} /> </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>





  )

}
export default Topbar