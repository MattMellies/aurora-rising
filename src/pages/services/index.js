import PageImage from "../../components/PageImage";
import Banner from "../../assets/images/322613090.jpeg";
import { servicesConstants } from "./services.constants";

const Services = () => {
  return (
    <div>
      <div className="bannerImage" style={{position: 'fixed', opacity: '0.2'}}>
        <PageImage image={Banner} />
      </div>
      <div className="centered">
        <h1>Services</h1>
      </div>

      {servicesConstants.service.map(service => {
        return (
        <div className="lrContainer">
          <div className="left" style={{width: '400px', position: 'relative', marginLeft: '100px'}}>
            <h3>{service.title}</h3>
          </div>
          <div className="right" style={{width: '600px', marginRight: '180px'}}>
            {service.content.map(para => {
              return (
                <p key={para} style={{position: 'relative', left: '10px'}}>
                  {para}
                </p>
              );
            })}
          </div>
        </div>
        );
      })}
    </div>
  );
};

export default Services;
