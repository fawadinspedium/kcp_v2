import React from "react";

const Slider = () => {
  return (
      <>
    <div className="hero-wrap js-fullheight sliderImg"  data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true">
          <div className="col-md-11 ftco-animate text-center">
          	<h1 className="mb-4">Highest Quality Care For Pets You'll Love </h1>
            <p><a href="#" className="btn btn-primary mr-md-4 py-3 px-4">Learn more <span className="ion-ios-arrow-forward"></span></a></p>
          </div>
        </div>
      </div>
    </div>
    <section className="ftco-section bg-light ftco-no-pt ftco-intro">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
            <div className="d-block services active text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-blind"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Dog Walking</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right.
                </p>
                <a
                  href="#"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                  <i className="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
            <div className="d-block services text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-dog-eating"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Pet Daycare</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right.
                </p>
                <a
                  href="#"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                  <i className="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex align-self-stretch px-4 ftco-animate">
            <div className="d-block services text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="flaticon-grooming"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Pet Grooming</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right.
                </p>
                <a
                  href="#"
                  className="btn-custom d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-chevron-right"></span>
                  <i className="sr-only">Read more</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Slider;
