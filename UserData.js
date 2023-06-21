import axios from "axios";
import React, { useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import { base_URI } from "./api";
import userStore from "../store/UserStore";

const UserData = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      userStore.setError(null);
      userStore.setUsers(null);
      userStore.setLoading(true);
      const user_res = await axios.get(`${base_URI}/todos`);
      const photo_res = await axios.get(base_URI + "/photos");

      const filteredData = user_res.data.filter(
        (user) => user.id >= 1 && user.id <= 50
      );

      const filteredPhoto = photo_res.data.filter(
        (photo) => photo.id >= 1 && photo.id <= 50
      );
      userStore.setUsers(filteredData);
      userStore.setPhotos(filteredPhoto);
    } catch (e) {
      userStore.setError(e);
    }
    userStore.setLoading(false);
  };

  const data = {
    userId: 1,
    title: "Another new post",
    body: "Hello again, world!",
  };

  // 보내는 데이터가 json형식임을 나타냄
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const postData = async () => {
    try {
      const res = await axios.post(`${base_URI}/posts`, data, config);
      console.log(res.data);
    } catch (e) {
      userStore.setError(e);
    }
  };

  return useObserver(() => (
    <>
      {userStore.loading && <div>로딩중..</div>}
      {userStore.error && <div>에러가 발생했습니다</div>}

      <ol>
        {userStore.users &&
          userStore.users.map((user) => <li key={user.id}>{user.title}</li>)}
      </ol>
      <div style={{ display: "flex" }}>
        {userStore.photos &&
          userStore.photos.map((photo) => (
            <span key={photo.id}>
              <img src={photo.thumbnailUrl} alt="thumbnail"></img>
            </span>
          ))}
      </div>

      <button onClick={postData}>Post Data</button>
    </>
  ));
};

export default UserData;
