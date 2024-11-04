import React from 'react';
import ContactForm from './components/ContactForm';

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mb-4">Contact</h1>
          <ContactForm />
          <p className="lead text-center">You can reach us at <a href="mailto:webdevjokes@example.com">webdevjokes@example.com</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;