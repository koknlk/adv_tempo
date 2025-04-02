import React from 'react';
import logo from '../assets/images/victory_park.jpg';
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { FaClipboardList, FaExchangeAlt, FaBullhorn, FaBoxes, FaCheckDouble } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { IoDocumentsOutline } from "react-icons/io5";


const links = [
  { to: '/data/retainer/validation', icon: <FaCheckDouble size={20} />, label: 'Retainer Validation' },
  { to: '/data/compensable/case/packet/build', icon: <FaBoxes size={20} />, label: 'Compensable C8se Packet Build' },
 
  { to: '/data/medical/records', icon: <HiOutlineDocumentPlus size={20} />, label: 'Medical Records' },
  { to: '/data/supplemental/documents', icon: <IoDocumentsOutline style={{ fontSize: '23px' }} />, label: 'Supplemental Documents' },
  { to: '/data/intake', icon: <FaClipboardList size={20} />, label: 'Intake' },
  { to: '/data/matters', icon: <FaExchangeAlt size={20} />, label: 'Matters' },
  { to: '/data/marketing', icon: <FaBullhorn size={20} />, label: 'Marketing' },
  { to: '/data/funders', icon: <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{ fontSize: '23px' }} />, label: 'Funders' },
  { to: '/data/compensable/grader', icon: <FaBoxes size={20} />, label: 'Compensable Grader' },
];

const active = "DATA"

const Content = () => {
  return (
    <>
<Navbar links={links} active={active} />      
<div className="displaybox">
        <div className='header-and-title'>
          {/*<img className='logoIcon' src={logo} alt="advocate logos" />*/}
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
export default Content