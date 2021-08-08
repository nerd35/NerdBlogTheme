import React from "react";
import PostImg from "../../assets/images/blog/postimg.jpg";
import PostImg1 from "../../assets/images/blog/postimg1.jpg";
import PostImg2 from "../../assets/images/blog/postimg2.jpg";
import LatestPost from "../../assets/images/blog/latestpost.jpg";
import Author from "../../assets/images/blog/profilep.JPG";
import AuthorPic from "../../assets/images/blog/authorpics.jpg";


const MainPost = () => {
  return (
    <div className="py-5 col-lg-8 col-md-8 col-sm-12">
      <div className="post-single ">
        <div className="post-single-image">
          <img src={PostImg} alt="singlepost" className="single-image" />
        </div>
        <div className="pt-5 post-single-content">
          <span className="categorie">Travel</span>
          <h4 className="mt-3 single-post-title">
            What the secrets you will know about jordan petra if visit it one
            day?
          </h4>
          <div className="post-card-info">
            <div>
              <img src={Author} alt="author" className="post-card-author" />
            </div>
            <div>
              <p className="post-card-author-title"> Nerd35</p>
            </div>
            <div>
              <p className="post-card-date">January 15, 2021</p>
            </div>
          </div>
        </div>
        <div className="post-single-body">
          <p>
            Its sometimes her behaviour are contented. Do listening am eagerness
            oh objection collected. Together gay feelings continue juvenile had
            off Unknown may service subject her letters one bed. Child years
            noise ye in forty. Loud in this in both hold. My entrance me is
            disposal bachelor remember relation
          </p>
          <h5 className="post-single-body-title">
            1 - Pick a sustainable travel destination
          </h5>
          <p>
            Oh acceptance apartments up sympathize astonished delightful.
            Waiting him new lasting towards. Continuing melancholy especially so
            to. Me unpleasing impossible in attachment announcing so astonished.
            What ask leaf may nor upon door. Tended remain my do stairs. Oh
            smiling amiable am so visited cordial in offices hearted. Oh
            acceptance apartments up sympathize astonished delightful. Waiting
            him new lasting towards. Continuing melancholy especially so to. Me
            unpleasing impossible in attachment announcing so astonished. What
            ask leaf may nor upon door. Tended remain my do stairs. Oh smiling
            amiable am so visited cordial in offices hearted.
          </p>
          <br />
          <img src={PostImg1} alt="posting1" className="pt-5" />
          <p className="mt-2">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <h5 className="post-single-body-title">
            2 - Research before booking
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <br />
          <img src={PostImg2} alt="posting1" className="pt-5" />
          <br />
          <h5 className="post-single-body-title">
            3 - Pack light , Easy Sustainable Travel Tip
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident. sunt in
            culpa qui officia deserunt mollit anim id e st laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.
          </p>
        </div>
      </div>
      <div class="row">
        <div className="col-md-6">
          <div className="pervious-widget">
            <div className="pervious-widget-post">
              <div className="small-post">
                <div className="small-post-img">
                  <img
                    src={LatestPost}
                    alt="latestpost"
                    className="latest-post"
                  />
                </div>
                <div className="content">
                  <span className="content-link">
                    <i class="fas fa-long-arrow-alt-left mt-1 me-2"></i>{" "}
                    Previous post
                  </span>
                  <p className="previous-title">
                    7 Healty Dinner Recipes for a Date Night at Home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="pervious-widget">
            <div className="pervious-widget-post">
              <div className="small-post">
                <div className="small-post-img">
                  <img
                    src={PostImg1}
                    alt="latestpost"
                    className="latest-post"
                  />
                </div>
                <div className="content">
                  <span className="content-link">
                    {" "}
                    Next post{" "}
                    <i class="fas fa-long-arrow-alt-right ms-2 mt-1"></i>
                  </span>
                  <p className="previous-title">
                    7 Healty Dinner Recipes for a Date Night at Home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comment-widget">
        <div className="mb-3 title">
          <h5 className="comment-title">3 Comments</h5>
        </div>
        <div className="comment-widget-section">
          <div className="comment-item">
            <img
              src={AuthorPic}
              alt="comentauthor"
              className="author-coment-img"
            />
            <div className="comment-content">
              <div className="comment-info">
                <span className="comment-info-text me-3">John Doe</span>
                <span className="comment-info-text me-3">January 15, 2021</span>
              </div>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique</span>
              <div>
                <p className="comment-link"><i class="fas fa-long-arrow-alt-left me-2"></i> Reply</p>
              </div>
            </div>
          </div>
          <div className="comment-item">
            <img
              src={Author}
              alt="comentauthor"
              className="author-coment-img"
            />
            <div className="comment-content">
              <div className="comment-info">
                <span className="comment-info-text me-3">Chinedu Umukoro</span>
                <span className="comment-info-text me-3">January 15, 2021</span>
              </div>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique</span>
              <div>
                <p className="comment-link"><i class="fas fa-long-arrow-alt-left me-2"></i> Reply</p>
              </div>
            </div>
          </div>
          <div className="comment-item">
            <img
              src={Author}
              alt="comentauthor"
              className="author-coment-img"
            />
            <div className="comment-content">
              <div className="comment-info">
                <span className="comment-info-text me-3">Chinedu Umukoro</span>
                <span className="comment-info-text me-3">January 15, 2021</span>
              </div>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus at doloremque adipisci eum placeat quod non fugiat aliquid sit similique</span>
              <div>
                <p className="comment-link"><i class="fas fa-long-arrow-alt-left me-2"></i> Reply</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="mb-3 title">
          <h5 className="comment-title">Leave a reply</h5>
        </div>
        <form className="form-widget">
          <p>Your email adress will not be published ,Requied fileds are marked*.</p>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <textarea rows="5" cols="30" className="form-control form-control-textarea" placeholder="message*"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" className="form-control form-control-input" placeholder="Name*"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" className="form-control form-control-input" placeholder="Email*"/>
              </div>
            </div>
            <div className="mb-20 col-md-12">
            <div class="form-check">
            </div>
              <input class="form-check-input me-3" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
              save my name , email and website in this browser for the next time I comment.
              </label>
            </div>
            <div className="mt-4 col-md-12">
              <button type="submit" className="btn-custom">Post comment</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainPost;
