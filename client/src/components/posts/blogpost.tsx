import React from "react";
import { Link } from "react-router-dom";

export default function Blog(props: any) {
  return (
    <article className="item is-loop is-image">
      <div className="item-image global-image global-image-orientation global-radius">
        <Link
          className="global-link"
          to={`/blog/${props.content._id}`}
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
        ></Link>
        <img src={props.content.img} />
        <div className="item-authors global-authors">
          <div>
            <div className="item-author global-item-author is-image global-image">
              <Link
                className="global-link"
                to={`/author/${props.content.id}`}
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
                src={props.content.authorImg}
                loading="lazy"
                alt={props.content.authorName}
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="item-content">
        {/*  <div className="item-tags global-tags">
          <a href="/tag/lifestyle/">Lifestyle</a>
          <span>
            <a href="/tag/people/">People</a>
            <a href="/tag/review/">Review</a>
          </span>
        </div> */}

        <h2 className="item-title">
          <Link
            to={`/blog/${props.content._id}`}
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
            {props.content.title}
          </Link>
        </h2>
        <p className="item-excerpt">{props.content.content}</p>
      </div>
    </article>
  );
}
