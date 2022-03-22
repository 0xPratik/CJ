import { UTurnRight } from '@mui/icons-material';
import React from 'react';
import { handleResponse } from './helper';
export const getUri =( uri :string,callback:Function)=> {
    
    // const requestOptions = {
    //     method: 'GET',
    //     redirect:'follow'as RequestRedirect,
    //     headers:{'Content-Type': 'application/json','User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    //     'Accept':'*/*','Accept-Encoding':'gzip, deflate, br','Connection': 'keep-alive','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET'}
    
    // }//return fetch('https://work-java-1.herokuapp.com/userall', requestOptions)
    // return fetch(uri, requestOptions)
    //     .then(handleResponse)
    //     .then((todos) => {
    //         return todos;
    //     });
var xhr = new XMLHttpRequest();
xhr.open('GET', uri);
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200) {
    callback(xhr.responseText); // Another callback here
  }
};
 xhr.send();
};