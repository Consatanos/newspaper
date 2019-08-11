import React from 'react';
import { connect } from 'react-redux';

const renderItem = (data) => {
  switch (data.name) {
    case 'phone':
      return (
        <div className="single-contact-information mb-30">
          <h6>Phone:</h6>
          {
            data.list.map((item) => {
              return (
                <p>
                  <div key={item}>
                    {item}
                  </div>
                </p>
              )
            })
          }
        </div>
      );
    case 'email':
      return (
        <div className="single-contact-information mb-30">
          <h6>Email:</h6>
          {
            data.list.map((item) => {
              return (
                <p>
                  <div key={item}>
                    {item}
                  </div>
                </p>
              )
            })
          }
        </div>
      );
    case 'address':
      return (
        <div className="single-contact-information mb-30">
          <h6>Address:</h6>
          {
            data.list.map((item) => {
              return (
                <p>
                  <div key={item}>
                    {item}
                  </div>
                </p>
              )
            })
          }
        </div>
      );

    default:
      return;
  };
};

const ContactsAside = (props) => {
  const { contacts } = props;
  return (
    <>
      {
        contacts.map((item) => {
          return renderItem(item);
        })
      }
    </>
  )
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  };
};

export default connect(mapStateToProps)(ContactsAside);