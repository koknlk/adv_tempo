import React from "react"
import { Outlet } from "react-router-dom";



const Intake = () => {
    return (
        <div className="intake">
            {/* Dashboard */}

            <div className="displaybox">
                <iframe frameborder='0' className="dataFrame" src="https://analytics.zoho.com/open-view/2477974000001737291"></iframe>
            </div>
        </div>
    )

}
export default Intake;

