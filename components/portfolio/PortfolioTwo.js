import { useState } from "react";
import PortfolioData from "../../data/Portfolio.json";
import SectionTitle from "../common/SectionTitle";
import PortfolioCard from "./PortfolioCard";

const PortfolioTwo = () => {
  const [activePortfolio, setActivePortfolio] = useState(0);
  
  const changeActive = (index) => {
    setActivePortfolio(index);
  };

  return (
    <div className="axil-portfolio-area ax-section-gap bg-color-lightest">
      <div className="container axil-masonary-wrapper">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <SectionTitle
              title="Featured Designs"
              subtitle="our projects"
              titleClass="mb-0"
              color="extra07-color"
              alignment="center"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="mesonry-list grid-metro3 mt--20">
              {PortfolioData?.map((portfolio, index) => (
                <PortfolioCard
                  key={`portfolio-${index}`}
                  data={portfolio}
                  index={index}
                  activeIndex={activePortfolio}
                  changeActive={changeActive}
                />
              ))}
            </div>

            <div className="view-all-portfolio-button mt--60 text-center move-up wow">
              <a className="axil-button btn-large btn-transparent" href="#">
                <span className="button-text">Discover More Projects</span>
                <span className="button-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTwo;
