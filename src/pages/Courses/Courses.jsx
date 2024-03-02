import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Courses() {
  /**create an array with strings for various subjects like computer, maht, bio etc */
  const subjects = ['Computer', 'Math', 'Biology', 'Physics', 'Chemistry', 'English'];

 /**use the array to create card components from material ui */

return(
    <Box display="flex" alignItems="center"  gap={4} p={2}
    >
        {subjects.map(subject => (
            <Card variant="outlined">
                <CardContent>
                 
                <Typography variant="body2" color="text.secondary">
                    {subject}
          </Typography>
                </CardContent>
            </Card>
        ))}
      </Box>
)
        
}

export default Courses;