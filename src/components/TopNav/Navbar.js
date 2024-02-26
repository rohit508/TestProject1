import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



 const Navbar = () => {
  return (
    <>
        <AppBar color='info'>
          <Toolbar>
            <Typography variant="h6" component="div">
              Test Project
            </Typography>
          </Toolbar>
        </AppBar>
      <Toolbar />
  
    </>
  );
}

export default Navbar;
