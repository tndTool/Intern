import React, { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useDispatch } from "react-redux";
import { userSlice } from "./redux/reducers/UserSlice";
import { fetchUsers } from "./redux/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  return (
    <div className="App">
      {/* {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {JSON.stringify(users, null, 2)} */}
      <PostContainer />
    </div>
  );
}

export default App;
