import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="container mt-5">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mb-4">About</h1>
          <p className="lead text-center">This app is all about web development jokes!</p>
        </div>
      </div>
    </div>
  );
};

export default About;