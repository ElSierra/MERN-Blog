import React from "react";
import { Link } from "react-router-dom";

export default function Authors(props: any) {
  
  return (
    <div className="global-item-author is-image global-image">
        <Link
                    className="global-link"
                    to={`/author/${props.user._id}`}
                    state={
                      {
                        // id: props.id,
                        // title: props.title,
                        // content: props.content,
                        // date: props.date,
                        // postImg: props.postImg,
                        // authorName: props.authorName,
                        // authorImg: props.authorImg,
                      }
                    }
                  >
                  
                  </Link>
     
      <img
        src={props.user.picture}
        loading="lazy"
        alt={props.user.name}
      />{" "}
    </div>
  );
}
