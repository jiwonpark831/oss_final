import React from 'react'

export default function Delete({ deletem, setDeletem, deleteStock }) {
    return (<>
        상품 삭제 <input type="number" value={deletem} onChange={(e) => setDeletem(e.target.value)} />
        <button onClick={deleteStock}>삭제하기</button></>
    )
}
