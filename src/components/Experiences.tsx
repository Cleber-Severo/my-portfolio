import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import useExperiencesData from '../hooks/useExperiencesData';
import './styles/Experiences.css';

const Experiences = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const { experiences } = useExperiencesData();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section id="resume">
      <h2>Experiência</h2>
      <div>
        {experiences.map((item) => (
          <Accordion
            expanded={expanded === item.accordionPannel}
            onChange={handleChange(item.accordionPannel)}
            sx={{ background: 'transparent', mb: 1 }}
          >
            <AccordionSummary
              expandIcon={<FaChevronUp style={{ color: '#FFF' }} />}
              aria-controls={`${item.accordionPannel}bh-content`}
              id={`${item.accordionPannel}bh-header`}
              sx={{ backgroundColor: 'rgba(114, 114, 243, 1)' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '0 12px',
                  color: 'white',
                }}
              >
                <Typography component="span" sx={{ fontWeight: '600' }}>
                  {item.jobPosition}
                </Typography>
                <Typography
                  component="span"
                  sx={{ color: 'text.white', fontWeight: '600' }}
                >
                  {item.time}
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: 'rgba(114, 114, 243, 0.3)',
                color: 'text.white',
                p:3,
              }}
            >
              <div style={{ color: '#ccc', marginBottom: '1rem' }}>
                <FaMapMarkerAlt style={{ marginRight: '6px' }} />
                {item.place}
              </div>
              <Typography style={{ color: '#FFF' }}>
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
