import React from 'react'

export default function Update({ update, setUpdate, updateStock }) {
    return (
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel2">상품 수정</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        수정할 ID <input type="text" name="id" value={update.id} onChange={(e) => setUpdate({ ...update, id: e.target.value })} />
                        <br />
                        새 제목 <input type="text" name="title" value={update.title} onChange={(e) => setUpdate({ ...update, title: e.target.value })} />
                        <br />
                        새 개봉년도 <input type="number" name="year" value={update.year} onChange={(e) => setUpdate({ ...update, year: e.target.value })} />
                        <br />
                        새 관객수 <input type="number" name="people" value={update.people} onChange={(e) => setUpdate({ ...update, people: e.target.value })} />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                        <button type="button" class="btn btn-primary" onClick={updateStock}>수정하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
