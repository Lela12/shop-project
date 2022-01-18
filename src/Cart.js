/*Eslint-disable*/
import React, { useEffect, memo } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Cart(props) {
  let state = useSelector((state) => state); //redux에 있던 모든 state
  console.log(state.reducer);
  let dispatch = useDispatch();

  return (
    <div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경</th>
            </tr>
          </thead>
          <tbody>
            {state.reducer.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>{a.name}</td>
                  <td>{a.quan}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch({
                          //액션 파라미터
                          type: "수량증가",
                          데이터: a.id,
                        }); //redux store에 전달되는 데이터(payload)
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch({ type: "수량감소", 데이터: a.id }); //장바구니 안에 있는 상품아이디
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      {props.alert열렸니 === true ? (
        <div className="my-alert2">
          <p>
            지금 구매하시면 신규할인 20%
            <button
              className="close"
              onClick={() => {
                dispatch({ type: "alert닫기" });
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </p>
        </div>
      ) : null}
    </div>
  );
}

// function state를props화(state) {
//   //store데이터들을 props로 바꿔준것
//   //redux store 데이터 가져와서 props로 변환해주는 함수
//   return {
//     state: state.reducer, //첫 리듀서에 담긴 데이터
//     alert열렸니: state.reducer2, //리듀서2에 담긴 데이터(true)
//   };
// }

// export default connect(state를props화)(Cart);
export default Cart;
