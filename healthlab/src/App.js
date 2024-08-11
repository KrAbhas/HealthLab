import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector';
import LandingPage from './components/LandingPage';
import SignUp from './components/Authentication/SignUp';
import Login from './components/Authentication/Login';
import Logout from './components/Authentication/Logout';
import BookAppointment from './components/Dashboard/BookAppointment';
import Payment from './components/Dashboard/Payment';
import VerifyPayment from './components/Dashboard/VerifyPayment';
import AdminPanel from './components/Admin/AdminPanel';
import DoctorSection from './components/Doctor/DoctorSection';
import PathologistSection from './components/Pathologist/PathologistSection';
import UploadReport from './components/Admin/UploadReport';
import ValidateReport from './components/ReportManagement/ValidateReport';
import DownloadReport from './components/ReportManagement/DownloadReport';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [userRole, setUserRole] = useState('');

  return (
    <Router>
      <LanguageSelector />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/logout" element={<Logout />} />
        <Route 
          path="/dashboard/book-appointment" 
          element={<ProtectedRoute element={BookAppointment} userRole={userRole} allowedRoles={['User', 'Doctor', 'Admin']} />}
        />
        <Route 
          path="/dashboard/payment" 
          element={<ProtectedRoute element={Payment} userRole={userRole} allowedRoles={['User']} />}
        />
        <Route 
          path="/dashboard/verify-payment" 
          element={<ProtectedRoute element={VerifyPayment} userRole={userRole} allowedRoles={['Admin']} />}
        />
        <Route 
          path="/admin" 
          element={<ProtectedRoute element={AdminPanel} userRole={userRole} allowedRoles={['Admin']} />}
        />
        <Route 
          path="/doctor" 
          element={<ProtectedRoute element={DoctorSection} userRole={userRole} allowedRoles={['Doctor']} />}
        />
        <Route 
          path="/pathologist" 
          element={<ProtectedRoute element={PathologistSection} userRole={userRole} allowedRoles={['Pathologist']} />}
        />
        <Route 
          path="/upload-report" 
          element={<ProtectedRoute element={UploadReport} userRole={userRole} allowedRoles={['Admin', 'Staff']} />}
        />
        <Route 
          path="/validate-report" 
          element={<ProtectedRoute element={ValidateReport} userRole={userRole} allowedRoles={['Pathologist']} />}
        />
        <Route 
          path="/download-report" 
          element={<ProtectedRoute element={DownloadReport} userRole={userRole} allowedRoles={['User', 'Doctor', 'Pathologist', 'Admin', 'Staff']} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
  