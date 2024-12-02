import React from 'react'

export default function Manager() {
    return (<>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal">추가하기</button>
        <Create create={create} setCreate={setCreate} createStock={createStock} />
        <br />
        <br />
        <button onClick={getStock}>목록 보기</button>
        <List list={list} />
        <br />
        <br />
        <button data-bs-toggle="modal" data-bs-target="#exampleModal2">수정하기</button>
        <Update update={update} setUpdate={setUpdate} updateStock={updateStock} />
        <br />
        <br />
        <Delete deletem={deletem} setDeletem={setDeletem} deleteStock={deleteStock} />
    </>
    )
}
