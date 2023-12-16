import Link from "next/link";

const Breadcrumb = ({
  title = "Blog",
  root = "Home",
  rootUrl = "/home-01",
  current = "Blog",
}) => {
  return (
    <div className="axil-breadcrumb-area breadcrumb-style-default pt--170 pb--70 theme-gradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner">
              <ul className="axil-breadcrumb liststyle d-flex">
                <li className="axil-breadcrumb-item">
                  <Link href={rootUrl}>{root}</Link>
                </li>
                <li className="axil-breadcrumb-item text-capitalize active" aria-current="page">
                  {current}
                </li>
              </ul>
              <h1 className="axil-page-title text-capitalize">{title}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-images">
        <i className="shape shape-1 icon icon-bcm-01"/>
        <i className="shape shape-2 icon icon-bcm-02"/>
        <i className="shape shape-3 icon icon-bcm-03"/>
      </div>
    </div>
  );
};

export default Breadcrumb;
