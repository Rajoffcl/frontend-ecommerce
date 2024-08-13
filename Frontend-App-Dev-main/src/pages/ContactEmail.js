import React, { useState } from "react";
import "./ContactEmails.css"; // Assuming you have styles in this CSS file.

const ContactEmail = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    website: "",
    hosting: "",
    comment: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to a server
    setSuccessMessage("Success! Thanks for contacting us, we will get back to you shortly.");
    // Reset form after submission
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      website: "",
      hosting: "",
      comment: "",
    });
  };

  return (
    <div className="container" style={{ backgroundImage: 'url("/path/to/your/background/image.jpg")' }}>
      <form className="well form-horizontal" id="contact_form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact Us Today!</legend>

          {/* First Name */}
          <div className="form-group">
            <label className="col-md-4 control-label">First Name</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  name="first_name"
                  placeholder="First Name"
                  className="form-control"
                  type="text"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label className="col-md-4 control-label">Last Name</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-user"></i>
                </span>
                <input
                  name="last_name"
                  placeholder="Last Name"
                  className="form-control"
                  type="text"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="col-md-4 control-label">E-Mail</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-envelope"></i>
                </span>
                <input
                  name="email"
                  placeholder="E-Mail Address"
                  className="form-control"
                  type="text"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="form-group">
            <label className="col-md-4 control-label">Phone #</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-earphone"></i>
                </span>
                <input
                  name="phone"
                  placeholder="(845)555-1212"
                  className="form-control"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="form-group">
            <label className="col-md-4 control-label">Address</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-home"></i>
                </span>
                <input
                  name="address"
                  placeholder="Address"
                  className="form-control"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* City */}
          <div className="form-group">
            <label className="col-md-4 control-label">City</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-home"></i>
                </span>
                <input
                  name="city"
                  placeholder="City"
                  className="form-control"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* State */}
          <div className="form-group">
            <label className="col-md-4 control-label">State</label>
            <div className="col-md-4 selectContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-list"></i>
                </span>
                <select
                  name="state"
                  className="form-control selectpicker"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Please select your state</option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arizona</option>
                  <option>Arkansas</option>
                  <option>California</option>
                  <option>Colorado</option>
                  {/* Add the remaining states */}
                </select>
              </div>
            </div>
          </div>

          {/* Zip Code */}
          <div className="form-group">
            <label className="col-md-4 control-label">Zip Code</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-home"></i>
                </span>
                <input
                  name="zip"
                  placeholder="Zip Code"
                  className="form-control"
                  type="text"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Website */}
          <div className="form-group">
            <label className="col-md-4 control-label">Website or domain name</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-globe"></i>
                </span>
                <input
                  name="website"
                  placeholder="Website or domain name"
                  className="form-control"
                  type="text"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Hosting */}
          <div className="form-group">
            <label className="col-md-4 control-label">Do you have hosting?</label>
            <div className="col-md-4">
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="hosting"
                    value="yes"
                    checked={formData.hosting === "yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="hosting"
                    value="no"
                    checked={formData.hosting === "no"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="form-group">
            <label className="col-md-4 control-label">Project Description</label>
            <div className="col-md-4 inputGroupContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-pencil"></i>
                </span>
                <textarea
                  className="form-control"
                  name="comment"
                  placeholder="Project Description"
                  value={formData.comment}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage} <i className="glyphicon glyphicon-thumbs-up"></i>
            </div>
          )}

          {/* Submit Button */}
          <div className="form-group">
            <label className="col-md-4 control-label"></label>
            <div className="col-md-4">
              <button type="submit" className="btn btn-warning">
                Send <span className="glyphicon glyphicon-send"></span>
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactEmail;
