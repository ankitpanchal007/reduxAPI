
import { createAsyncThunk } from "@reduxjs/toolkit";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App1() {
    const [data, setdata] = useState(0)
    const { posts, loading } = useSelector((state) => state.post);
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if (loading) {
        return <h1>Loading...</h1>
    }

    const change = (e) => {
        setdata(e.target.value)
        dispatch(getUser(e.target.value))
    }
    return (<>
        <select className="dd" onChange={change}>
            <option value='0'>select option</option>
            {
                posts?.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.id}
                    </option>
                ))
            }
        </select>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                <tr>
                    <td>{user?.name}</td>
                    <td>{user?.username}</td>
                    <td>{user?.address?.city}</td>
                    <td>{user?.email}</td>

                </tr>
            </thead>
        </table>
    </>

    )
}
export default App1
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json());
    return resp;
})

export const getUser = createAsyncThunk("user/getUser", async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
        return res.json()
    });
    return response;
})

