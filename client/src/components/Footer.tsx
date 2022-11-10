import React from "react";

export default function Footer() {
    return(
        <footer className="footer-section global-footer">
        <div className="footer-wrap global-padding">
          <div className="footer-subscribe">
            <h3 className="global-title">
              Subscribe to <span>new posts</span>
            </h3>
            <div className="subscribe-section">
              <div className="subscribe-wrap">
                <form
                  data-members-form="subscribe"
                  className="subscribe-form"
                >
                  <input
                    data-members-email
                    type="email"
                    placeholder="Your email address"
                    aria-label="Your email address"
                    required
                  />
                  <button className="global-button" type="submit">
                    Subscribe
                  </button>
                </form>
                <div className="subscribe-alert">
                  <small className="alert-loading global-alert">
                    Processing your application
                  </small>
                  <small className="alert-success global-alert">
                    Please check your inbox and click the link to confirm
                    your subscription.
                  </small>
                  <small className="alert-error global-alert">
                    There was an error sending the email
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-logo">
                <a href="/" className="is-logo">
                  <img
                    src="/logo.png"
                    alt="IOI"
                  />
                </a>
              </div>
              <p className="footer-description">
                Html + CSS From Basho (80%), React From Me. BackEnd by me
              </p>
            </div>
           
            <div className="footer-copyright">
              &copy; <a href="/">IOI</a> 2022.
              
              
            </div>
          </div>
        </div>
      </footer>
    )
}