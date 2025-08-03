import React from 'react';
import { Link } from 'react-router-dom';
import postList from '../utilis/blogdata'; 
const title = "Most Popular Post";

const PopularPost = () => {
  return (
    <div className='widget widget-post'>
      <div className="widget-header">
        <h5>{title}</h5>
      </div>

      <ul className='widget-wrapper'>
        {postList.slice(0, 4).map((blog, i) => (
          <li key={i} className='d-flex flex-wrap justify-content-between'>
            <div className='post-thumb'>
              <Link to={`/blog/${blog.id}`}>
                <img src={blog.imgUrl} alt={blog.imgAlt} />
              </Link>
            </div>
            <div className="post-content">
              <h6><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h6>
              <p>{blog.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularPost;
