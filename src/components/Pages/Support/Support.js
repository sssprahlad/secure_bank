import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaQuestionCircle, FaHeadset, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import './Support.css'

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'How do I reset my password?',
      answer: 'Go to the login page and click on "Forgot Password". Enter your email address and we will send you a password reset link. Follow the instructions in the email to create a new password.'
    },
    {
      id: 2,
      question: 'How can I view my account balance?',
      answer: 'Log in to your account and navigate to the Dashboard. Your current account balance will be displayed prominently at the top of the page. You can also view detailed transaction history.'
    },
    {
      id: 3,
      question: 'How do I transfer money to another account?',
      answer: 'Go to the Transfer section in your account. Enter the recipient\'s account number, the amount you wish to transfer, and add a note if needed. Review the details and confirm the transaction.'
    },
    {
      id: 4,
      question: 'What should I do if I notice unauthorized transactions?',
      answer: 'Immediately contact our support team at the phone number provided below. We will help you secure your account and investigate any suspicious activity. You can also freeze your account temporarily from the Security settings.'
    },
    {
      id: 5,
      question: 'How do I update my personal information?',
      answer: 'Navigate to the Profile section in your account settings. You can update your contact information, address, and other personal details. Changes may require verification for security purposes.'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id)
  }

  return (
    <div className="support-container">
      <div className="support-header">
        <h1>Customer Support</h1>
        <p>We're here to help you with any questions or concerns</p>
      </div>

      <div className="support-content">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-cards">
            <div className="contact-card">
              <FaPhone className="contact-icon" />
              <h3>Phone Support</h3>
              <p>+1 (800) 123-4567</p>
              <span className="availability">24/7 Available</span>
            </div>
            <div className="contact-card">
              <FaEnvelope className="contact-icon" />
              <h3>Email Support</h3>
              <p>support@banking.com</p>
              <span className="availability">Response within 24 hours</span>
            </div>
            <div className="contact-card">
              <FaHeadset className="contact-icon" />
              <h3>Live Chat</h3>
              <p>Chat with an agent</p>
              <span className="availability">Available 9 AM - 6 PM</span>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map(faq => (
              <div key={faq.id} className={`faq-item ${activeFaq === faq.id ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(faq.id)}>
                  <FaQuestionCircle className="faq-icon" />
                  <span>{faq.question}</span>
                  <span className="faq-toggle">{activeFaq === faq.id ? '−' : '+'}</span>
                </div>
                {activeFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          {submitted && (
            <div className="success-message">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="What is this regarding?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="6"
                placeholder="Please describe your issue or question in detail"
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="additional-info">
          <div className="info-item">
            <FaClock className="info-icon" />
            <div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Head Office</h3>
              <p>123 Banking Street</p>
              <p>Financial District, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support