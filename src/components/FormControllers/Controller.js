import { setinputsearch, setloader, setmodalshowhide, setuserdetails, setusers } from "../Slice/createSlice";
import { getUserslist, searchuser, userdetails } from "../Service/userservice";


// get user details controller
export const getuserurl = async (url, dispatch) => {
  debugger;
  if (url) {
    dispatch(setloader(true));
    const data = await userdetails(url)
    if (data && data.status === 200) {
      dispatch(setuserdetails(data.data))
      dispatch(setloader(false));
      dispatch(setmodalshowhide(true));

    }
  }

}



// handle change controller
export const HandleChange = (text, dispatch) => {
  debugger;
  dispatch(setinputsearch(text))

}


// Search user controller
export const Searchuser = async (text, dispatch) => {
  debugger;
  if (text) {
    dispatch(setloader(true));

    const data = await searchuser(text)
    if (data && data.status === 200) {
      dispatch(setusers([data.data]))
    }
    dispatch(setinputsearch(text))
    dispatch(setloader(false));

  } else {
    GetUserslist(dispatch)
   
  }


}


// Get Users list
const GetUserslist = async (dispatch) =>{
  dispatch(setloader(false));
  const data = await getUserslist()
  if (data && data.status === 200) {
    dispatch(setusers(data.data))
    dispatch(setloader(false));
  }
}
