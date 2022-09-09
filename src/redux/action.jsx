import React from "react";
import { Connect } from "react-redux";
import axios from "axios";
export const Loading = () => ({
    type: Loading,
    payload: {
     
    }
  });export const Successfull = () => ({
    type: Successfull,
    payload: {
      
    }
  });export const Error = () => ({
    type: Error,
    payload: {
     
    }
  });

// axios.get("https://jsonplaceholder.typicode.com/todos")
// .then((res) => { console.log(res.data); })


