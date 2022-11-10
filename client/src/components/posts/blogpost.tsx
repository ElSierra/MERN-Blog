import React from "react";

export default function Blog() {
  return (
    <article className="item is-loop is-image">
      <div className="item-image global-image global-image-orientation global-radius">
        <a
          href="/creating-is-a-privilege-but-its-also-a-gift/"
          className="global-link"
          aria-label="Creating is a privilege but it’s also a gift"
        ></a>
        <img
          srcSet="/content/images/size/w300/2022/03/photo-1640447051222-3023288a492b.jpeg 300w, 
 /content/images/size/w600/2022/03/photo-1640447051222-3023288a492b.jpeg 600w,
 /content/images/size/w1200/2022/03/photo-1640447051222-3023288a492b.jpeg 1200w"
          sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
          src="/content/images/size/w1200/2022/03/photo-1640447051222-3023288a492b.jpeg"
          loading="lazy"
          alt=""
        />
        <div className="item-authors global-authors">
          <div>
            <div className="item-author global-item-author is-image global-image">
              <a
                href="/author/nichole/"
                className="global-link"
                title="Nichole Becker"
              ></a>
              <img
                src="/content/images/size/w300/2022/03/joshua-oyebanji-kMC1v6rBHMI-unsplash-2.jpg"
                loading="lazy"
                alt="Nichole Becker"
              />{" "}
            </div>
            <div className="item-author global-item-author is-image global-image">
              <a
                href="/author/daryl/"
                className="global-link"
                title="Daryl Wehner"
              ></a>
              <img
                src="/content/images/size/w300/2022/03/kazi-mizan-ItjRqGiei5g-unsplash.jpg"
                loading="lazy"
                alt="Daryl Wehner"
              />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="item-content">
        <div className="item-tags global-tags">
          <a href="/tag/lifestyle/">Lifestyle</a>
          <span>
            <a href="/tag/people/">People</a>
            <a href="/tag/review/">Review</a>
          </span>
        </div>
        <h2 className="item-title">
          <a href="/creating-is-a-privilege-but-its-also-a-gift/">
            Creating is a privilege but it’s also a gift
          </a>
        </h2>
        <p className="item-excerpt">
          Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras
          molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu
          venenatis justo. Nullam felis augue, imperdiet at sodales a,
          sollicitudin nec risus.
        </p>
      </div>
    </article>
  );
}
