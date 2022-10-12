import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './SimpleAccordion.css';
export default function SimpleAccordion() {
  return (
    <div className='faq_section' id='FAQ'>
      <h1 className='heading'>FREQUENTLY ASKED QUESTIONS</h1>
      <div className='faq'>
      <Accordion sx={{background: 'transparent',margin:'0.5rem 0'}} className='faq_accor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expand_icon'/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 className='question'>What is campus ambassador? </h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className='answer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background: 'transparent',margin:'0.5rem 0'}} className='faq_accor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expand_icon'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3 className='question'>Who can apply?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className='answer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background: 'transparent',margin:'0.5rem 0'}} className='faq_accor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expand_icon'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3 className='question'>How to apply for the program?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className='answer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background: 'transparent',margin:'0.5rem 0'}} className='faq_accor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expand_icon'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3 className='question'>How to apply for the program?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className='answer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background: 'transparent',margin:'0.5rem 0'}} className='faq_accor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expand_icon'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3 className='question'>How to apply for the program?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className='answer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background: 'transparent',margin:'0.5rem 0'}} className='faq_accor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expand_icon'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3 className='question'>How to apply for the program?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p className='answer'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{background: 'transparent',margin:'0.5rem 0'}} className='faq_accor'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expand_icon'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3 className='question'>How to apply for the program?</h3>
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
