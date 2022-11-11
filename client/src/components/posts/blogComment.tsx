import React, { useState } from "react";
import axios from "axios";
import Avatar from "react-avatar";
function Comment(props: any) {
  const [comment, setcomment] = useState("");
  function updateContent(e: any) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    let date = mm + "/" + dd + "/" + yyyy;

    // console.log(formData);
    axios
      .post("/api/comments", {
        env: process.env.REACT_APP_API_KEY,
        id: props.blogId,
        comment: comment,
        name: props.userInfo.name,
        img: props.userInfo.picture,
        date: date,

        // env: process.env.REACT_APP_API_KEY,
        // title: blogPost.title,
        // content: blogPost.content,
        // date: blogPost.date,
        // img: formData,
        // authorName: blogPost.authorName,
        // authorImg: blogPost.imgUrl,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

    e.preventDefault();
    setcomment('');
    props.refreshComment();
  }
  function onChange(e: any){
   let value = e.target.value;
   console.log(value);
   setcomment(value);
  }

  return (
    <div className="custom-content" style={{ margin: '2%'}}>
          <form
            className="form-contact comment_form"
            action="#"
            id="commentForm"
          >
            
            
            <div className="row">
            

              <div className="form-group">
                <textarea
                  style={{ maxWidth: "inherit" , resize: 'none' }}
                  className="form-control w-100"
                  name={props.name}
                  id={props.id}
                  cols={50}
                  rows={3}
                  value={comment}
                  placeholder={props.name}
                  onChange={(e) => {
                   onChange(e);
                  }}
                ></textarea>
              
                <button
                style={{ fontSize: '12px'}}
                  type="submit"
                  className="global-button"
                  onClick={(e) => {
                  
                    updateContent(e);
                  }}
                >
                  Post comment
                </button>
              </div>
            </div>
            
          </form>
        </div>
  );
}

export default Comment;
