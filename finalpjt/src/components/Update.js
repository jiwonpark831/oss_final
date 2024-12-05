import React from 'react'
import axios from "axios";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Update() {
    const [id, setId] = useState("");
    const nameR = useRef();
    const salepriceR = useRef();
    const priceR = useRef();
    const salepercentR = useRef();
    const dtimeR = useRef();
    const storenameR = useRef();
    const categoryR = useRef();

    const updateList = () => {
        if (!nameR.current.value) {
            alert("상품명을 입력하세요");
            return;
        }
        if (!salepriceR.current.value) {
            alert("가격을 입력하세요");
            return;
        }
        if (!dtimeR.current.value) {
            alert("폐기까지 남은 시간을 입력하세요");
            return;
        }
        if (!storenameR.current.value) {
            alert("편의점 이름을 입력하세요");
            return;
        }

        const dataUpdate = {
            name: nameR.current.value,
            saleprice: salepriceR.current.value,
            price: priceR.current.value,
            salepercent: salepercentR.current.value,
            dtime: dtimeR.current.value,
            storename: storenameR.current.value,
            category: categoryR.current.value
        };

        axios.put(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject/${id}`, dataUpdate)
            .then((response) => {
                console.log(response);
                alert("업데이트되었습니다.");
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <>
            <h1>Update page</h1>
            <div>
                <p>ID:</p>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>

            <div>
                <p>상품명:</p>
                <input ref={nameR} type="text" />
            </div>
            <div>
                <p>가격:</p>
                <input ref={salepriceR} type="number" />
            </div>
            <div>
                <p>원가:</p>
                <input ref={priceR} type="number" />
            </div>
            <div>
                <p>할인율:</p>
                <input ref={salepercentR} type="number" />
            </div>
            <div>
                <p>폐기까지 남은 시간:</p>
                <input ref={dtimeR} type="number" />
            </div>
            <div>
                <p>편의점 이름:</p>
                <input ref={storenameR} type="text" />
            </div>
            <div>
                <p>카테고리:</p>
                <input ref={categoryR} type="text" />
            </div>
            <button onClick={updateList}>Update</button>
            <br />    <br />
            <Link to="/manage">뒤로가기</Link>
            <br />    <br />
        </>
    )
}

