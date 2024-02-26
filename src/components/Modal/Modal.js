import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { setmodalshowhide } from '../Slice/createSlice';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../Profile/DetailProfile';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PeopleIcon from '@mui/icons-material/People';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const CustomizedDialogs = (props) => {
  const userdetails = useSelector((state) => state.users.userdetails);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setmodalshowhide(false));

  };
  const Item = styled(Paper)(({ theme }) => ({
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
  }));


  return (
    <>
      <BootstrapDialog
        onClose={() => handleClose()}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={6}>
              <Grid item xs={1}>
                <Profile avatar_url={userdetails.avatar_url} />
              </Grid>
              <Grid item xs={1}>
                {userdetails.login}
              </Grid>

              <Grid item xs>
              </Grid>

              <Grid item xs>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </DialogTitle>



        <DialogContent dividers>


          <Typography gutterBottom>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container rowSpacing={10} columnSpacing={{ xs: 5, sm: 5, md: 5 }}>

                <Grid item xs={6} >
                  <Item> <p style={{ marginBottom: 10 }}><PeopleIcon fontSize='small' /></p><b>{userdetails.following ? userdetails.following : '0'}</b> Following</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item> <p style={{ marginBottom: 10 }}><PeopleIcon fontSize='small' /></p> <b>{userdetails.followers ? userdetails.followers : '0'}</b> Followers</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item> <p style={{ marginBottom: 10 }}><FmdGoodIcon fontSize='small' /></p>{userdetails.location ? userdetails.location : 'Location'}</Item>
                </Grid>
                <Grid item xs={6}>
                  <Item> <p style={{ marginBottom: 10 }}><PermIdentityIcon fontSize='small' /></p>
                    <a href={userdetails.html_url} target="_blank" > Profile</a></Item>

                </Grid>
              </Grid>
            </Box>
          </Typography>


        </DialogContent>
      </BootstrapDialog>
    </>
  );
}

export default CustomizedDialogs