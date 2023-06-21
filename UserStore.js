import { makeAutoObservable } from "mobx";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  users = null;
  photos = null;
  loading = false;
  error = null;

  setUsers(users) {
    this.users = users;
  }

  setPhotos(photos) {
    this.photos = photos;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  setError(error) {
    this.error = error;
  }
}

const userStore = new UserStore();

export default userStore;
