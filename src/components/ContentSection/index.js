import React from "react";
import { Link } from "react-router-dom";
import SampleImg from "../../assets/images/blog/sampleImg.jpg";
import SampleImg1 from "../../assets/images/blog/sampleImg1.jpg";
import SampleImg2 from "../../assets/images/blog/sampleImg2.jpg";
import SampleImg3 from "../../assets/images/blog/sampleImg3.jpg";
import SampleImg4 from "../../assets/images/blog/sampleImg4.jpg";
import SampleImg5 from "../../assets/images/blog/sampleImg5.jpg";
import Author from "../../assets/images/blog/profilep.JPG";

const ContentSection = () => {
  return (
    <div className="container py-5">
      <div className="py-5 row">
        <div className=" col-lg-4 col-md-6 col-sm-12">
          <div className=" post-card">
            <div className="Post-card-image">
              <img src={SampleImg} alt="postImage" />
            </div>
            <div className="post-card-content">
                <Link to="" className="categorie">Food</Link>
                <h5 className="post-card-title">Enjoy My Favourite Molten Chocolate Cake</h5>
                <p className="post-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...</p>
                <div className="post-card-info">
                    <div>
                        <img src={Author} alt="author" className="post-card-author"/>
                    </div>
                    <div>
                        <p className="post-card-author-title"> Nerd35</p>
                    </div>
                    <div>
                        <p className="post-card-date">January 15, 2021</p>
                    </div>

                </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-md-6 col-sm-12">
          <div className=" post-card">
            <div className="Post-card-image">
              <img src={SampleImg1} alt="postImage" />
            </div>
            <div className="post-card-content">
                <Link to="" className="categorie">Tech</Link>
                <h5 className="post-card-title">Simple Steps to owning your tech space</h5>
                <p className="post-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...</p>
                <div className="post-card-info">
                    <div>
                        <img src={Author} alt="author" className="post-card-author"/>
                    </div>
                    <div>
                        <p className="post-card-author-title"> Nerd35</p>
                    </div>
                    <div>
                        <p className="post-card-date">January 15, 2021</p>
                    </div>

                </div>
            </div>
          </div>
        </div>
        
        <div className=" col-lg-4 col-md-6 col-sm-12">
          <div className=" post-card">
            <div className="Post-card-image">
              <img src={SampleImg2} alt="postImage" />
            </div>
            <div className="post-card-content">
                <Link to="" className="categorie">Housing</Link>
                <h5 className="post-card-title">things to look out for when moving into a new house</h5>
                <p className="post-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...</p>
                <div className="post-card-info">
                    <div>
                        <img src={Author} alt="author" className="post-card-author"/>
                    </div>
                    <div>
                        <p className="post-card-author-title"> Nerd35</p>
                    </div>
                    <div>
                        <p className="post-card-date">January 15, 2021</p>
                    </div>

                </div>
            </div>
          </div>
        </div>
        
        <div className=" col-lg-4 col-md-6 col-sm-12">
          <div className=" post-card">
            <div className="Post-card-image">
              <img src={SampleImg3} alt="postImage" />
            </div>
            <div className="post-card-content">
                <Link to="" className="categorie">Coding</Link>
                <h5 className="post-card-title">Road Map to becoming a full stack developer</h5>
                <p className="post-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...</p>
                <div className="post-card-info">
                    <div>
                        <img src={Author} alt="author" className="post-card-author"/>
                    </div>
                    <div>
                        <p className="post-card-author-title"> Nerd35</p>
                    </div>
                    <div>
                        <p className="post-card-date">January 15, 2021</p>
                    </div>

                </div>
            </div>
          </div>
        </div>
        <div className=" col-lg-4 col-md-6 col-sm-12">
          <div className=" post-card">
            <div className="Post-card-image">
              <img src={SampleImg4} alt="postImage" />
            </div>
            <div className="post-card-content">
                <Link to="" className="categorie">Relationship</Link>
                <h5 className="post-card-title">How to know you are in Love and what to do</h5>
                <p className="post-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...</p>
                <div className="post-card-info">
                    <div>
                        <img src={Author} alt="author" className="post-card-author"/>
                    </div>
                    <div>
                        <p className="post-card-author-title"> Nerd35</p>
                    </div>
                    <div>
                        <p className="post-card-date">January 15, 2021</p>
                    </div>

                </div>
            </div>
          </div>
        </div>
        
        <div className=" col-lg-4 col-md-6 col-sm-12">
          <div className=" post-card">
            <div className="Post-card-image">
              <img src={SampleImg5} alt="postImage" />
            </div>
            <div className="post-card-content">
                <Link to="" className="categorie">Music</Link>
                <h5 className="post-card-title">How singing keeps you calm when depressed</h5>
                <p className="post-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...</p>
                <div className="post-card-info">
                    <div>
                        <img src={Author} alt="author" className="post-card-author"/>
                    </div>
                    <div>
                        <p className="post-card-author-title"> Nerd35</p>
                    </div>
                    <div>
                        <p className="post-card-date">January 15, 2021</p>
                    </div>

                </div>
            </div>
          </div>
        </div>
        
      </div>
        <div className="py-2 text-center pagination-section">
            <span className="px-3 py-2 pagination-list-active">1</span>
            <span className="px-3 py-2 pagination-list me-2">2</span>
            <span className="px-3 py-2 pagination-list me-2">3</span>
            <span className="px-3 py-2 pagination-list me-2">4</span>
            <span className="px-3 py-2 pagination-list me-2">3</span>
            <span className="px-3 py-2 pagination-list me-2">6</span>
        </div>
    </div>
  );
};

export default ContentSection;
