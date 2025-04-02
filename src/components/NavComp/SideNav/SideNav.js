import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideNav.css';

const SideNav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href='#' className='elem'>
                            
                        </a>
                    </li>

                    <li>                 
                    <a href='#'>
                    <i className="bi bi-square-half"></i>
                    <span className='nav-item item-font'>Dashboard</span>
                    </a>
                   </li>

                   <li>                 
                    <a href='#'>
                    <i className="bi bi-check2-all"></i>
                    <span className='nav-item item-font'>Retainer Validation</span>
                    </a>
                   </li>

                   <li>                 
                    <a href='#'>
                    <i className="bi bi-boxes"></i>
                    <span className='nav-item item-font'>Compensable C8se Packet Build</span>
                    </a>
                   </li>

                   <li>                 
                    <a href='#'>
                    <i className="bi bi-file-earmark-plus"></i>
                    <span className='nav-item item-font'>Medical Records</span>
                    </a>
                   </li>

                   <li>                 
                    <a href='#'>
                    <i className="bi bi-files"></i>
                    <span className='nav-item item-font'>Supplemental Documents</span>
                    </a>
                   </li>
                    
                   <li>                 
                    <a href='#'>
                    <i className="bi bi-card-checklist"></i>
                    <span className='nav-item item-font'>Intake</span>
                    </a>
                   </li>

                   <li>                 
                    <a href='#'>
                    <i className="bi bi-arrows"></i>
                    <span className='nav-item item-font'>Matters</span>
                    </a>
                   </li>

                   <li>                 
                    <a href='#'>
                    <i className="bi bi-megaphone"></i>
                    <span className='nav-item item-font'>Marketing</span>
                    </a>
                   </li>

                   <li>                 
                    <a href='#'>
                    <i className="bi bi-cash-coin"></i>
                    <span className='nav-item item-font'>Funders</span>
                    </a>
                   </li>

                   <li>                 
                    <a href='#'>
                    <i className="bi bi-inboxes"></i>
                    <span className='nav-item item-font'>Compensable Grader</span>
                    </a>
                   </li>

                   <li>                 
                    <a href='#' className='set'>
                    <i className="bi bi-gear"></i>
                    <span className='nav-item item-font'>Settings</span>
                    </a>
                   </li>

                </ul>
            </nav>
        </div>
    );
}

export default SideNav;

