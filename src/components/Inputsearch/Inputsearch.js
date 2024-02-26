import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { HandleChange, Searchuser } from '../FormControllers/Controller';
import { useDispatch, useSelector } from 'react-redux';
const Inputsearch = () => {
  const Inputsearchvalue = useSelector((state) => state.users.Inputsearch);

  const style = {
    display: 'flex',
    justifyContent: 'center',
    p: 1,
    m: 1,
    bgcolor: 'background.paper',
    borderRadius: 1,
  }
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ width: '40%' }}>
        <Box
          sx={{ ...style }}
        >
          <TextField fullWidth value={Inputsearchvalue}label="Search" id="search" onChange={(e) => HandleChange(e.target.value, dispatch)} onBlur={() => Searchuser(Inputsearchvalue, dispatch)} />

        </Box>
      </div>
    </>
  );
}
export default Inputsearch;
