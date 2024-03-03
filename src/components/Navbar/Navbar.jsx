import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#7CC6FE' , margin:"5px"}}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Maaktabi
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/login" onClick={handleDrawerClose}>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={handleDrawerClose}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component="a" href="subjects" onClick={handleDrawerClose}>
            <ListItemText primary="Subjects" />
          </ListItem>
          <ListItem button component="a" href="/contact-us" onClick={handleDrawerClose}>
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem button component="a" href="/mission" onClick={handleDrawerClose}>
            <ListItemText primary="Mission" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;
