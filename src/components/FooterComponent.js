import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 punoi">
            <address>
              <h6>Punoi:</h6>
              <i className="fa fa-user fa-lg"></i> Klodjana Sharka <br />
            </address>
          </div>
          <div className="col-md-6 col-sm-4 align-self-center">
            <div className="text-right">
              <h6>Follow me: </h6>
              <p>
                <a
                  className="btn btn-social-icon "
                  href="https://www.facebook.com/klodjana.sharka11"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="btn btn-social-icon"
                  href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-join"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-social-icon "
                  href="https://www.instagram.com/klodjanasharka/"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>

                
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2022 K.SH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
