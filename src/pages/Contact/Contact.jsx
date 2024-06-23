import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form action="https://formsubmit.co/el/xikona" method="POST" className="contact-form">
        <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Return Email</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
            />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
            ></textarea>
        </div>
        <button type="submit">Send</button>

        <input type="hidden" name="_subject" value={`Message from TheMCU.FYI`} />
        <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};

export default Contact;
