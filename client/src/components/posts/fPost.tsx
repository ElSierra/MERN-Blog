import { padding } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export default function FPost(props: any) {

  const reduceLength = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "....": str;
  };

return(<article className="item is-featured is-small is-image" style={{width: '100%',}}>
<div className="item-image global-image global-featured-orientation global-radius">
  <Link className="global-link" to ={`/blog/${props.content._id}`}></Link>
  <img
    src= {props.content.img} alt = {props.content.title}
  />
  <div className="item-authors global-authors">
    <div>
      <div className="item-author global-item-author is-image global-image">

      <Link className="global-link" title={props.content.authorName} to={`/author/${props.content.id}`}></Link>
       
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
  <div className="item-tags global-tags">
    <a>{reduceLength(props.content.content, 180)}</a>
    
  </div>
  <h1 className="item-title" style={{maxWidth: '100%', textAlign: 'center'}}>
  <Link to={`/blog/${props.content._id}`}>
            {props.content.title}
          </Link>
  </h1>
  
</div>
</article>);

}
