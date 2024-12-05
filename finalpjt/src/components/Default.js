import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Default() {

    let defaultList = [];

    const [tempList, setTempList] = useState(defaultList);

    const getList = () => {
        axios.get("https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data")
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setTempList(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <div>{tempList.map((each) => <div><input value={each.title} /></div>)} </div>
            <button onClick={getList}>call list</button>
            <br />     <br />
            <Link to="/manage">매니저모드</Link>
            

        </>

    )
}



// import React from 'react'
// import List from "./List";
// import Create from "./Create";
// import Update from "./Update";
// import Delete from "./Delete";
// import { useState } from 'react';

// export default function Default() {

//     const [list, setList] = useState([]);
//     const [create, setCreate] = useState({ id: "", name: "", saleprice: "", price: "", salepercent: "", dtime: "", storename: "", category: "", score: "" });
//     const [update, setUpdate] = useState({ id: "", name: "", saleprice: "", price: "", salepercent: "", dtime: "", storename: "", category: "", score: "" });
//     const [deletem, setDeletem] = useState("");

//     function getStock() {
//         fetch("https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject")
//             .then((response) => response.json())
//             .then((data) => setList(data));
//     }

//     function createStock() {
//         fetch("https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(create),
//         }).then(() => {
//             setCreate({ id: "", name: "", saleprice: "", price: "", salepercent: "", dtime: "", storename: "", category: "", score: "" });
//             getStock();
//         });
//     }

//     function updateStock() {
//         fetch(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject/${update.id}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(update),
//         }).then(() => {
//             setUpdate({ id: "", name: "", saleprice: "", price: "", salepercent: "", dtime: "", storename: "", category: "", score: "" });
//             getStock();
//         });
//     }

//     function deleteStock() {
//         fetch(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject/${deletem}`, {
//             method: "DELETE",
//         }).then(() => {
//             setDeletem("");
//             getStock();
//         });
//     }

//     return (
//         <div style={{ textAlign: "right", margin: "20px", backgroundColor: "skyblue" }}>
//             <button data-bs-toggle="modal" data-bs-target="#exampleModal">추가하기</button>
//             <Create create={create} setCreate={setCreate} createStock={createStock} />
//             <br />
//             <br />
//             <button onClick={getStock}>목록 보기</button>
//             <List list={list} />
//             <br />
//             <br />
//             <button data-bs-toggle="modal" data-bs-target="#exampleModal2">수정하기</button>
//             <Update update={update} setUpdate={setUpdate} updateStock={updateStock} />
//             <br />
//             <br />
//             <Delete deletem={deletem} setDeletem={setDeletem} deleteStock={deleteStock} />

//         </div>
//     )
// }
