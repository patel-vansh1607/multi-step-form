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
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <label>* Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </>
        );
      case 1:
        return (
          <>
            <label>* Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </>
        );
      case 3:
        return (
          <>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </>
        );
      default:
        return null;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };
    return(
        <div className="main-div">
            <div className="wrapper">
            <div className="container">
        <aside className="sidebar">
          {steps.map((step, i) => (
            <div
              className={`step-item ${i === currentStep ? 'active' : ''}`}
              key={i}
              onClick={() => setCurrentStep(i)}
            >
              <div className="icon-box">{step.icon}</div>
              <span>{step.label}</span>
              {i < steps.length - 1 && <div className="line" />}
            </div>
          ))}
        </aside>
        <main className="form-area">
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
          </form>
        </main>
      </div>
      <div className="send-button">
        <button type="submit" form="form">
          <span>✈️ Send</span>
        </button>
      </div>
            </div>
        </div>
    )
}