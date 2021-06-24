import React, { useState } from 'react';

function Form() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    uploadedFile: [],
    buttonText: 'Submit',
    uploadPhotosButtonText: 'Upload files',
  });

  // destructuring state variables

  const {
    name,
    email,
    message,
    phone,
    uploadedFile,
    buttonText,
    uploadPhotosButtonText,
  } = values;

  // event handler
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, buttonText: '...sending' });

    // send all data to backend for email
    console.table({ name, email, phone, message, uploadedFile });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea
            onChange={handleChange('message')}
            className="form-control"
            type="text"
            value={message}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label className="text-muted">Your Name</label>
          <input
            className="form-control"
            type="text"
            onChange={handleChange('name')}
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Your Email</label>
          <input
            className="form-control"
            type="email"
            onChange={handleChange('email')}
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-muted">Your Phone</label>
          <input
            className="form-control"
            type="number"
            onChange={handleChange('phone')}
            value={phone}
            required
          />

          <button className="btn btn-outline-primary btn-block mt-3">
            {buttonText}
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
