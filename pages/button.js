import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../components/layouts/Layout";

const Button = () => {
  return (
    <Layout>
      <Head>
        <title>Button || keystroke Creative Agency Bootstrap5 Template</title>
      </Head>

      <Breadcrumb title="Button" current="Button" />

      <main className="page-wrappper">
        <div className="axil-button-area ax-section-gap bg-color-lightest">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="axil-button-group">
                  <Link href="#">
                    <a className="axil-button btn-extra-large btn-transparent">
                      <span className="button-text">Outline Extra Large</span>
                      <span className="button-icon" />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="axil-button btn-large btn-transparent">
                      <span className="button-text">Outline Large</span>
                      <span className="button-icon" />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="axil-button btn-transparent">
                      <span className="button-text">Outline Medium</span>
                      <span className="button-icon" />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="axil-button btn-small btn-transparent">
                      <span className="button-text">Outline Small</span>
                      <span className="button-icon" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="axil-button-area ax-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="axil-button-group">
                  <Link href="#">
                    <a className="axil-button btn-extra-large btn-solid">
                      <span className="button-text">Outline Extra Large</span>
                      <span className="button-icon" />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="axil-button btn-large btn-solid">
                      <span className="button-text">Outline Large</span>
                      <span className="button-icon" />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="axil-button btn-solid">
                      <span className="button-text">Outline Medium</span>
                      <span className="button-icon" />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="axil-button btn-small btn-solid">
                      <span className="button-text">Outline Small</span>
                      <span className="button-icon" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Button;
