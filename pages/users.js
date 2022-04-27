import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../state/reducers/userSlice";
import { showModal } from "../state/reducers/modalSlice";
import { BaseLayout } from "../components/Layout";

const Users = () => {
  const userStore = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState("");

  const onchangeUser = (e) => {
    const newUser = e.target.value;
    console.log(newUser);
    setNewUser(newUser);
  };

  const testEl = (
    <div>
      <button type="button" onClick={() => {}}>
        test btn
      </button>
    </div>
  );
  return (
    <BaseLayout>
      <div className="">
        <h1>Users</h1>

        <button
          onClick={() =>
            dispatch(
              showModal({
                title: "I'm title",
                body: testEl,
              })
            )
          }
        >
          Modal show
        </button>

        <button
          onClick={() =>
            dispatch(
              showModal({
                title: "I'm title2222",
                body: (
                  <div>
                    <span>11</span>
                    {testEl}
                    <span>22</span>
                  </div>
                ),
              })
            )
          }
        >
          Modal show 2
        </button>

        <input onChange={onchangeUser} />
        {userStore.userList.map((name, i) => (
          <div key={name + i}>
            {i}:{name}
          </div>
        ))}
        <button onClick={() => dispatch(addUser(newUser))}>change users</button>
      </div>
    </BaseLayout>
  );
};

export default Users;
