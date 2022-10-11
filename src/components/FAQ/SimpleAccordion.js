import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './SimpleAccordion.css';
export default function SimpleAccordion() {
  return (
    <div className='parent' id='FAQ'>
      <h1 className='heading'>FAQ</h1>
      <div className='faq'>
      <Accordion sx={{background: 'transparent',margin:'0.5rem 0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className='question'>Accordion 1</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className='answer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background: 'transparent',margin:'0.5rem 0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3 className='question'>Accordion 2</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className='answer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      </div>

    </div>
  );
}
