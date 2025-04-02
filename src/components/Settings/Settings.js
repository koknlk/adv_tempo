import React, {useState} from "react"
import { Outlet } from "react-router-dom";
import "./Settings.css";
import Table from 'react-bootstrap/Table';


const Setting = () => {

    const [cancerType, setCancerType] = useState('');
    const [tier, setTier] = useState('');

    const cancerTypes = ['Bladder', 'Esophigal', 'Gastric', 'Liver', 'Lung', 'Prostate', 'Kidney', 'Prostate']; 
    const tiers = ['Tier 0', 'Tier 1', 'Tier 2', 'Tier 3']; 

    const handleCancerTypeChange = (e) => {
        setCancerType(e.target.value);
    };

    const handleTierChange = (e) => {
        setTier(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic here
        console.log(`Selected Cancer Type: ${cancerType}, Tier: ${tier}`);
    };

    return (
        <div className="setting">
            {/* Dashboard */}

            <div className="displaybox">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <select
                        className="form-select"
                        id="cancerType"
                        value={cancerType}
                        onChange={handleCancerTypeChange}
                    >
                        <option value="">Select Cancer Type</option>
                        {cancerTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <select
                        className="form-select"
                        id="tier"
                        value={tier}
                        onChange={handleTierChange}
                    >
                        <option value="">Select Tier</option>
                        {tiers.map(tier => (
                            <option key={tier} value={tier}>{tier}</option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="btn1">Add</button>
                <br/><br/>
            </form>

            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Cancer Type</th>
          <th>Tier</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gastric</td>
          <td>Tier 1</td>
          <td>
            <span className="me-2"><i className="bi bi-pencil-square"></i></span>  
            <span><i class="bi bi-trash3"></i></span>       
          </td>
        </tr>
        <tr>
          <td>Liver</td>
          <td>Tier 1</td>
          <td>
            <span className="me-2"><i className="bi bi-pencil-square"></i></span>  
            <span><i class="bi bi-trash3"></i></span>       
          </td>
        </tr>
        <tr>
          <td>Prostate</td>
          <td>Tier 1</td>
          <td>
            <span className="me-2"><i className="bi bi-pencil-square"></i></span>  
            <span><i class="bi bi-trash3"></i></span>       
          </td>
        </tr>
        <tr>
          <td>Bladder</td>
          <td>Tier 2</td>
          <td>
            <span className="me-2"><i className="bi bi-pencil-square"></i></span>  
            <span><i class="bi bi-trash3"></i></span>       
          </td>
        </tr>
        <tr>
          <td>Pancreatic</td>
          <td>Tier 2</td>
          <td>
            <span className="me-2"><i className="bi bi-pencil-square"></i></span>  
            <span><i class="bi bi-trash3"></i></span>       
          </td>
        </tr>
        <tr>
          <td>Esophigal</td>
          <td>Tier 3</td>
          <td>
            <span className="me-2"><i className="bi bi-pencil-square"></i></span>  
            <span><i class="bi bi-trash3"></i></span>       
          </td>
        </tr>
        <tr>
          <td>Lung</td>
          <td>Tier 0</td>
          <td>
            <span className="me-2"><i className="bi bi-pencil-square"></i></span>  
            <span><i class="bi bi-trash3"></i></span>       
          </td>
        </tr>
        <tr>
          <td>Kidney</td>
          <td>Tier 0</td>
          <td>
            <span className="me-2"><i className="bi bi-pencil-square"></i></span>  
            <span><i class="bi bi-trash3"></i></span>       
          </td>
        </tr>
      </tbody>
    </Table>
            
            </div>
        </div>
    )

}
export default Setting;