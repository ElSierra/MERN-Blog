import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import loadScript from "../jsImport";
import { blog, blogInfo } from "../userInterface";

//calculate minutes read based on words amount
function calculateTimeToRead(content: string) {
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  return Math.ceil(noOfWords / wordsPerMinute);
}

export default function Blog() {
  const [blog, setBlog] = useState<blog>(blogInfo);
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    loadScript();
    axios
      .get(`/api/singlepost/${id}`)
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const User = JSON.parse(
    localStorage.getItem("userInfo") ||
      '{"_id":"","name":"","email":"","picture":"","googleId":"","userType":""}'
  );
  return (
    <body className="post-template tag-design tag-idea tag-review">
      <div className="global-wrap">
        <div className="global-content">
          <Header userInfo={User} />
          <main className="global-main">
            <progress className="post-progress"></progress>
            <article className="post-section">
              <div className="post-header">
                <div className="post-header-wrap global-padding">
                  <div className="post-header-container">
                    <div className="post-header-content">
                      <div>
                        {/* <div className="post-tags global-tags">
                          <a href="/tag/design/">Design</a>
                          <a href="/tag/idea/">Idea</a>
                          <a href="/tag/review/">Review</a>
                        </div> */}
                        <h1 className="post-title global-title">
                          {blog.title}
                        </h1>
                        <p className="">{blog.content}</p>
                      </div>
                      <div className="post-meta">
                        <div className="post-authors global-authors">
                          <div>
                            <div className="post-item-author global-item-author is-image global-image">
                              <Link
                                className="global-link"
                                to={`/author/${blog.id}`}
                              >
                                Profile
                              </Link>
                              <img
                                src={blog.authorImg}
                                loading="lazy"
                                alt={blog.authorName}
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div className="post-meta-content">
                          <Link to={`/author/${blog.id}`}>
                            {blog.authorName}
                          </Link>
                          <time>
                            {blog.date} — {calculateTimeToRead(blog.content)}{" "}
                            minutes read
                          </time>
                        </div>
                      </div>
                    </div>
                    <div className="post-header-image">
                      <figure>
                        <div className="global-image global-image-orientation global-radius">
                          <img
                            src={blog.img}
                            alt="New technology is not good or evil in and of itself"
                          />
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="post-content global-padding">
                <div className="post-share-section">
                  <small>Share this post</small>
                  <div className="post-share-wrap" style={{ right: "0%" }}>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${blog.title}&amp;url=${window.location.href}`}
                      target="_blank"
                      rel="noopener"
                      aria-label="Share on Twitter"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                      target="_blank"
                      rel="noopener"
                      aria-label="Share on Facebook"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&amp;title=New%20technology%20is%20not%20good%20or%20evil%20in%20and%20of%20itself&amp;url=https://basho.fueko.net/new-technology-is-not-good-or-evil-in-and-of-itself/"
                      target="_blank"
                      rel="noopener"
                      aria-label="Share on Linkedin"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="javascript:"
                      className="post-share-link"
                      id="copy"
                      data-clipboard-target="#copy-link"
                      aria-label="Copy link"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 33 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M27.3999996,13.4004128 L21.7999996,13.4004128 L21.7999996,19 L18.9999996,19 L18.9999996,13.4004128 L13.3999996,13.4004128 L13.3999996,10.6006192 L18.9999996,10.6006192 L18.9999996,5 L21.7999996,5 L21.7999996,10.6006192 L27.3999996,10.6006192 L27.3999996,13.4004128 Z M12,20.87 C7.101,20.87 3.13,16.898 3.13,12 C3.13,7.102 7.101,3.13 12,3.13 C12.091,3.13 12.181,3.139 12.272,3.142 C9.866,5.336 8.347,8.487 8.347,12 C8.347,15.512 9.866,18.662 12.271,20.857 C12.18,20.859 12.091,20.87 12,20.87 Z M20.347,0 C18.882,0 17.484,0.276 16.186,0.756 C14.882,0.271 13.473,0 12,0 C5.372,0 0,5.373 0,12 C0,18.628 5.372,24 12,24 C13.471,24 14.878,23.726 16.181,23.242 C17.481,23.724 18.88,24 20.347,24 C26.975,24 32.347,18.628 32.347,12 C32.347,5.373 26.975,0 20.347,0 Z" />
                      </svg>
                    </a>
                    <small className="share-link-info global-alert">
                      The link has been copied!
                    </small>
                  </div>
                  <input
                    type="text"
                    value={window.location.href}
                    id="copy-link"
                    aria-label="Copy link input"
                  />
                </div>{" "}
              </div>
            </article>
            {/* <aside className="navigation-section global-padding">
              <div className="navigation-wrap">
                <a
                  href="/your-voice-your-mind-your-story-your-vision/"
                  className="navigation-next"
                >
                  <div className="navigation-image global-image global-radius">
                    <img
                      src="/content/images/size/w300/2022/03/photo-1635098996111-35c4a66b3b66.jpeg"
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                  <div className="navigation-content">
                    <small>Newer post</small>
                    <br />
                    <h3>Your voice, your mind, your story, your vision</h3>
                  </div>
                </a>
                <a
                  href="/i-work-best-when-my-space-is-filled-with-inspiration/"
                  className="navigation-prev"
                >
                  <div className="navigation-content ">
                    <small>Older post</small>
                    <br />
                    <h3>
                      I work best when my space is filled with inspiration
                    </h3>
                  </div>
                  <div className="navigation-image global-image global-radius">
                    <img
                      src="/content/images/size/w300/2022/03/photo-1593259037198-c720f4420d7f.jpeg"
                      loading="lazy"
                      alt=""
                    />{" "}
                  </div>
                </a>
              </div>
            </aside>
            <div className="comments-section global-padding"></div>
            <div className="special-section global-padding">
              <div className="special-subtitle global-subtitle">
                <small className="global-subtitle-title">
                  You might <span>also like</span>
                </small>
              </div>
              <div className="special-wrap">
                <article className="item is-special is-image">
                  <div className="item-image global-image global-image-orientation global-radius">
                    <a
                      href="/being-unique-is-better-than-being-perfect/"
                      className="global-link"
                      aria-label="Being unique is better than being perfect"
                    ></a>
                    <img
                      srcSet="/content/images/size/w300/2022/03/photo-1630261234684-d22b0892a809.jpeg 300w, 
			 /content/images/size/w600/2022/03/photo-1630261234684-d22b0892a809.jpeg 600w"
                      sizes="(max-width:480px) 300px, 600px"
                      src="/content/images/size/w600/2022/03/photo-1630261234684-d22b0892a809.jpeg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="item-authors global-authors">
                      <div>
                        <div className="item-author global-item-author is-image global-image">
                          <a
                            href="/author/damian/"
                            className="global-link"
                            title="Damian Erdman"
                          ></a>
                          <img
                            src="/content/images/size/w300/2022/03/seth-doyle-wys9Jty8wNQ-unsplash.jpg"
                            loading="lazy"
                            alt="Damian Erdman"
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-content">
                    <h2 className="item-title">
                      <a href="/being-unique-is-better-than-being-perfect/">
                        Being unique is better than being perfect
                      </a>
                    </h2>
                  </div>
                </article>{" "}
                <article className="item is-special is-image">
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
                        The trick to getting more done is to have the freedom to
                        roam around
                      </a>
                    </h2>
                  </div>
                </article>{" "}
                <article className="item is-special is-image">
                  <div className="item-image global-image global-image-orientation global-radius">
                    <a
                      href="/products-is-a-visual-art-and-speak-for-themselves/"
                      className="global-link"
                      aria-label="Products is a visual art, and speak for themselves"
                    ></a>
                    <img
                      srcSet="/content/images/size/w300/2022/03/photo-1595950653106-6c9ebd614d3a.jpeg 300w, 
			 /content/images/size/w600/2022/03/photo-1595950653106-6c9ebd614d3a.jpeg 600w"
                      sizes="(max-width:480px) 300px, 600px"
                      src="/content/images/size/w600/2022/03/photo-1595950653106-6c9ebd614d3a.jpeg"
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
                    <h2 className="item-title">
                      <a href="/products-is-a-visual-art-and-speak-for-themselves/">
                        Products is a visual art, and speak for themselves
                      </a>
                    </h2>
                  </div>
                </article>{" "}
                <article className="item is-special is-image">
                  <div className="item-image global-image global-image-orientation global-radius">
                    <a
                      href="/the-secret-is-to-work-less-as-individuals-and-more-as-a-team/"
                      className="global-link"
                      aria-label="The secret is to work less as individuals and more as a team"
                    ></a>
                    <img
                      srcSet="/content/images/size/w300/2022/03/photo-1619066400673-c973159d4e0f.jpeg 300w, 
			 /content/images/size/w600/2022/03/photo-1619066400673-c973159d4e0f.jpeg 600w"
                      sizes="(max-width:480px) 300px, 600px"
                      src="/content/images/size/w600/2022/03/photo-1619066400673-c973159d4e0f.jpeg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="item-authors global-authors">
                      <div>
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
                    <h2 className="item-title">
                      <a href="/the-secret-is-to-work-less-as-individuals-and-more-as-a-team/">
                        The secret is to work less as individuals and more as a
                        team
                      </a>
                    </h2>
                  </div>
                </article>{" "}
                <article className="item is-special is-image">
                  <div className="item-image global-image global-image-orientation global-radius">
                    <a
                      href="/brand-is-just-a-perception-and-will-match-reality-over-time/"
                      className="global-link"
                      aria-label="Brand is just a perception, and will match reality over time"
                    ></a>
                    <img
                      srcSet="/content/images/size/w300/2022/03/photo-1595683213102-db302aa70c0f.jpeg 300w, 
			 /content/images/size/w600/2022/03/photo-1595683213102-db302aa70c0f.jpeg 600w"
                      sizes="(max-width:480px) 300px, 600px"
                      src="/content/images/size/w600/2022/03/photo-1595683213102-db302aa70c0f.jpeg"
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
                      <a href="/brand-is-just-a-perception-and-will-match-reality-over-time/">
                        Brand is just a perception, and will match reality over
                        time
                      </a>
                    </h2>
                  </div>
                </article>{" "}
                <article className="item is-special is-image">
                  <div className="item-image global-image global-image-orientation global-radius">
                    <a
                      href="/perfection-has-to-do-with-the-end-product/"
                      className="global-link"
                      aria-label="Perfection has to do with the end product"
                    ></a>
                    <img
                      srcSet="/content/images/size/w300/2022/03/photo-1638675039591-c7b3d1bbbd74.jpeg 300w, 
			 /content/images/size/w600/2022/03/photo-1638675039591-c7b3d1bbbd74.jpeg 600w"
                      sizes="(max-width:480px) 300px, 600px"
                      src="/content/images/size/w600/2022/03/photo-1638675039591-c7b3d1bbbd74.jpeg"
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
                      </div>
                    </div>
                  </div>
                  <div className="item-content">
                    <h2 className="item-title">
                      <a href="/perfection-has-to-do-with-the-end-product/">
                        Perfection has to do with the end product
                      </a>
                    </h2>
                  </div>
                </article>{" "}
              </div>
            </div> */}
          </main>
          <Footer />
        </div>
      </div>
    </body>
  );
}
