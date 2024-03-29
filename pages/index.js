import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { BaseLayout } from "../components/Layout";
import { addBook, toggledActive } from "../state/reducers/bookSlice";

export default function Home() {
  const [newBook, setNewBook] = useState("");

  const { bank, user, book } = useSelector((state) => state);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
  });

  const onchangeBook = (e) => {
    const newBook = e.target.value;
    console.log(newBook);
    setNewBook(newBook);
  };

  const dispatch = useDispatch();
  // const { depositMoney, withdrawMoney, cleanMoney, changeUser, cleanUser } =
  //   bindActionCreators(actionCreators, dispatch);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleClean = () => {
    const initName = { firstName: "", lastName: "" };
    setUserInfo(initName);
    cleanUser(initName);
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  return (
    <BaseLayout>
      <div className={styles.container}>
        <div>
          <span>books:</span>
          <span>{book.isActive ? "open" : "close"}</span>

          <div>
            <input onChange={onchangeBook} />
            <button onClick={() => dispatch(addBook(newBook))}>add book</button>
            <button onClick={() => dispatch(toggledActive())}>
              toggledActive
            </button>
          </div>
          {book.bookList.map((book, i) => (
            <div key={book + i}>{book}</div>
          ))}
          <h1>{bank}</h1>
          <button onClick={() => depositMoney(1000)}>Deposit</button>
          <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
          <button onClick={() => cleanMoney(0)}>cleanMoney</button>
        </div>

        <div>
          <h1>{user?.firstName}</h1>
          <h1>{user?.lastName}</h1>
          <div>
            <label>firstName.</label>
            <input
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>lastName.</label>
            <input
              name="lastName"
              value={userInfo.lastName}
              onChange={handleChange}
            />
          </div>

          <button onClick={() => changeUser(userInfo)}>changeUsers</button>
          <button onClick={handleClean}>cleanUser</button>
        </div>
      </div>
    </BaseLayout>
  );
}
