import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { constants } from "./faq.constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqList = constants.FAQ;
const FAQ = () => {
  return (
    <div>
      <h1>FAQ</h1>
      {console.log(constants)}
      {faqList.map(faq => {
        return (
          <Accordion key={faq.question}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3>
                {faq.question}
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                {faq.answer}
              </p>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default FAQ;
