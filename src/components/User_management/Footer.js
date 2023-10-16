import React from 'react';
import '../../styles/Footer.css'

function Footer() {

    return (
       
       <div>
              <footer id="dk-footer" className="dk-footer" >
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12 col-lg-4 container8">
                              <div className="dk-footer-box-info boxBlue p-5" style={{marginTop:"200px"}}>
                                  <a href="index.html" className="footer-logo">
                                      {/* <img src={Imglogo} alt="footer_logo" className="img-fluid" /> */}
                                  </a>
                                  <div className="footer-social-link bg-light">
                                      <h3 className='text-dark'>Follow us</h3>
                                      <ul>
                                          <li>
                                              <a href="https://www.facebook.com">
                                                  <i className="fa fa-facebook"></i>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="https://www.twitter.com">
                                                  <i className="fa fa-twitter"></i>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="https://googleplus.com">
                                                  <i className="fa fa-google-plus"></i>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="https://www.linkedin.com">
                                                  <i className="fa fa-linkedin"></i>
                                              </a>
                                          </li>
                                          <li>
                                              <a href="https://www.instagram.com">
                                                  <i className="fa fa-instagram"></i>
                                              </a>
                                          </li>
                                      </ul>
                                  </div>
        
                              </div>
        
                              <div className="footer-awarad" style={{marginBottom:"-10px"}}>
                                  <img src="images/icon/best.png" alt="" />
                                  <p className="pTag1" style={{marginBottom:"-10px"}}>Best Train Ticket Booking Management Site</p>
                              </div>
                          </div>
        
                          <div className="col-md-12 col-lg-8">
        
                              <div className="row">
                                  <div className="col-md-12 col-lg-6">
                                      <div className="footer-widget footer-left-widget">
                                          <div className="section-heading mt-3">
                                              <h3>Useful Links</h3>
                                              <span className="animate-border border-black"></span>
                                          </div>
                                          <ul>
                                              <li>
                                                  <a href="/aboutus">About us</a>
                                              </li>
                                              <li>
                                                  <a href="/services">Services</a>
                                              </li>
                                              <li>
                                                  <a href="/projects">Projects</a>
                                              </li>
                                              <li>
                                                  <a href="/ourteam">Our Team</a>
                                              </li>
                                          </ul>
                                          <ul>
                                              <li>
                                                  <a href="/contactus">Contact us</a>
                                              </li>
                                              <li>
                                                  <a href="/blog">Blog</a>
                                              </li>
                                              <li>
                                                  <a href="/testimonials">Testimonials</a>
                                              </li>
                                              <li>
                                                  <a href="/faq">Faq</a>
                                              </li>
                                          </ul>
                                      </div>
        
                                  </div>
        
                                  <div className="col-md-12 col-lg-6">
                                      <div className="footer-widget">
                                          <div className="section-heading mt-3">
                                              <h3>Subscribe</h3>
                                              <span className="animate-border border-black"></span>
                                          </div>
                                          <p  className="pTag">
                                              Sri Lankan number 1 Train Ticket Booking Site </p>
                                          <form action="#">
                                              <div className="form-row">
                                                  <div className="col dk-footer-form">
                                                      <input type="email" className="form-control" style={{height:"40px"}} placeholder="Email Address" />
                                                      <button type="submit">
                                                          <i style={{color:"white"}} className="fa fa-send"></i>
                                                      </button>
                                                  </div>
                                              </div>
                                          </form>
        
                                      </div>
        
                                  </div>
        
                              </div>
        
                          </div>
        
                      </div>
        
                  </div>
        
        
        
                  <div className="copyright">
                      <div className="container">
                          <div className="row">
                              <div className="col-md-6">
                                  <span>Copyright Â© 2019, All Right Reserved Seobin</span>
                              </div>
        
                              <div className="col-md-6">
                                  <div className="copyright-menu">
                                      <ul>
                                          <li>
                                              <a href="/home">Home</a>
                                          </li>
                                          <li>
                                              <a href="/terms">Terms</a>
                                          </li>
                                          <li>
                                              <a href="/privacy-policy">Privacy Policy</a>
                                          </li>
                                          <li>
                                              <a href="/contact">Contact</a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
        
                          </div>
        
                      </div>
        
                  </div>
        
                  <div id="back-to-top" className="back-to-top">
                      <button className="btn btn-dark" title="Back to Top">
                          <i className="fa fa-angle-up"></i>
                      </button>
                  </div>
        
              </footer>
        
          </div>
            );
       
}

export default Footer;