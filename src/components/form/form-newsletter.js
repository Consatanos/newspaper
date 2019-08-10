import React from 'react';

const FormNewsletter = () => {
  return (
    <div className="newsletter-widget mb-50">
      <h4>Newsletter</h4>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <form action="#" method="post">
        <input type="text" name="text" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <button type="submit" className="btn w-100">Subscribe</button>
      </form>
    </div>
  )
};

export default FormNewsletter;