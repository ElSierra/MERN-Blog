import React from "react";

export default function Blog() {
  return (
    <body className="post-template tag-design tag-idea tag-review">
      <div className="global-wrap">
        <div className="global-content">
          <header className="header-section">
            <div className="header-wrap global-padding">
              <div className="header-logo">
                <a href="https://basho.fueko.net" className="is-logo">
                  <img
                    src="https://basho.fueko.net/content/images/2022/01/basho.svg"
                    alt="Basho home"
                  />
                </a>
              </div>
              <div className="header-nav">
                <span className="header-search search-open is-mobile">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z" />
                  </svg>
                </span>
                <input
                  id="toggle"
                  className="header-checkbox"
                  type="checkbox"
                />
                <label className="header-toggle" htmlFor="toggle">
                  <span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </span>
                </label>
                <nav>
                  <ul>
                    <li>
                      <a href="https://basho.fueko.net/demos/">Demos</a>
                    </li>
                    <li>
                      <a href="https://basho.fueko.net/style-guide/">
                        Style Guide
                      </a>
                    </li>
                    <li>
                      <a href="https://basho.fueko.net/membership/">
                        Membership
                      </a>
                    </li>
                    <li className="is-dropdown">
                      <span>
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m11.974 18.908.019.002.025.001c.085 0 .166-.034.226-.094L23.906 7.155A.32.32 0 0 0 24 6.928c0-.085-.034-.166-.094-.227l-1.519-1.518a.3217.3217 0 0 0-.454 0l-9.94 9.94-9.927-9.926a.3218.3218 0 0 0-.227-.094c-.085 0-.167.034-.227.094L.094 6.716a.3217.3217 0 0 0 0 .454l11.647 11.647c.06.06.142.094.227.094l.006-.003Z" />
                        </svg>
                      </span>
                      <ul>
                        <li>
                          <a href="https://basho.fueko.net/features/">
                            Features
                          </a>
                        </li>
                        <li>
                          <a href="https://basho.fueko.net/tags/">Tags</a>
                        </li>
                        <li>
                          <a href="https://basho.fueko.net/authors/">Authors</a>
                        </li>
                        <li>
                          <a href="https://basho.fueko.net/subscribe/">
                            Subscribe
                          </a>
                        </li>
                        <li>
                          <a href="https://basho.fueko.net/contact/">Contact</a>
                        </li>
                        <li>
                          <a href="https://themeforest.net/item/basho-multipurpose-ghost-blog-theme/36746216">
                            Get Theme
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="header-search search-open is-desktop global-button">
                      <span>
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z" />
                        </svg>
                        Search
                      </span>
                    </li>
                    <li className="signup">
                      <a
                        href="https://basho.fueko.net/signup/"
                        className="global-button"
                      >
                        Join
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>{" "}
          <main className="global-main">
            <progress className="post-progress"></progress>
            <article className="post-section">
              <div className="post-header">
                <div className="post-header-wrap global-padding">
                  <div className="post-header-container">
                    <div className="post-header-content">
                      <div>
                        <div className="post-tags global-tags">
                          <a href="/tag/design/">Design</a>
                          <a href="/tag/idea/">Idea</a>
                          <a href="/tag/review/">Review</a>
                        </div>
                        <h1 className="post-title global-title">
                          New technology is not good or evil in and of itself
                        </h1>
                        <p className="post-excerpt global-excerpt">
                          Vestibulum vehicula dui venenatis neque tempor,
                          accumsan iaculis sapien ornare. Sed at ante porta,
                          ullamcorper massa eu, ullamcorper sapien. Donec
                          pretium tortor augue. Integer egestas ut tellus sed
                          pretium. Nullam tristique augue ut mattis vulputate.
                          Duis et lorem in odio ultricies porttitor.
                        </p>
                      </div>
                      <div className="post-meta">
                        <div className="post-authors global-authors">
                          <div>
                            <div className="post-item-author global-item-author is-image global-image">
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
                        <div className="post-meta-content">
                          <a href="/author/liza/">Liza Harber</a>
                          <time dateTime="2022-01-19">
                            January 19, 2022 — 3 minutes read
                          </time>
                        </div>
                      </div>
                    </div>
                    <div className="post-header-image">
                      <figure>
                        <div className="global-image global-image-orientation global-radius">
                          <img
                            srcSet="/content/images/size/w300/2022/03/photo-1559650656-5d1d361ad10e.jpeg 300w, 
			 /content/images/size/w600/2022/03/photo-1559650656-5d1d361ad10e.jpeg 600w,
			 /content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpeg 1200w"
                            sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                            src="/content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpeg"
                            alt="New technology is not good or evil in and of itself"
                          />
                        </div>
                        <figcaption>
                          Photo by{" "}
                          <a href="https://unsplash.com/@brandomakesbranding?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">
                            Brando Makes Branding
                          </a>{" "}
                          /{" "}
                          <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">
                            Unsplash
                          </a>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="post-content global-padding">
                <p>
                  Anteger venenatis hendrerit quam nec ultrices. Vestibulum
                  vehicula dui venenatis neque tempor, accumsan iaculis sapien
                  ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper
                  sapien. Duis sapien eros, laoreet ac tempus ut, auctor vel
                  nulla. Nunc tincidunt, risus eu congue gravida, ligula dolor
                  sodales felis, in finibus nunc est quis leo.{" "}
                </p>
                <div className="post-share-section">
                  <small>Share this post</small>
                  <div className="post-share-wrap">
                    <a
                      href="https://twitter.com/intent/tweet?text=New%20technology%20is%20not%20good%20or%20evil%20in%20and%20of%20itself&amp;url=https://basho.fueko.net/new-technology-is-not-good-or-evil-in-and-of-itself/"
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
                      href="https://www.facebook.com/sharer/sharer.php?u=https://basho.fueko.net/new-technology-is-not-good-or-evil-in-and-of-itself/"
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
                    value="https://basho.fueko.net/new-technology-is-not-good-or-evil-in-and-of-itself/"
                    id="copy-link"
                    aria-label="Copy link input"
                  />
                </div>{" "}
              </div>
            </article>
            <aside className="navigation-section global-padding">
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
            </div>
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
          </footer>{" "}
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
