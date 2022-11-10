import React from "react";

export default function FPost(props: any) {

return(<article className="item is-featured is-small is-image">
<div className="item-image global-image global-image-orientation global-radius">
  <a
    href="/new-technology-is-not-good-or-evil-in-and-of-itself/"
    className="global-link"
    aria-label="New technology is not good or evil in and of itself"
  ></a>
  <img
    srcSet="/content/images/size/w300/2022/03/photo-1559650656-5d1d361ad10e.jpeg 300w, 
/content/images/size/w600/2022/03/photo-1559650656-5d1d361ad10e.jpeg 600w,
/content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpeg 1200w"
    sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
    src="/content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpeg"
    loading="lazy"
    alt=""
  />
  <div className="item-authors global-authors">
    <div>
      <div className="item-author global-item-author is-image global-image">
        <a
          href="/author/liza/"
          className="global-link"
          title="Liza Harber"
        ></a>
        <img
          src="/content/images/size/w300/2022/03/good-faces-onKIR2oTW0o-unsplash.jpg"
          loading="lazy"
          alt="Liza Harber"
        />{" "}
      </div>
    </div>
  </div>
</div>
<div className="item-content">
  <div className="item-tags global-tags">
    <a href="/tag/design/">Design</a>
    <span>
      <a href="/tag/idea/">Idea</a>
      <a href="/tag/review/">Review</a>
    </span>
  </div>
  <h2 className="item-title">
    <a href="/new-technology-is-not-good-or-evil-in-and-of-itself/">
      New technology is not good or evil in and of itself
    </a>
  </h2>
  <p className="item-excerpt">
    Vestibulum vehicula dui venenatis neque tempor, accumsan
    iaculis sapien ornare. Sed at ante porta, ullamcorper
    massa eu, ullamcorper sapien. Donec pretium tortor augue.
    Integer egestas ut tellus sed pretium. Nullam tristique
    augue ut mattis vulputate. Duis et lorem in odio ultricies
    porttitor.
  </p>
</div>
</article>);

}
