import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { getuserurl } from '../FormControllers/Controller';
import Modal from '../Modal/Modal';
const UserList = () => {
  const dispatch = useDispatch();


  const users = useSelector((state) => state.users.value);
  const Ismodalshowhide = useSelector((state) => state.users.Ismodalshowhide);

  return (
    <>
      {Ismodalshowhide && <Modal open={Ismodalshowhide} />}
      <Paper style={{ maxHeight: 300, width: '30%', overflow: 'auto' }} elevation={0}>
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {[...users].map((value) => {
            const labelId = `checkbox-list-secondary-label-${value.id}`;
            return (
              <ListItem
                key={value.id}
                secondaryAction={
                  <>
                    <IconButton onClick={() => getuserurl(value.url, dispatch)}>
                      <VisibilityIcon />

                    </IconButton>
                  </>
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value.avatar_url + 1}`}
                      src={`${value.avatar_url}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={value.login} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List></Paper></>

  );
}
export default UserList;