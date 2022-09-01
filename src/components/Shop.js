import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount);
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>Adidas Shoes $50</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
      Add this item to card : Balance : {amount}
      <button
        className="btn btn-primary"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Shop;
