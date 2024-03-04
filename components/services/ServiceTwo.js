import { useEffect, useState } from "react";
import ServiceData from "../../data/Services.json";
import SectionTitle from "../common/SectionTitle";
import ServiceCardOne from "./ServiceCardOne";
import { fetchAPI } from 'helpers/api';

const ServiceTwo = () => {
  const [defaultServices, setDefaultServices] = useState([]);
  const [activeService, setActiveService] = useState(2);

  const [data, setData] = useState();
  
  const getDefaultServices = () => {
    const filteredServices = ServiceData.filter(
      (service) => service.category === "Default"
    );

    setDefaultServices(filteredServices.slice(0, 3));
  };

  const changeActive = (index) => {
    setActiveService(index);
  };

  useEffect(() => {
    async function fetchData() {
      const servicesRes = await fetchAPI("/categories", {
        fields: ["*"],
      });

      setData(servicesRes.data);
    }
	getDefaultServices();
    fetchData();
	
  }, []);
  
  if (!data) {
    return false;
  } else {
	//console.log(data);
  }

  return (
    <div className="axil-service-area ax-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-6">
            <SectionTitle
              title="Services we can help <br/> you with"
              subtitle="what we can do for you"
              titleClass="mb-0"
              styleClass="mb--120 mb_md--5 mb_sm--5"
              color="extra08-color"
              alignment="left"
            />
          </div>
        </div>
        <div className="row">
          {/* {defaultServices?.map((service, index) => (
            <ServiceCardOne
              key={service.id}
              column="col-lg-4 col-md-6 col-sm-6 col-12 move-up wow"
              serviceClass={
                index === 0
                  ? "service-bg-gray"
                  : index === 1
                  ? "service-bg-gray space-to-top"
                  : "service-bg-gray space-to-top2"
              }
              index={index}
              activeIndex={activeService}
              data={service}
              changeActive={changeActive}
            />
          ))} */}
		  {data?.map((service, index) => (
			service.attributes.title
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTwo;
