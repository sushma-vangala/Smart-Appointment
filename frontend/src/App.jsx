import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServicePage from './components/ServicePage';
import { AdminContext } from './context/AdminContext';
import ANavbar from './components/ANavbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddProvider from './pages/Admin/AddProvider';
import ProvidersList from './pages/Admin/ProvidersList';
import { ProviderContext } from './context/ProviderContext';
import ProviderDashboard from './pages/Provider/ProviderDashboard';
import ProviderAppointment from './pages/Provider/ProviderAppointment';
import ProviderProfile from './pages/Provider/ProviderProfile';
import Login from './pages/Login';

const App = () => {
  const { aToken } = useContext(AdminContext); // Admin token
  const { pToken } = useContext(ProviderContext); // Provider token
  const uToken = localStorage.getItem('uToken'); // User token
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Redirect to appropriate dashboard after login
  useEffect(() => {
    if (!isLoggedIn) {
      if (aToken) {
        setIsLoggedIn(true);
        navigate('/admin-dashboard'); // Redirect to admin dashboard
      } else if (pToken) {
        setIsLoggedIn(true);
        navigate('/provider-dashboard'); // Redirect to provider dashboard
      } else if (uToken) {
        setIsLoggedIn(true);
        navigate('/my-profile'); // Redirect to user profile
      }
    }
  }, [aToken, pToken, uToken, isLoggedIn, navigate]);

  return (
    <>
      <div>
        <div className={aToken || pToken ? "w-full" : "mx-4 sm:mx-[5%]"}>
          <ToastContainer />
          {/* Navbar */}
          {pToken || aToken ? <ANavbar /> : <Navbar />}

          <div className="flex">
            {/* Sidebar for Admin and Provider Pages */}
            {(aToken || pToken) && <Sidebar />}

            {/* Main Content */}
            <div className="flex-1">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:service" element={<ServicePage />} />
                <Route path="/services/:service/:speciality" element={<ServicePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/my-appointments" element={<MyAppointments />} />
                <Route path="/appointment/:id" element={<Appointment />} />

                {/* Admin Routes */}
                {aToken && (
                  <>
                    <Route path="/admin-dashboard" element={<Dashboard />} />
                    <Route path="/all-appointments" element={<AllAppointments />} />
                    <Route path="/add-provider" element={<AddProvider />} />
                    <Route path="/providers-list" element={<ProvidersList />} />
                  </>
                )}

                {/* Provider Routes */}
                {pToken && (
                  <>
                    <Route path="/provider-dashboard" element={<ProviderDashboard />} />
                    <Route path="/provider-appointments" element={<ProviderAppointment />} />
                    <Route path="/provider-profile" element={<ProviderProfile />} />
                  </>
                )}

                {/* Redirect to Home if no matching route */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>

          {/* Footer for Public Pages */}
          {!aToken && !pToken && <Footer />}
        </div>
      </div>
    </>
  );
};

export default App;
