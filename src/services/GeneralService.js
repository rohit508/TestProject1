import axios from 'axios';
/*Post Request*/
export const PostService = (Method, Body, URL) => {
    //debugger
    return axios.post(URL + Method, Body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization:`Bearer ${gettoken()}`,
      },
    });
  }

  /*Get Request*/
export const GetService = ( URL,token = gettoken()) => {
    return axios.get(URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  }
//  Get token
  const gettoken = () => {
 return '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'
  };