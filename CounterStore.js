import { makeAutoObservable } from "mobx";

class CounterStore {
  constructor() {
    makeAutoObservable(this);
  }

  number = 0;

  increment() {
    this.number++;
  }

  decrement() {
    this.number--;
  }
}

const counterStore = new CounterStore();
export default counterStore;
