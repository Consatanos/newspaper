import React from 'react';

const FormContact = () => {
  return (
    <div className="contact-form-area">
      <form action="#" method="post">
        <div className="row">
          <div className="col-12 col-lg-6">
            <input type="text" className="form-control" id="name" placeholder="Name" />
          </div>
          <div className="col-12 col-lg-6">
            <input type="email" className="form-control" id="email" placeholder="E-mail" />
          </div>
          <div className="col-12">
            <input type="text" className="form-control" id="subject" placeholder="Subject" />
          </div>
          <div className="col-12">
            <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
          </div>
          <div className="col-12 text-center">
            <button className="btn newspaper-btn mt-30 w-100" type="submit">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default FormContact;