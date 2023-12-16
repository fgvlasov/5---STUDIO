import ContactFormOne from "../forms/ContactFormOne";

const AboutTwo = () => {
  return (
    <div className="axil-about-area ax-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5 col-md-12 col-12">
            <div className="contact-form-wrapper">
              <div className="axil-contact-form contact-form-style-1">
                <h3 className="title">Get a free Keystroke quote now</h3>
                <ContactFormOne/>
                <div className="callto-action-wrapper text-center">
                  <span className="text">Or call us now</span>
                  <span>
                    <i className="fal fa-phone-alt"></i>{" "}
                    <a href="#">(123) 456 7890</a>
                  </span>
                </div>

                <div className="shape-group">
                  <div className="shape shape-01">
                    <i className="icon icon-shape-07"></i>
                  </div>
                  <div className="shape shape-02">
                    <i className="icon icon-shape-16"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-2 col-md-12 col-12 mt_md--40 mt_sm--40">
            <div className="axil-about-inner">
              <div className="section-title text-start">
                <span className="sub-title extra08-color">About us</span>
                <h2 className="title">
                  Why branding <br /> matters?
                </h2>
                <p className="subtitle-2">
                  Ut condimentum enim nec diam convallis mollis. Sed felis quam,
                  semper dapibus purus sed, rhoncus ullamcorper lacus.
                </p>
              </div>

              <div
                id="accordion"
                className="axil-accordion mt--15 mt_md--15 mt_sm--15"
              >
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i className="fal fa-compress-wide"></i>
                        <span>Strategy</span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Aenean hendrerit laoreet vehicula. Nullam convallis augue
                      at enim gravida pellentesque.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i className="fal fa-code"></i>
                        <span>Design</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Aenean hendrerit laoreet vehicula. Nullam convallis augue
                      at enim gravida pellentesque.
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i className="fal fa-globe"></i>
                        <span>Development</span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      Aenean hendrerit laoreet vehicula. Nullam convallis augue
                      at enim gravida pellentesque.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
