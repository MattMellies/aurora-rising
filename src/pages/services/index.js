import PageImage from "../../components/PageImage";
import ChalkBoard from "../../assets/images/498219764.jpeg";
import { servicesConstants } from "./services.constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const Services = () => {
  return (
    <div>
      <div className="bannerImage">
        <PageImage image={ChalkBoard} />
      </div>
      <h1>Services</h1>

      {servicesConstants.service.map(service => {
        return (
          <Accordion key={service.title}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>
                {service.title}
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              {service.content.map(para => {
                return (
                  <p key={para}>
                    {para}
                  </p>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default Services;
