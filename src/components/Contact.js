import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      remember: false
    });
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="content">
          <div className="left-side" data-aos="fade-up">
            <h1>Get In Touch</h1>
            <p>
              Ready to embark on your space adventure? Contact us to learn more 
              about our upcoming missions and how you can be part of the future 
              of space exploration.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
            <h1>Contact Form</h1>
            
            <div className="row-1">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="row-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            
            <div className="remember">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              <p>Remember me</p>
            </div>
            
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 