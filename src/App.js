import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Inputsearch from './components/Inputsearch/Inputsearch';
import Navbar from './components/TopNav/Navbar';
import { setloader, setusers } from './components/Slice/createSlice';
import UserList from './components/List/List';
import { useEffect } from 'react';
import { getUserslist } from './components/Service/userservice';


const App = () => {
  const dispatch = useDispatch();

  // Get users list/
  const Getuserslist = async () => {
    try {

      dispatch(setloader(true))
      const data = await getUserslist()
      if (data && data.status === 200) {
        dispatch(setusers(data.data))
        dispatch(setloader(false));
      }

    } catch (error) {

      dispatch(setloader(false));


    }
  }

  //  users list Api calling.
  useEffect(() => {
    Getuserslist()
  }, [])

  return (
    <>

      <Navbar />


      <div style={{ width: '100%' }}>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <Inputsearch />

        </Box>
      </div>
      <div style={{ width: '100%' }}>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
        >
          <UserList />
        </Box>
      </div>


    </>
  );
}

export default App;
