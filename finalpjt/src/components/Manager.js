import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

export default function Manager() {

  let defaultList = [];

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
            <tr key={each.id}>
              <td>{each.name}</td>
              <td>{each.saleprice}</td>
              <td>{each.dtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />     <br />
      <Link to="/create">Create</Link>
      <br />
      <Link to="/update">Update</Link>
      <br />
      <Link to="/delete">Delete</Link>
      <br /><br />

      <Link to='/'>go to main page</Link>

    </>
  )
}
