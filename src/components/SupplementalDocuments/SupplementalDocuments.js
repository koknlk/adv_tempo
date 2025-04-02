import React from "react"
import { Outlet } from "react-router-dom";
import { FaClipboardList, FaExchangeAlt, FaBullhorn, FaPiggyBank } from 'react-icons/fa'


const SupplementalDocuments = () => {
    return (
        <div className="supplementaldocuments">
            {/* Dashboard */}

            <div className="displaybox">
                <iframe frameBorder='0' className="dataFrame" src="https://analytics.zoho.com/open-view/2477974000001990952"></iframe>
            </div>
        </div>
    )

}
export default SupplementalDocuments;