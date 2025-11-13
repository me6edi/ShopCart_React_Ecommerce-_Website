import React from "react";
import PageHeader from "../components/PageHeader";

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Experiences";
const desc =
  "Distinctively provide access multifunction to users whereas transparent processes sometimes incentivize efficient functionalities rather than extensible architecture to communicate leveraged services and cross-platform.";

const year = "30+";
const experience = "Years Of Experience";

const aboutList = [
  {
    imgUrl: "/src/assets/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Distinctively provide access multifunction to users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Distinctively provide access multifunction to users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Distinctively provide access multifunction to users whereas communicate leveraged services",
  },
];

function About() {
  return (
    <div>
      <PageHeader title="About Our Brand" curPage="About" />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
            {/* Left Column */}
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="/src/assets/images/about/01.jpg" alt="About Thumb" />
                </div>
                <div className="abs-thumb">
                  <img src="/src/assets/images/about/02.jpg" alt="About Thumb Overlay" />
                </div>
                <div className="about-left-content">
                  <h3>{year}</h3>
                  <p>{experience}</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>

                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((val, i) => (
                      <li key={i}>
                        <div className="sr-left">
                          <img src={val.imgUrl} alt={val.imgAlt} />
                        </div>
                        <div className="sr-right">
                          <h5>{val.title}</h5>
                          <p>{val.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
