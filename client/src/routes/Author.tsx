import { userInfo, users } from "../userInterface";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import loadScript from "../jsImport";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Author() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [userBio, setUserBio] = useState<users>(userInfo);
  const {  id } = useParams();
  const loggedIn = JSON.parse((localStorage.getItem("userInfo"))|| '{"_id":"","name":"","email":"","picture":"","googleId":"","userType":""}')

  useEffect(() => {
    loadScript();
    axios
      .get(`/api/author/${id}`)
      .then((res) => {
        console.log(res.data);
        setUserBio(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <body className="author-template author-liza">
      <div className="global-wrap">
        <div className="global-content">
          <Header userInfo={loggedIn} />
          <main className="global-main">
            <div className="archive-section is-image">
              <div className="archive-image global-image">
                <img src={userBio.picture} loading="lazy" alt={userBio.name} />
              </div>
              <h1 className="archive-title global-title">{userBio.name}</h1>

              <p className="">{userBio.email}</p>
            </div>
            <div className="loop-section global-padding">
              <div className="global-subtitle">
                <small className="global-subtitle-title">
                  Check out {loggedIn._id === id ?'Your' : 'Their'} <span>latest posts</span>
                </small>
              </div>
              <div className="loop-wrap">
                <article className="item is-loop is-image">
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
                          />
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
                </article>
                <article className="item is-loop is-image">
                  <div className="item-image global-image global-image-orientation global-radius">
                    <a
                      href="/i-work-best-when-my-space-is-filled-with-inspiration/"
                      className="global-link"
                      aria-label="I work best when my space is filled with inspiration"
                    ></a>
                    <img
                      srcSet="/content/images/size/w300/2022/03/photo-1593259037198-c720f4420d7f.jpeg 300w, 
                     /content/images/size/w600/2022/03/photo-1593259037198-c720f4420d7f.jpeg 600w,
                     /content/images/size/w1200/2022/03/photo-1593259037198-c720f4420d7f.jpeg 1200w"
                      sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                      src="/content/images/size/w1200/2022/03/photo-1593259037198-c720f4420d7f.jpeg"
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
                          />
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-content">
                    <div className="item-tags global-tags">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.445 9.333V6.667C5.445 2.985 8.38 0 12 0c3.62 0 6.554 2.985 6.554 6.667v2.666s2.622 1.214 2.622 6c0 4.787-3.815 8.667-8.52 8.667h-1.312c-4.706 0-8.52-3.88-8.52-8.667 0-4.786 2.621-6 2.621-6zm10.487 0V6.667c0-2.21-1.76-4-3.932-4-2.172 0-3.933 1.79-3.933 4v2.666h7.865z" />
                      </svg>
                      <a href="/tag/creative/">Creative</a>
                      <span>
                        <a href="/tag/idea/">Idea</a>
                        <a href="/tag/lifestyle/">Lifestyle</a>
                      </span>
                    </div>
                    <h2 className="item-title">
                      <a href="/i-work-best-when-my-space-is-filled-with-inspiration/">
                        I work best when my space is filled with inspiration
                      </a>
                    </h2>
                    <p className="item-excerpt">
                      Quae in controversiam veniunt, de iis, si placet,
                      disseramus. Iam quae corporis sunt, ea nec auctoritatem
                      cum animi partibus. Duo enim genera quae erant, fecit
                      tria. Et quod est munus, quod opus sapientiae.
                    </p>
                  </div>
                </article>
                <article className="item is-loop is-image">
                  <div className="item-image global-image global-image-orientation global-radius">
                    <a
                      href="/the-difference-is-quality/"
                      className="global-link"
                      aria-label="The difference is quality"
                    ></a>
                    <img
                      srcSet="/content/images/size/w300/2022/03/photo-1603015268928-a9f7b3edaf27.jpeg 300w, 
                     /content/images/size/w600/2022/03/photo-1603015268928-a9f7b3edaf27.jpeg 600w,
                     /content/images/size/w1200/2022/03/photo-1603015268928-a9f7b3edaf27.jpeg 1200w"
                      sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                      src="/content/images/size/w1200/2022/03/photo-1603015268928-a9f7b3edaf27.jpeg"
                      loading="lazy"
                      alt=""
                    />
                    <div className="item-authors global-authors">
                      <div>
                        <div className="item-author global-item-author is-image global-image">
                          <a
                            href="/author/brenda/"
                            className="global-link"
                            title="Brenda Reichel"
                          ></a>
                          <img
                            src="/content/images/size/w300/2022/03/matheus-ferrero-dlYiklmLIGg-unsplash.jpg"
                            loading="lazy"
                            alt="Brenda Reichel"
                          />
                        </div>
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-content">
                    <div className="item-tags global-tags">
                      <a href="/tag/design/">Design</a>
                      <span>
                        <a href="/tag/lifestyle/">Lifestyle</a>
                        <a href="/tag/idea/">Idea</a>
                      </span>
                    </div>
                    <h2 className="item-title">
                      <a href="/the-difference-is-quality/">
                        The difference is quality
                      </a>
                    </h2>
                    <p className="item-excerpt">
                      Vide, ne etiam menses! nisi forte eum dicis, qui, simul
                      atque arripuit, interficit. Atque his de rebus et
                      splendida est eorum et illustris oratio.
                    </p>
                  </div>
                </article>
              </div>
            </div>
            <div className="pagination-section"></div>
          </main>
          <footer className="footer-section global-footer">
            <div className="footer-wrap global-padding">
              <div className="footer-subscribe">
                <h3 className="global-title">
                  Subscribe to <span>new posts</span>
                </h3>
                <div className="subscribe-section">
                  <div className="subscribe-wrap">
                    <form
                      data-members-form="subscribe"
                      className="subscribe-form"
                    >
                      <input
                        data-members-email
                        type="email"
                        placeholder="Your email address"
                        aria-label="Your email address"
                        required
                      />
                      <button className="global-button" type="submit">
                        Subscribe
                      </button>
                    </form>
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
              </div>
              <div className="footer-container">
                <div className="footer-content">
                  <div className="footer-logo">
                    <a href="https://basho.fueko.net" className="is-logo">
                      <img
                        src="https://basho.fueko.net/content/images/2022/01/basho.svg"
                        alt="Basho home"
                      />
                    </a>
                  </div>
                  <p className="footer-description">
                    A minimal, functional theme for running a paid-membership
                    publication on Ghost.
                  </p>
                </div>
                <div className="footer-nav">
                  <div className="footer-nav-column is-social">
                    <small>Social</small>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/ghost">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                          </svg>
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/fuekothemes">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                          </svg>
                          Twitter
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7.168 0c-3.2 0-5.797 2.579-5.797 5.758v12.484C1.371 21.42 3.968 24 7.168 24c1.981 0 3.716-.978 4.768-2.479l.794.79c2.26 2.245 5.943 2.245 8.203 0a5.724 5.724 0 001.696-4.075 5.724 5.724 0 00-1.696-4.074l-2.182-2.168 2.182-2.156a5.724 5.724 0 001.696-4.074 5.724 5.724 0 00-1.696-4.074c-2.26-2.246-5.942-2.246-8.203 0l-.794.789A5.797 5.797 0 007.168 0Z" />
                          </svg>
                          Kickstarter
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                          </svg>
                          Vimeo
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-nav-column">
                    <small>About</small>
                    <ul>
                      <li>
                        <a href="https://basho.fueko.net/style-guide/">
                          Style Guide
                        </a>
                      </li>
                      <li>
                        <a href="https://basho.fueko.net/features/">Features</a>
                      </li>
                      <li>
                        <a href="https://basho.fueko.net/contact/">Contact</a>
                      </li>
                      <li>
                        <a href="https://basho.fueko.net/404/">404</a>
                      </li>
                      <li>
                        <a href="https://themeforest.net/item/basho-multipurpose-ghost-blog-theme/36746216">
                          Get Theme
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-nav-column">
                    <small>Features</small>
                    <ul>
                      <li>
                        <a href="https://basho.fueko.net/demos/">Demos</a>
                      </li>
                      <li>
                        <a href="https://basho.fueko.net">Light version</a>
                      </li>
                      <li>
                        <a href="https://basho-color.fueko.net">
                          Color version
                        </a>
                      </li>
                      <li>
                        <a href="https://basho-partial.fueko.net">
                          Partial version
                        </a>
                      </li>
                      <li>
                        <a href="https://basho-dark.fueko.net">Dark version</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-nav-column">
                    <small>Membership</small>
                    <ul>
                      <li>
                        <a href="https://basho.fueko.net/demo-account-member/">
                          Account
                        </a>
                      </li>
                      <li>
                        <a href="https://basho.fueko.net/membership/">
                          Membership
                        </a>
                      </li>
                      <li>
                        <a href="https://basho.fueko.net/subscribe/">
                          Subscribe
                        </a>
                      </li>
                      <li>
                        <a href="https://basho.fueko.net/tags/">Tags</a>
                      </li>
                      <li>
                        <a href="https://basho.fueko.net/authors/">Authors</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-copyright">
                  &copy; <a href="https://basho.fueko.net">Basho</a> 2022.
                  Published with{" "}
                  <a
                    href="https://ghost.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ghost
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://fueko.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Basho
                  </a>
                  .
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div id="notifications" className="global-notification">
        <div className="subscribe">You’ve successfully subscribed to Basho</div>
        <div className="signin">
          Welcome back! You’ve successfully signed in.
        </div>
        <div className="signup">Great! You’ve successfully signed up.</div>
        <div className="update-email">Success! Your email is updated.</div>
        <div className="expired">Your link has expired</div>
        <div className="checkout-success">
          Success! Check your email for magic link to sign-in.
        </div>
      </div>
      <div className="search-section">
        <div className="search-wrap">
          <div className="search-content">
            <form className="search-form">
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
              <div className="search-meta">
                <span className="search-info">
                  Please enter at least 3 characters
                </span>
                <span className="search-counter is-hide">
                  <span className="search-counter-results">0</span>
                  Results for your search
                </span>
              </div>
              <span className="search-close">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.997 10.846L1.369.219 1.363.214A.814.814 0 00.818.005.821.821 0 000 .822c0 .201.074.395.208.545l.006.006L10.842 12 .214 22.626l-.006.006a.822.822 0 00-.208.546c0 .447.37.817.818.817a.814.814 0 00.551-.215l10.628-10.627 10.628 10.628.005.005a.816.816 0 001.368-.603.816.816 0 00-.213-.552l-.006-.005L13.151 12l10.63-10.627c.003 0 .004-.003.006-.005A.82.82 0 0024 .817a.817.817 0 00-1.37-.602l-.004.004-10.63 10.627z" />
                </svg>
              </span>
            </form>
            <div className="search-results global-image"></div>
          </div>
        </div>
        <div className="search-overlay"></div>
      </div>
    </body>
  );
}
