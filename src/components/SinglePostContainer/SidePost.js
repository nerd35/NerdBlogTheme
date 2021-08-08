import React from "react";
import Author from "../../assets/images/blog/profilep.JPG";
import LatestPost from "../../assets/images/blog/latestpost.jpg";
import PostImg from "../../assets/images/blog/postimg.jpg";
import PostImg1 from "../../assets/images/blog/postimg1.jpg";
import PostImg2 from "../../assets/images/blog/postimg2.jpg";

const SidePost = () => {
  return (
    <div className="py-5 col-lg-4 col-md-4 col-sm-12">
      <div className="mx-auto sidebar-widget">
        <div className="author-widget ">
          <div className="author-image-container ">
            <img src={Author} alt="authorimage" className="author-image" />
          </div>
          <h6 className="py-3 author-title">
            <span>Hi, I'm Chinedu Umukoro</span>
          </h6>
          <p className="mb-2">
            I'm Chinedu Umukoro, A frontend web developer with over 3years
            experience working as auser interface conversion and integration
            engineer.
          </p>
        </div>
      </div>
      <div className="sidebar-widget">
        <div className="latest-post">
          <h5>Latest Posts</h5>
        </div>
        <div className="latest-post-widget">
          <div className="last-post">
            <div className="last-post-image">
              <span>
                <img
                  src={LatestPost}
                  alt="lastpostimage"
                  className="last-post-img"
                />
              </span>
            </div>
            <div className="last-post-content">
              <p>5 Things I Wish I Knew Before Traveling to Malaysia</p>
              <small>
                <span>
                  <i class="far fa-clock"></i>
                </span>
                January 15, 2021
              </small>
            </div>
          </div>
          <div className="last-post">
            <div className="last-post-image">
              <span>
                <img
                  src={PostImg2}
                  alt="lastpostimage"
                  className="last-post-img"
                />
              </span>
            </div>
            <div className="last-post-content">
              <p>5 Things I Wish I Knew Before Traveling to Malaysia</p>
              <small>
                <span>
                  <i class="far fa-clock"></i>
                </span>
                January 15, 2021
              </small>
            </div>
          </div>
          <div className="last-post">
            <div className="last-post-image">
              <span>
                <img
                  src={PostImg}
                  alt="lastpostimage"
                  className="last-post-img"
                />
              </span>
            </div>
            <div className="last-post-content">
              <p>5 Things I Wish I Knew Before Traveling to Malaysia</p>
              <small>
                <span>
                  <i class="far fa-clock"></i>
                </span>
                January 15, 2021
              </small>
            </div>
          </div>
          <div className="last-post">
            <div className="last-post-image">
              <span>
                <img
                  src={PostImg1}
                  alt="lastpostimage"
                  className="last-post-img"
                />
              </span>
            </div>
            <div className="last-post-content">
              <p>5 Things I Wish I Knew Before Traveling to Malaysia</p>
              <small>
                <span>
                  <i class="far fa-clock"></i>
                </span>
                January 15, 2021
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-widget">
        <div className="latest-post">
          <h5>Categories</h5>
        </div>
        <div className="categories-widget">
            <div className="py-3 categories-div">
                <span className="category-widget-link">
                    Relationships
                </span>
                <span className="category-widget-test">22 post</span>
            </div>
            <div className="py-3 categories-div">
                <span className="category-widget-link">
                    Gospel
                </span>
                <span className="category-widget-test">15 post</span>
            </div>
            <div className="py-3 categories-div">
                <span className="category-widget-link">
                    Lifestyle
                </span>
                <span className="category-widget-test">11 post</span>
            </div>
            <div className="py-3 categories-div">
                <span className="category-widget-link">
                    Careers
                </span>
                <span className="category-widget-test">18 post</span>
            </div>
            <div className="py-3 categories-div">
                <span className="category-widget-link">
                    Music
                </span>
                <span className="category-widget-test">25 post</span>
            </div>
        
        </div>
      </div>
        <div className="sidebar-widget">
        <div className="latest-post">
          <h5>Tags</h5>
        </div>
        <div className="tag-widget">
          <ul className="list-inline">
            <li>Travels</li>
            <li>Love</li>
            <li>People</li>
            <li>Education</li>
            <li>Women</li>
            <li>Power</li>
          </ul>
        </div>
        </div>
    </div>
  );
};

export default SidePost;
