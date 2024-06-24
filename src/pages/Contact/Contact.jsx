import { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
    _subject: 'Portfolio Message!',
    _template: 'box'
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setSuccessMessage('');
    setErrorMessage('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    }
    
    fetch('https://formsubmit.co/ajax/chasanid@gmail.com', options).then(resp => {
      console.log({resp})
      return resp.json();
    }).then(data => {
      setLoading(false);
      setSuccessMessage('Your message has been received! I\'ll get back to you ASAP, I promise.');
    }).catch(err => {
      setLoading(false);
      setErrorMessage('There was an error sending the email. Try again and if it doesn\'t work you can find my email by downloading my resume.');
    })
  }
  return (
    <div className="contact-page">
      <h2>📧Contact Me</h2>
      <p className="contact-description">Feel free to send me an email if you need a website, an app, or just need someone to talk to.</p>
      <form
        method="POST"
        className="contact-form"
        onSubmit={(e) => {sendEmail(e)}}
      >
        <div className="top-row">
          <div className="form-group">
              <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  placeholder="Your Name" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  required
              />
          </div>
          <div className="form-group">
              <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
              />
          </div>
        </div>
          <div className="form-group">
              <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Whatcha wanna talk about?" 
                  rows="4"
                  required 
              ></textarea>
          </div>
          <button disabled={loading} type="submit">{loading ? 'Sending...' : 'Send'}</button>

          <input type="hidden" name="_template" value="box"></input>
          <input type="hidden" name="_captcha" value="false" />
      </form>
      <div className={`success-message notification-message ${successMessage ? 'display-notification' : ''}`}>
          <i className='bx bx-check-circle'></i>
          <span>{successMessage}</span>
      </div>
      <div className={`error-message notification-message ${errorMessage ? 'display-notification' : ''}`}>
        <i className='bx bx-x-circle'></i>
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default Contact;
