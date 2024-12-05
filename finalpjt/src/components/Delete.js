import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function List() {

    let defaultList = [];

    const [detailList, setDetailList] = useState(defaultList);

    const getDetail = () => {
        axios.get("https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data")
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setDetailList(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>

            <h2>Detail page</h2>
            <button onClick={getDetail}>Load Detail</button>
            <div>{detailList.map((each) => <div key={each.id} style={{ border: '1px solid', padding: '10px', margin: '10px' }}>
                <div>ID: {each.id}</div>
                <div>Title: {each.title}</div>
                <div>People: {each.people}</div>
                <div>Year: {each.year}</div>
            </div>
            )}
            </div>
            <br />    <br />
            <Link to="/manage">뒤로가기</Link>
            <br />    <br />
        </>

    )
}



// import React from 'react'

// export default function Delete({ deletem, setDeletem, deleteStock }) {
//     return (<>
//         상품 삭제 <input type="number" value={deletem} onChange={(e) => setDeletem(e.target.value)} />
//         <button onClick={deleteStock}>삭제하기</button></>
//     )
// }
