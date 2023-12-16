import Head from "next/head";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CallToActionOne from "../components/call-to-actions/CallToActionOne";
import SectionTitle from "../components/common/SectionTitle";
import Layout from "../components/layouts/Layout";
import PricingTable from "../components/pricings/PricingTable";
import PricingData from "../data/Pricings.json";

const Pricing = () => {
  return (
    <Layout>
      <Head>
        <title>Pricing || Keystroke Creative Agency Bootstrap 5 Template</title>
      </Head>

      <Breadcrumb title="Pricing" current="Pricing" />

      <main className="page-wrappper">
        <div className="axil-pricing-table-area pricing-shape-position ax-section-gap bg-color-lightest">
          <div className="container">
            <div className="row row--25 justify-content-center">
              {PricingData?.map((pricing, index) => (
                <PricingTable
                  key={`pricing-table-${index}`}
                  column="col-lg-4 col-md-6 col-sm-12 col-12"
                  pricingTableClass={
                    index === 1
                      ? "axil-pricing-table prcing-style-2 mt--40 active"
                      : "axil-pricing-table prcing-style-2 mt--40 mt_sm--60"
                  }
                  buttonClass={index === 1 ? "btn-solid" : "btn-transparent"}
                  data={pricing}
                />
              ))}
            </div>
          </div>
          <div className="shape-group">
            <div className="shape">
              <i className="icon icon-shape-15"></i>
            </div>
          </div>
        </div>

        <div className="axil-faq-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <SectionTitle
                  title="Frequently asked questions"
                  subtitle="we've got answers"
                  description="Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque."
                  color="extra04-color"
                  alignment="center"
                />
              </div>
            </div>
            <div className="row mt--30">
              <div className="col-lg-8 offset-lg-2">
                <div id="accordion" className="axil-accordion--2">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <a
                        href="#"
                        className="btn btn-link d-block text-start"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Nam interdum ante sapien, quis ullamcorper.
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        Vivamus magna est, placerat et dignissim et, elementum
                        quis lacus. Nulla laoreet pharetra vehicula. Vestibulum
                        euismod augue ac velit consectetur, ac tincidunt ante
                        hendrerit.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <a
                        href="#"
                        className="btn btn-link d-block text-start collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Nunc rhoncus magna ut venenatis feugiat.
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        Vivamus magna est, placerat et dignissim et, elementum
                        quis lacus. Nulla laoreet pharetra vehicula. Vestibulum
                        euismod augue ac velit consectetur, ac tincidunt ante
                        hendrerit. Sed lacinia elementum felis, ut tempus ipsum
                        blandit non.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingthree">
                      <a
                        href="#"
                        className="btn btn-link d-block text-start collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Nunc rhoncus magna ut venenatis feugiat.
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingthree"
                      data-bs-parent="#accordion"
                    >
                      <div className="card-body">
                        Vivamus magna est, placerat et dignissim et, elementum
                        quis lacus. Nulla laoreet pharetra vehicula. Vestibulum
                        euismod augue ac velit consectetur, ac tincidunt ante
                        hendrerit. Sed lacinia elementum felis, ut tempus ipsum
                        blandit non.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CallToActionOne />
      </main>
    </Layout>
  );
};

export default Pricing;
