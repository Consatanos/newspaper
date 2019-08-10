import React from 'react';
import { FormContact } from '../form';
import { ContactsAside } from '../contacts';

const Contact = () => {
  return (
    <>
      <div className="contact-area section-padding-0-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-title">
                <h2>Contact us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-8">
              <FormContact />
            </div>
            <div className="col-12 col-lg-4">
              <ContactsAside />
            </div>
          </div>
          {/* Google Maps */}
          <div className="map-area">
            <div id="googleMap"></div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact; 