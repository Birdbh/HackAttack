import React from 'react'
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';




function Courses() {
  /**create an array with strings for various subjects like computer, maht, bio etc */
  const subjects = ['Computer', 'Math', 'Biology', 'Physics', 'Chemistry', 'English'];

 /**use the array to create card components from material ui */

return(
    <Container>
    <Grid container spacing={5} sx={{padding:4}}>
    <Grid item xs={12} sm={6} md={4}>
  <Card sx={{ padding: 2, margin: 1 }}>
    <Link href="/subjects/math" style={{ textDecoration: 'none' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }} color="text.primary">
        Mathematics
      </Typography>
    </Link>
  </Card>
</Grid>

<Grid item xs={12} sm={6} md={4}>
  <Card sx={{ padding: 2, margin: 1 }}>
    <Link href="/subjects/physics" style={{ textDecoration: 'none' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }} color="text.primary">
        Physics
      </Typography>
    </Link>
  </Card>
</Grid>
<Grid item xs={12} sm={6} md={4}>
  <Card sx={{ padding: 2, margin: 1 }}>
    <Link href="/subjects/chemistry" style={{ textDecoration: 'none' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }} color="text.primary">
        Chemistry
      </Typography>
    </Link>
  </Card>
</Grid>

<Grid item xs={12} sm={6} md={4}>
  <Card sx={{ padding: 2, margin: 1 }}>
    <Link href="/subjects/biology" style={{ textDecoration: 'none' }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }} color="text.primary">
        Biology
      </Typography>
    </Link>
  </Card>
</Grid>
    </Grid>
  </Container>
)
        
}

export default Courses;