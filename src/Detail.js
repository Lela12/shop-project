/* eslint-disable */
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();

  let 찾는상품 = props.dessert.find(function (상품) {
    return 상품.id == id;
  });

  return (
    <div className="container">
      <박스>
        <제목 색상="red">Detail</제목>
      </박스>
      <div className="row">
        <div className="col-md-6">
          <img src={"/assests/dessert1.jpg"} alt="dessert" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾는상품?.title}</h4>
          <p>{찾는상품?.content}</p>
          <p>{찾는상품?.price}</p>
          <button className="btn btn-danger">주문하기</button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
