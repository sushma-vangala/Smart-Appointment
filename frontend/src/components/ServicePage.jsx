import React from 'react';
import { useParams } from 'react-router-dom';
import Healthcare from '../pages/Healthcare';
import Automotive from '../pages/Automotive';
import BeautyAndWellness from '../pages/BeautyAndWellness';
import EducationAndCoaching from '../pages/EducationAndCoaching';
import HomeServices from '../pages/HomeServices';
import LegalAndFinancial from '../pages/LegalAndFinancial';


const ServicePage = () => {
  const { service, speciality } = useParams();

  // Map services to their corresponding components
  const serviceComponents = {
    Healthcare: <Healthcare speciality={speciality} />,
    Automotive: <Automotive speciality={speciality} />,
    'Beauty and Wellness': <BeautyAndWellness speciality={speciality} />,
    'Education and Coaching': <EducationAndCoaching speciality={speciality} />,
    'Home Services': <HomeServices speciality={speciality} />,
    'Legal and Financial': <LegalAndFinancial speciality={speciality} />,
  };

  // Render the appropriate component based on the service
  return serviceComponents[service] || <p>Service not found</p>;
};

export default ServicePage;