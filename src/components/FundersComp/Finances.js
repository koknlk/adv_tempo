import React from 'react';
import { Link } from 'react-router-dom';
import './Finances.css';

const Finances = () => {
    return (
        <div className="finances">
            <div className='fundersInputWrapper'>
                <button className='fundersInputbtn'>
                    <Link className='linkFunderInput' to='/data/funders/input'>
                        Funders Input
                    </Link>
                </button>
            </div>
            <br/><br/>
            <div className="displaybox">
                <iframe frameBorder='0' title='financesTitle' className="dataFrame" src="https://analytics.zoho.com/open-view/2477974000001778888"></iframe>
                
            </div>
        </ div>
    )
}
export default Finances