import React from 'react'

export default function List({ list }) {
    return (
        <table id="movie_list">
            <thead>
                <tr>
                    <th>상품명</th>
                    <th>할인가</th>
                    <th>원가</th>
                    <th>할인율</th>
                    <th>페기까지</th>
                    <th>편의점</th>
                    <th>카테고리</th>
                    <th>평점</th>
                </tr>
            </thead>
            <tbody >
                {list.map((food) => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.saleprice}</td>
                        <td>{food.price}</td>
                        <td>{food.salepercent}</td>
                        <td>{food.dtime}</td>
                        <td>{food.storename}</td>
                        <td>{food.category}</td>
                        <td>{food.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
