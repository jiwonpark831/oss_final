import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Delete() {

    const [id, setId] = useState("");

    const axios_delete = () => {
        axios.delete(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject/${id}`)
            .then((response) => {
                alert("삭제되었습니다.");
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <h1>Delete page</h1 >
            <div>
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <button onClick={axios_delete}>Delete</button>
            </div>
            <br />    <br />
            <Link to="/manage">뒤로가기</Link>
            <br />    <br />
        </>

    )
}


