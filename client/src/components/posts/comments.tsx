import React from "react";
import Avatar from "react-avatar";

function CommentBox(props: any) {
  return (
    <div className="parent ">
    <img
          className="child profile-pic"
          src={
            props.comment.img
          }
        width= '50px'
         
       
        />
      <div className="child">
      
        <h5 className="comment-title" >
          <a href="#">{props.comment.name}</a>
        </h5>
        <p className="comment-p">{props.comment.date} </p>
      </div>
      <div className="desc">
        <p className="comment">{props.comment.comment}</p>
        <div className="d-flex justify-content-between"></div>
      </div>
    </div>
  );
}

export default CommentBox;
