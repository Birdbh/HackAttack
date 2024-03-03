import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem,ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function LearningPlatform() {
  const subjects = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'History', 'Civics', 'Geography', 'Literature'];

  const grades = [6, 7, 8, 9, 10];
  const topics = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Structures',
    'Algorithms',
    'Database Management Systems',
    'Network Security',
    'Web Development',
    'Operating Systems',
    'Computer Architecture',
    'Software Engineering',
  ];

  return (
    <div>
      {subjects.map((subject, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{subject}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ width: '100%' }}>
              {grades.map((grade, gradeIndex) => (
                <Accordion key={`${index}-${gradeIndex}`}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-${gradeIndex}-content`}
                    id={`panel${index}-${gradeIndex}-header`}
                  >
                    <Typography>{`Grade ${grade}`}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Content for each grade can be added here */}
                    {/* For example: <Typography>Some content for Grade {grade}</Typography> */}
                          <List>
                              {topics.map((topic, index) => (
                                  <ListItem key={index}>
                                      <ListItemText primary={topic} />
                                  </ListItem>
                              ))}
                          </List>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default LearningPlatform;
