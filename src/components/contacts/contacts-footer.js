import React from 'react';
import { connect } from 'react-redux';

const renderItem = (data) => {
  switch (data.name) {
    case 'phone':
      return data.list.map((item) => {
        const link = item.replace(/\s/g, "");
        return <li key={item}><a href={`tel:${link}`}>{item}</a></li>
      });
    case 'email':
      return data.list.map((item) => {
        return <li key={item}><a href={`mailto:${item}`}>{item}</a></li>
      });
    case 'site':
      return data.list.map((item) => {
        return <li key={item}><a href={`${item}`}>{item}</a></li>
      });

    default:
      return;
  };
};

const ContactsFooter = (props) => {
  const { contacts } = props;
  return (
    <ul className="list">
      {
        contacts.map((item) => {
          return renderItem(item);
        })
      }
    </ul>
  )
};

const mapStateToProps = ({ contacts }) => {
  return {
    contacts
  };
};

export default connect(mapStateToProps)(ContactsFooter);