import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../state/reducers/userSlice";
import { BaseLayout } from "../components/Layout";

const Posts = () => {
  const userStore = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState("");

  const onchangeUser = (e) => {
    const newUser = e.target.value;
    console.log(newUser);
    setNewUser(newUser);
  };

  return (
    <BaseLayout>
      <div className="">
        <h1>Posts</h1>
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

export default Posts;
