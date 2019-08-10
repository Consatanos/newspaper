import React from 'react';

const FormComment = () => {
  return (
    <div className="post-a-comment-area section-padding-80-0">
      <h4>Leave a comment</h4>
      <div className="contact-form-area">
        <form action="#" method="post">
          <div className="row">
            <div className="col-12 col-lg-6">
              <input type="text" className="form-control" id="name" placeholder="Name*" />
            </div>
            <div className="col-12 col-lg-6">
              <input type="email" className="form-control" id="email" placeholder="Email*" />
            </div>
            <div className="col-12">
              <input type="text" className="form-control" id="subject" placeholder="Website" />
            </div>
            <div className="col-12">
              <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
            </div>
            <div className="col-12 text-center">
              <button className="btn newspaper-btn mt-30 w-100" type="submit">Submit Comment</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
};

export default FormComment;