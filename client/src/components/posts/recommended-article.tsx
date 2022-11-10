import React from 'react';

export default function RecomendedArticle(){
    return( <article className="item is-special is-image">
    <div className="item-image global-image global-image-orientation global-radius">
      <a
        href="/the-trick-to-getting-more-done-is-to-have-the-freedom-to-roam-around/"
        className="global-link"
        aria-label="The trick to getting more done is to have the freedom to roam around"
      ></a>
      <img
        srcSet="/content/images/size/w300/2022/03/photo-1631016800696-5ea8801b3c2a.jpeg 300w, 
 /content/images/size/w600/2022/03/photo-1631016800696-5ea8801b3c2a.jpeg 600w"
        sizes="(max-width:480px) 300px, 600px"
        src="/content/images/size/w600/2022/03/photo-1631016800696-5ea8801b3c2a.jpeg"
        loading="lazy"
        alt=""
      />
      <div className="item-authors global-authors">
        <div>
          <div className="item-author global-item-author is-image global-image">
            <a
              href="/author/breana/"
              className="global-link"
              title="Breana Flatley"
            ></a>
            <img
              src="/content/images/size/w300/2022/03/alison-erickson-Zt8IkNfhk54-unsplash.jpg"
              loading="lazy"
              alt="Breana Flatley"
            />{" "}
          </div>
        </div>
      </div>
    </div>
    <div className="item-content">
      <h2 className="item-title">
        <a href="/the-trick-to-getting-more-done-is-to-have-the-freedom-to-roam-around/">
          The trick to getting more done is to have the freedom to roam
          around
        </a>
      </h2>
    </div>
  </article>);
}