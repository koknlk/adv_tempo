import React from 'react';
import logo from '../assets/images/logo.png'
import { Outlet } from "react-router-dom";import Navbar from './Navbar'
import { FaClipboardList, FaExchangeAlt, FaBullhorn, FaPiggyBank } from 'react-icons/fa'


const Dashboard2 = () => {
  return (
    <div className='dashboard2'>
      
      <div className="displaybox">
         <iframe frameBorder='0' title='financesTitle' className="dataFrame" src="https://analytics.zoho.com/open-view/2477974000001872021"></iframe>
            </div>
    </div>
  )

}
export default Dashboard2;