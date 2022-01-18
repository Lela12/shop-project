/* eslint-disable */
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { 재고context } from "./App.js";

import { CSSTransition } from "react-transition-group";

import { Nav } from "react-bootstrap";
import { connect } from "react-redux";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let [alert창, alert창변경] = useState(true);
  let [inputData, inputData변경] = useState("");

  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

  let 재고 = useContext(재고context);

  useEffect(() => {
    axios.get();

    let 타이머 = setTimeout(() => {
      alert창변경(false);
    }, 2000);
    console.log("안녕");
    return () => {
      clearTimeout(타이머);
    };
  }, []);

  let { id } = useParams();
  let history = useHistory();

  let 찾는상품 = props.dessert.find(function (상품) {
    return 상품.id == id;
  });

  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>

      {/* {inputData}
      <input
        onChange={(e) => {
          inputData변경(e.target.value);
        }}
      /> */}

      {alert창 === true ? (
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={"/assests/dessert" + (찾는상품.id + 1) + ".jpg"}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾는상품?.title}</h4>
          <p>{찾는상품?.content}</p>
          <p>{찾는상품?.price}</p>
          <Info 재고={props.재고} />
          <input onChange={() => {}} />
          <button
            className="btn btn-danger"
            onClick={() => {
              props.재고바꾸기([9, 11, 12]);
              props.dispatch({
                type: "항목추가",
                데이터: { id: 찾는상품.id, name: 찾는상품.title, quan: 1 },
              });
              history.push("/cart");
            }}
          >
            주문하기
          </button>
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

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              스위치변경(false);
              누른탭변경(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              스위치변경(false);
              누른탭변경(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });

  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다</div>;
    <div>0번째 내용입니다</div>;
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다</div>;
  } else if (props.누른탭 === 2) {
    <div>2번째 내용입니다</div>;
  }
}

function Info(props) {
  return <p>재고 : {props.재고[0]}</p>;
}

function state를props화(state) {
  console.log(state);
  //store데이터들을 props로 바꿔준것
  //redux store 데이터 가져와서 props로 변환해주는 함수
  return {
    state: state.reducer, //첫 리듀서에 담긴 데이터
    alert열렸니: state.reducer2, //리듀서2에 담긴 데이터(true)
  };
}

export default connect(state를props화)(Detail);
// export default Detail;
