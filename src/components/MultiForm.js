import React, { useState } from 'react';
import '../styles/MultiForm.css';
import { FaUser, FaPhone, FaBuilding, FaAlignLeft } from 'react-icons/fa';
const steps = [
    { label: 'Personal profile', icon: <FaUser /> },
    { label: 'Contacts', icon: <FaPhone /> },
    { label: 'Company', icon: <FaBuilding /> },
    { label: 'Description', icon: <FaAlignLeft /> }
  ];
const MultiForm = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        phone: '',
        company: '',
        description: ''
  });
    return(
        <div className="main-div">
            <div className="wrapper">
        
            </div>
        </div>
    )
}