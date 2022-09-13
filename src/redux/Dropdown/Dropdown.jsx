// return (<div>
//     {      
//       posts.map((item) => (
//         <div key={item.id}>
//           <h4>id: {item.id},
//             username: {item.username}, email: {item.email}
//           </h4>
//         </div>  
//       ))
//     }
//   </div>
//   )


// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';



// function App1() {
//     const [user, setUser] = useState([]);
//     const { posts, loading } = useSelector((state) => state.post);
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getPosts())
//     }, [dispatch])

//     if (loading) {
//         return <h1>Loading...</h1>
//     }

//     const change = (e) => {
//         axios.get("https://jsonplaceholder.typicode.com/users/" + e.target.value).
//             then((res) => console.log(res.data))            
//     }
//     return (<>
//         <select className="dd" onChange={change}>
//             <option value='0'>select option</option>
//             {
//                 posts.map((user) => (
//                     <option key={user.id} value={user.id}>
//                         {user.id}
//                     </option>
//                 ))
//             }
//         </select>
//         {/* <Table>
//         <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//         </Table> */}
//         </>
        
//     )
// }
// export default App1
// export const getPosts = createAsyncThunk("posts/getPosts", async () => {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//         res.json());
//     return resp;
// })