import React from "react";

export default function Welcome(props:any) {
    return(<div className="hero-content global-padding">
    <h1 className="hero-title hero-title-large">
      <span>Hey, {props.userInfo.name || 'User'}.</span>  {props.userInfo.userType === "reader" ?' See our thoughts, stories and ideas.': 'Write your thoughts and ideas'}
    </h1>
    <div className="subscribe-section">
      <div className="subscribe-wrap">
        <form
          data-members-form="subscribe"
          className="subscribe-form"
        >
          {props.userInfo.name === "" ?
          <button className="global-button" type="submit">
            Signup/Login
          </button>: ""} 
        </form>
        <div className="subscribe-form-caption">
         { props.userInfo.name === "" ? 'Signup as either a writer or reader' : `You're a ${props.userInfo.userType}`}
        </div>
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
  </div>);
}