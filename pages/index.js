import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

export default function Home() {
  const state = useSelector((state) => state);
  // const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, cleanMoney, changeUser, cleanUser } =
    bindActionCreators(actionCreators, dispatch);

    console.log(state)

  return (
    <div className={styles.container}>
      <h1>{state.bank}</h1>
      <h1>{state.user?.firstName}</h1>
      <h1>{state.user?.lastName}</h1>

      <div>
        <button onClick={() => depositMoney(1000)}>Deposit</button>
        <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
        <button onClick={() => cleanMoney(0)}>cleanMoney</button>
      </div>

      <div>
        <div>
          <label>1.</label>
          <input />
        </div>

        <div>
          <label>2.</label>
          <input />
        </div>
      </div>

      <button
        onClick={() => changeUser({ firstName: "gary", lastName: "tsao" })}
      >
        changeUsers
      </button>
      <button onClick={() => cleanUser({ firstName: "", lastName: "" })}>
        cleanUser
      </button>
    </div>
  );
}
