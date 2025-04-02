import React, { useState } from 'react';
import './FundersInput.css';

const FundersInput = () => {

    const [showPopup, setShowPopup] = useState(false);

    const handleOpenPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="fundersInput">
            <div >
                <button className='btn' onClick={handleOpenPopup}>Open Finance Report</button>
            </div>
            <br /><br />
            <div className="displaybox">
                <iframe frameBorder='0' title='fundersInputTitle' className="dataFrame" src="https://forms.zohopublic.com/FundaInternational/form/FunderInputs/formperma/oPihascxdG8bOMVJ-pcrBHgJMqWypSk6aCef8o6rRoI"></iframe>
            </div>

            {showPopup && (
                <>
                    <div className="overlay1" onClick={handleClosePopup}></div>
                    <div className="popup">
                        <iframe frameBorder='0' title='financesTitle' className="dataFrame" src="https://analytics.zoho.com/open-view/2477974000001778888"></iframe>
                        <button className='btn' onClick={handleClosePopup}>Close</button>
                    </div>
                </>
            )}


        </div>
    )
}
export default FundersInput;

