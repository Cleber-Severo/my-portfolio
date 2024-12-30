import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import './styles/Experiences.css';
import { Chip } from '@mui/material';
import { IExperiencesAccordionProps } from '../types/Experiences';

const ExperiencesAccordion = ({ expanded, accordionToggleOpen, data, }: IExperiencesAccordionProps) => {

  return (
    <Accordion
      expanded={expanded === data.accordionPannel}
      onChange={accordionToggleOpen(data.accordionPannel)}
      sx={{ background: 'transparent', mb: 1, boxShadow: 'none' }}
    >
      <AccordionSummary
        expandIcon={<FaChevronUp style={{ color: '#FFF' }} />}
        aria-controls={`${data.accordionPannel}bh-content`}
        id={`${data.accordionPannel}bh-header`}
        sx={{
          backgroundColor: 'rgba(114, 114, 243, 1)',
          borderRadius:
            expanded === data.accordionPannel ? '6px 6px 0 0' : '6px',
        }}
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
            {data.jobPosition}
          </Typography>
          <Typography
            component="span"
            sx={{ color: 'text.white', fontWeight: '600' }}
          >
            {data.time}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: 'rgba(114, 114, 243, 0.3)',
          color: 'text.white',
          p: 3,
          borderRadius:
            expanded === data.accordionPannel ? ' 0 0 6px 6px' : '6px',
        }}
      >
        <div style={{ color: '#ccc' }}>
          <FaMapMarkerAlt style={{ marginRight: '6px' }} />
          {data.place}
        </div>
        <Typography sx={{ color: '#FFF', my: '1rem', fontWeight: '500' }}>
          {data.description}
        </Typography>
        {data.tags.map((tag) => (
          <Chip label={tag} sx={{ color: '#FFF', ml: 0.5 }} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default ExperiencesAccordion;
