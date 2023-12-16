import { useState } from "react";
import PricingData from "../../data/Pricings.json";
import SectionTitle from "../common/SectionTitle";
import PricingTable from "./PricingTable";

const PricingOne = () => {
  const [pricings, setPricings] = useState(PricingData.slice(0, 2));
  
  return (
    <div className="axil-pricing-table-area pricing-shape-position ax-section-gap bg-color-lightest">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              title="From getting started"
              subtitle="pricing plan"
              description="In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus."
              color="extra04-color"
              alignment="center"
            />
          </div>
        </div>
        <div className="row justify-content-center mt--20 row--30 mt_sm--0">
          {pricings?.map((pricing, index) => (
            <PricingTable
              key={`pricing-table-${index}`}
              column="col-lg-5 col-md-6 col-sm-12 col-12"
              pricingTableClass={
                index === 0
                  ? "axil-pricing-table mt--40 active"
                  : "axil-pricing-table mt--40 mt_sm--60"
              }
              buttonClass={index === 0 ? "btn-solid" : "btn-transparent"}
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
  );
};

export default PricingOne;
