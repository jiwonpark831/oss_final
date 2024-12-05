import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Default() {

    let defaultList = [];
    const navigate = useNavigate();

    const [tempList, setTempList] = useState(defaultList);

    if (tempList.length === 0) {
        axios.get("https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject")
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setTempList(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const goDetail = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <>
            <table border="1" style={{ width: '50%', textAlign: 'center', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>가격</th>
                        <th>남은 시간</th>
                    </tr>
                </thead>
                <tbody>
                    {tempList.map((each) => (
                        <tr key={each.id} onClick={() => goDetail(each.id)} style={{ cursor: 'pointer' }}>
                            <td>{each.name}</td>
                            <td>{each.saleprice}</td>
                            <td>{each.dtime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/manage">매니저모드</Link>


        </>

    )
}
