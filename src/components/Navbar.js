import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from '../services/sidebar';



const Navbar = ({ links, active }) => {
  const { sidebarExpanded, iconsOnly } = useSidebar();

  active = "MAIN MENU";

  return (
    <div className={`sidenav ${sidebarExpanded ? 'expanded' : 'collapsed'}`}>
      <ul className='mainlist'>
        {iconsOnly ? "" : (
          <li id="activeLink">
            <>
              {active}
            </>
          </li>
        )}
        {links.map((link, index) => (
          <React.Fragment key={link.label}>
            <li>
              <Link to={link.to}>
                {iconsOnly ? link.icon : (
                  <>
                    {link.icon} <br />
                    <span style={{ fontSize: '0.8em' }}>{link.label}</span>
                  </>
                )}
              </Link>
            </li>
            <br />
            {/* separator */}
            {index === 3 && <div style={{ height: '2px', backgroundColor: '#686b6f', width: '100%' }}></div>}
          </React.Fragment>
        ))}

      </ul>
      <div className='centered'>
        <ul className="settings">
          {/*  */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
