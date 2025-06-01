/* File: src/components/common/Accordion.tsx */
import React from 'react';
import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  type AccordionProps as MUIAccordionProps,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Section {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps extends Omit<MUIAccordionProps, 'children'> {
  sections: Section[];
  defaultExpanded?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  sections,
  defaultExpanded = false,
  ...muiProps
}) => {
  return (
    <>
      {sections.map((section, index) => (
        <MUIAccordion
          key={index}
          defaultExpanded={defaultExpanded}
          {...muiProps}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{section.content}</AccordionDetails>
        </MUIAccordion>
      ))}
    </>
  );
};

export default Accordion; 