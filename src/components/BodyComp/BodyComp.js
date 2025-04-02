import React from 'react';
import logo from '../../assets/images/Advoc8se-logo.png';
import { Outlet } from 'react-router-dom'
import { FaClipboardList, FaExchangeAlt, FaBullhorn, FaBoxes, FaCheckDouble } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { IoDocumentsOutline } from "react-icons/io5";
import './BodyComp.css';



const active = "DATA"

const BodyComp = () => {
  return (
    <>
  
<div className="displaybox">
        <div className='header-and-title'>
          <img className='logoIcon' src={logo} alt="advocate logos" />
          <div className='displayboxtitle'>
            {/* Welcome */}
          </div>
        </div>
        <div className='displayboxcontent'>
          <Outlet/>
        </div>
      </div>

    </>
  )

}

export default BodyComp;