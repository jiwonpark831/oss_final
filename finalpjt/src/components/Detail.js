import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);


  useEffect(() => {
    axios
      .get(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject/${id}`)
      .then((response) => {
        setSelected(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!selected) {
    return <div>lodaing..</div>;
  }

  return (
    <>
      <h1>{selected.name}</h1>
      <div>판매 가격: {selected.saleprice}</div>
      <div>날짜: {selected.dtime}</div>
      <div>카테고리: {selected.category}</div>
      <br />
      <Link to="/">목록으로 돌아가기</Link>
    </>
  );
}
