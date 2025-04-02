import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Topbar from './components/Topbar';
import Content from './components/Content';
import { Route, Routes } from 'react-router-dom';
import Intake from './components/Navigation/Intake/Intake'
import Matters from './components/matter/Matters';
import Marketing from './components/Marketing';
import Finances from './components/FundersComp/Finances';
import Dashboard from './components/Dashboard/Dashboard';
import { SidebarProvider } from './services/sidebar';
import { useAuth } from './services/auth';
import Login from './components/login/Login';
import ProtectedRoute from './components/protectedRoutes/ProtectedRoute';
import Dashboard2 from './components/Dashboard2';
import MedicalRecords from './components/MedicalRecords/MedicalRecords';
import ComensableC8se from './components/ComensableC8sePacket/ComensableC8sePacket';
import RetainerValidation from './components/Retainervalidation/RetainerValidation';
import SupplementalDocuments from './components/SupplementalDocuments/SupplementalDocuments';
import IntakeForm from './components/Intakeform/IntakeForm';
import DocumentsPortal from './components/DocumentsPortal/DocumentsPortal';
import FundersInput from './components/FundersInput/FundersInput';
import CompensableGrader from './components/CompensableGrader/CompensableGrader';
import Setting from './components/Settings/Settings';
import SignedRetainer from './components/SignedRetainers/SignedRetainers';



function App() {

  const { isAuthenticated } = useAuth();

  return (
    <div className='App'>
      {/*<div className="app-container">
    <TopNav />
    <div className="main-container">
        <SideNav />
        <div className="content-container">
            <BodyComp />
            
        </div>
    </div>
  </div>*/}


      <SidebarProvider>
    <div className="App">
      {isAuthenticated && <Topbar />}
      <div>
        <div>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
                         
              <Route path="" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="data" element={<Content />}>
                <Route path="intake" element={<Intake />} />
                <Route path="matters" element={<Matters />} />
                <Route path="marketing" element={<Marketing />} />
                <Route path="funders" element={<Finances />} />
                <Route path="medical/records" element={<MedicalRecords />} />
                <Route path="compensable/case/packet/build" element={<ComensableC8se />} />
                <Route path="retainer/validation" element={<RetainerValidation  />} />
                <Route path="supplemental/documents" element={<SupplementalDocuments />} />
                <Route path='quick/check' element={<Dashboard2 />} /> 
                <Route path='intake/form' element={<IntakeForm />} />
                <Route path='signed/retainer' element={<SignedRetainer />} />
                <Route path='folder' element={<DocumentsPortal />} />
                <Route path='funders/input' element={<FundersInput />} />
                <Route path='compensable/grader' element={<CompensableGrader />} />
                <Route path='setting' element={<Setting />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  </SidebarProvider>

    </div>
  );
}
export default App;
