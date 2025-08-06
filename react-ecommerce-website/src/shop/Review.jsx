import React, { useState } from "react";
const reviewtitle = "Add a Review";
import Ratting from "../components/Ratting";

const ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovative initiatives before long-term high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewshow, setReviewShow] = useState(true);

  return (
    <div className="review-section">
      <ul
        className={`review-nav lab-ul ${
          reviewshow ? "RevActive" : "DescActive"
        }`}
      >
        <li
          className={`desc ${!reviewshow ? "active" : ""}`}
          onClick={() => setReviewShow(false)}
        >
          Description
        </li>
        <li
          className={`rev ${reviewshow ? "active" : ""}`}
          onClick={() => setReviewShow(true)}
        >
          Reviews ({ReviewList.length})
        </li>
      </ul>

      <div
        className={`review-content ${
          reviewshow ? "review-content-show" : "description-show"
        }`}
      >
        {reviewshow ? (
          <div className="review-showing">
            <ul className="content lab-ul">
              {ReviewList.map((review, i) => (
                <li key={i} className="review-item d-flex mb-3">
                  <div className="post-thumb me-3">
                    <img
                      src={review.imgUrl}
                      alt={review.imgAlt}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta mb-1">
                      <h6 className="mb-0">{review.name}</h6>
                      <small className="text-muted">{review.date}</small>
                    </div>
                    <p className="mb-0">{review.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            {/* add review field */}
            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviewtitle}</h5>
                </div>

                <form action="action" className="row">
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="rating">
                      <span>Your Rating</span>
                      <Ratting />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <textarea
                      name="message"
                      id="message"
                      rows="8"
                      placeholder="Type Here Mesage"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="default-button">
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="description-content p-3 border rounded">
            <h5>Course Description</h5>
            <p>
              This course provides in-depth insight into innovative strategies
              and long-term impactful leadership solutions. Designed to empower
              learners with real-world applications, the content covers
              everything from PSD templates to SEO-driven themes.
            </p>
            <div className="post-item">
              <div className="post-thumb">
                <img src="/src/assets/images/shop/01.jpg" alt="" />
              </div>
              <div className="post-content">
                <ul className="lab-ul">
                  <li>
                    ★ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, soluta?
                  </li>
                  <li>
                    ★ Amet consectetur adipisicing elit. Pariatur, soluta?
                  </li>
                  <li>
                    ★ Amet consectetur adipisicing elit. Pariatur, soluta?
                  </li>
                  <li>★ Lorem ipsum dolor sit amet t. Pariatur, soluta?</li>
                  <li>
                    ★ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, soluta?
                  </li>
                  <li>
                    ★ Lorem ipsum dolor sit amet ng elit. Pariatur, soluta?
                  </li>
                  <li>
                    ★ Lorem ipsum dolor sit amet consectng elit. Pariatur,
                    soluta?
                  </li>
                </ul>

                <p>
                  This course provides in-depth insight into innovative
                  strategies and long-term impactful leadership solutions.
                  Designed to empower learners with real-world applications, the
                  content covers everything from PSD templates to SEO-driven
                  themes.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
