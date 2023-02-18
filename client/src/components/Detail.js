import { useDispatch } from "react-redux";
import { setName } from "../store/userSlicer"
import { useState } from "react";

const Detail = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    return (
        <>
            <h1>Enter Name</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button onClick={()=> dispatch(setName(username))}>Save</button>
        </>
    )
}

export default Detail