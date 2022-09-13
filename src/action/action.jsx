import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from "../redux/api/apicmplt";
import { getUser } from "../redux/api/apisearch";
function App1() {
    const [data, setdata] = useState(0)
    const { posts, loading } = useSelector((state) => state.post);
    const { user } = useSelector((state) => state.user);
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
        <select className="dd" onClick={change}>
            <option value='0'>select option</option>
            {
                posts ?.map((users) => (
                    <option key={users.id} value={users.id}>
                        {users.id}
                    </option>
                ))
            }
        </select>
        <table >
            <thead>
                <tr >
                    <td>   Name  : {user?.name}   </td>
                </tr>
                <tr>
                    <td> Username : {user?.username}</td>
                </tr>
                <tr>
                    <td> City :{user?.address?.city}</td></tr>
                <tr>
                    <td> Email : {user?.email}</td>
                </tr>
                <tr>
                    <td> Phone : {user?.phone}</td>
                </tr>


            </thead>
        </table>
    </>

    )
}
export default App1
