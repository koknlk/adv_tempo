import React from "react";
import Navbar from "../Navbar"
import { Link, useNavigate } from "react-router-dom";
import './Dashboard.css'
import { FaClipboardList, FaExchangeAlt, FaBullhorn, FaBoxes } from 'react-icons/fa'
import logo6 from '../../assets/images/funnel/6.png';
import logo5 from '../../assets/images/funnel/5.png';
import logo4 from '../../assets/images/funnel/4.png';
import logo3 from '../../assets/images/funnel/3.png';
import logo2 from '../../assets/images/funnel/2.png';
import logo1 from '../../assets/images/funnel/1.png';
import FirstImg from '../../assets/images/funnel/first_pic.png';
import { useAuth } from "../../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FaCheckDouble } from "react-icons/fa";
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


const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();


  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }


  return (
    <div className="dashboard overlay">
      <Navbar links={links} />
      { /* */}



      <div className="welcomeContainer overlay">
  <div className="firstWrapper">
    <br />
   
    <h1 className="welcome-txt">Welcome</h1>
  </div>

  <div className="optionsContainer">
    <div className="vertical-container">
      <Link to={"/data/signed/retainer"}>
        <img className="hrr" src={logo1} alt="Signed Retainers" />
      </Link>
      
      <Link to={"/data/retainer/validation"}>
        <img className="hrr" src={logo2} alt="Retainer Validation" />
      </Link>
      
      <Link to={"/data/compensable/case/packet/build"}>
        <img className="hrr" src={logo3} alt="Compensable Case Packet Build" />
      </Link>
      
      <Link to={"/data/medical/records"}>
        <img className="hrr" src={logo4} alt="Medical Records" />
      </Link>
      
      <Link to={"/data/supplemental/documents"}>
        <img className="hrr" src={logo5} alt="Supplemental Documents" />
      </Link>
      
      <Link to={"/"}>
        <img className="hrr" src={logo6} alt="Attribution" />
      </Link>
    </div>
  </div>
</div>

    </div>
  )

}
export default Dashboard;