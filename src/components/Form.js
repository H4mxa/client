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
  const handleChange = () => {
    console.log('handle change');
  };

  const handleSubmit = () => {
    console.log('handle submit');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Description</label>
          <textarea
            onChange={handleChange('message')}
            type="text"
            className="form-control"
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
