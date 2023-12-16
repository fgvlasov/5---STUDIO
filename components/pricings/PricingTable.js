import { useState } from "react";

const PricingTable = ({ column, pricingTableClass, buttonClass, data }) => {
  const [priceFilterValue, setPriceFilterValue] = useState("monthly");

  const handleChange = (e) => {
    setPriceFilterValue(e.target.value);
  };

  return (
    <div className={column}>
      <div className={pricingTableClass}>
        <div className="axil-pricing-inner">
          <div className="pricing-header">
            <h4>{data.title}</h4>
            <p>{data.subtitle}</p>
            <div className="price-wrapper">
              <div className="price">
                <h2 className="currency">{data.currency}</h2>
                <h2 className="heading headin-h3">
                  {priceFilterValue === "monthly"
                    ? data.price.monthly
                    : data.price.yearly}
                </h2>
                <span>
                  {priceFilterValue === "monthly" ? "/month" : "/year"}
                </span>
              </div>
              <div className="date-option">
                <select value={priceFilterValue} onChange={handleChange}>
                  <option value="yearly">Yearly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div className="pricing-get-button">
              <a className={`axil-button btn-large ${buttonClass}`} href="#">
                <span className="button-text">Get Started Today</span>
                <span className="button-icon"></span>
              </a>
            </div>
            <span className="subtitle">{data.subtitleTwo}</span>
          </div>
          <div className="pricing-body">
            <div className="inner">
              <ul className="list-style">
                {data.features?.map((feature, index) => (
                  <li key={`pricing-feature-${index}`}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
