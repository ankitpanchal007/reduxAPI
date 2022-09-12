// import React from "react";
// import axios from "axios";

// export const Loading = () => (
//   {
//   type: Loading,
// });
// export const Successfull = (response) => ({
//   type: Successfull,
//   payload: response

// });
// export const Error = (Error) => ({
//   type: Error,
//   payload: Error

// });
// export const fetchdata = () => {
//   return (dispatch) => {
//     axios.get("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => {
//         const response = res.data
//         dispatch(Successfull(response))
//       })
//       .catch(err => {
//         const error = err.data
//         dispatch(Error(error));
//       })
//   }
// }



