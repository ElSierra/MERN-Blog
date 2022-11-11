import React from "react";

export default function Footer() {
    return(
        <footer className="footer-section global-footer">
        <div className="footer-wrap global-padding">
        
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