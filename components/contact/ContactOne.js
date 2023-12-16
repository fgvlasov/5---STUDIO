import SectionTitle from "../common/SectionTitle";
import ContactFormTwo from "../forms/ContactFormTwo";
import { SplitText } from "../common/SplitText";

const ContactOne = () => {
  return (
    <div className="axil-contact-area ax-section-gap bg-color-lightest">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xl-4 col-md-12 col-12">
            <div className="axil-contact-address">
              <SectionTitle
                title="Let’s work together"
                subtitle="Need a designer?"
                color="extra10-color"
                alignment="left"
              />

              <div className="axil-address-list mt--40">
                <div className="axil-address">
                  <h6 className="title">
                    <SplitText>Mail</SplitText>
                  </h6>
                  <p>
                    <a href="#">
                      <SplitText>Brianadams@gmail.com</SplitText>
                    </a>
                  </p>
                </div>

                <div className="axil-address">
                  <h6 className="title">
                    <SplitText>Address</SplitText>
                  </h6>
                  <p>
                    <SplitText>
                      {"Warnwe Park Streetperrine, <br/> FL 33157 New York City"}
                    </SplitText>
                  </p>
                </div>

                <div className="axil-address">
                  <h6 className="title">
                    <SplitText>Phone</SplitText>
                  </h6>
                  <p>
                    <a href="#">
                      <SplitText>+0123456789</SplitText>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-7 offset-xl-1 col-md-12 col-12 mt_md--40 mt_sm--30">
            <div className="axil-contact-form contact-form-style-2">
              <div className="inner">
                <ContactFormTwo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOne;
