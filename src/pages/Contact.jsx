function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;