import React from 'react'

export default function Create({ create, setCreate, createStock }) {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">상품 등록</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ID <input type="number" name="id" value={create.id} onChange={(e) => setCreate({ ...create, id: e.target.value })} />
                        <br />
                        제목 <input type="text" name="title" value={create.title} onChange={(e) => setCreate({ ...create, title: e.target.value })} />
                        <br />
                        개봉년도 <input type="number" name="year" value={create.year} onChange={(e) => setCreate({ ...create, year: e.target.value })} />
                        <br />
                        관객수 <input type="number" name="people" value={create.people} onChange={(e) => setCreate({ ...create, people: e.target.value })} />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                        <button type="button" class="btn btn-primary" onClick={createStock}>추가하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
