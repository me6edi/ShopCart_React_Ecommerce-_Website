import { useState } from "react";
import blogList from "../utilis/blogdata";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const SingleBlog = () => {
  const [blog, setblog] = useState(blogList);
  const { id } = useParams();

  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);

  return (
    <div>
      <PageHeader
        title={"Single Blog Pages"}
        cartPage={"Blog / Blog Details"}
      />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {result.map((item) => (
                            <div key={item.id}>
                              <div className="post-thumb">
                                <img
                                  src={item.imgUrl}
                                  alt=""
                                  className="w-100"
                                />
                              </div>

                              <div className="post-content">
                                <h3>{item.title}</h3>
                                <div className="meta-post">
                                  <ul className="lab-ul">
                                    <ul className="lab-ul">
                                      {item.metaList.map((val, i) => (
                                        <li key={i}>
                                          <i className={val.iconName}>
                                            {val.text}
                                          </i>
                                        </li>
                                      ))}
                                    </ul>
                                  </ul>
                                </div>
                                <p>
                                  Serenity hasir taken poseson mying entre soung
                                  these sweet morngs sprng whch enoywith whole
                                  heart create am alones and feel the charm of
                                  exstenceth spot whch the blissouls like
                                  mineing am soo happy my dearsi frend absoribed
                                  the exquste sense enjoy my whole hearts alone
                                  and fee the charm of exstenceths spotsi whch
                                  was the blis of soulis mineing amsoing dear
                                  frend soingu absoribed the exqust sense
                                  tranqui existence neglect my talentsr should
                                  ncapable ofing is drawng singe wonderful
                                  serenty has taken possesison of my entre
                                  soulng these sweet present moment and yet feel
                                  that never was greater artst
                                </p>
                                <blockquote>
                                  <p></p>
                                </blockquote>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">Right</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
