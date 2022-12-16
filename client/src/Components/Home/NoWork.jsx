import React from 'react'
import "./Home.css";

// Import Images
import bg2 from "../../images/bg-2.svg";
import high from "../../images/high.jpg";

const NoWork = () => {
  return (
    <>
      <section id="delivery">
        <h1 className="sec-heading">Years of Development Experieance</h1>
        <div className="col-5 delivery-img">
          <img src={bg2} alt="" />
        </div>
        <div className="col-7">
          <h2>I'am Bishal Sarkar</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br />
            <br /> It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="btn-footer">
            <a href="a" className="brand-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="services">
        <h1 className="sec-heading">Services</h1>
        <ul>
          <li>
            <div>
              <a href="a">
                <i className="fas fa-laptop"></i>
                <span>Stratagy and Consultant</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="a">
                <i className="fas fa-users"></i>
                <span>User Experience Design</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="a">
                <i className="fas fa-mobile-alt"></i>
                <span>Mobile App Development</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="a">
                <i className="fab fa-chrome"></i>
                <span>Web App Development</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="a">
                <i className="fas fa-ribbon"></i>
                <span>Quality Analysis and Testing</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="a">
                <i className="fas fa-ticket-alt"></i>
                <span>Application Management & Support</span>
              </a>
            </div>
          </li>
        </ul>

        <div id="service-footer">
          <a href="a" className="brand-btn">
            View All Service
          </a>
        </div>
      </section>

      <section id="success-story">
        <h1 className="sec-heading">Success Stories</h1>

        <div className="slider">
          <div className="col-6 slide-text">
            <div>
              <h2>Some Success Stories</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <a href="a" className="brand-btn">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-6 slide-img">
            <img src={bg2} alt="" />
          </div>
        </div>
      </section>

      <section id="highlights">
        <h1 className="sec-heading">Highlights</h1>

        <div className="slider">
          <div className="col-6 slide-text">
            <div>
              <h2>Some Highlights</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <a href="a" className="brand-btn">
                See More
              </a>
            </div>
          </div>
          <div className="col-6 slide-img">
            <img src={high} alt="" />
          </div>
        </div>
      </section>

      <footer>
        <div>
          <span className="logo">Bishal Sarkar</span>
        </div>
        <div className="row">
          <div className="col-7">
            <span className="footer-cat">Quick Links</span>
            <ul className="footer-cat-links">
              <li>
                <a href="a">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <span>SignUp & SignIn</span>
                </a>
              </li>
              <li>
                <a href="a">
                  <span>Terms & Condition</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3" id="newsletter">
            <span className="footer-cat">Stay Connected</span>
            <form id="subscribe">
              <input
                type="email"
                id="subscriber-email"
                placeholder="Enter Email Address"
              />
              <input type="submit" value="Subscribe" id="btn-scribe" />
            </form>
          </div>
        </div>
        <div id="copyright">&copy; All Rights Reserved 2022-2023</div>
        <div id="owner">
          <span>
            Designed by <a href="a">Bishal Sarkar</a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default NoWork
