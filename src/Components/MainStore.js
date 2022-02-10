//using class component as most of the docs of mobx are in class components
import { makeObservable, observable, action } from "mobx";

export class MainStoreClass {
  toolList = [];
  candidates = [];
  workers = [];

  constructor() {
    makeObservable(this, {
      toolList: observable,
      workers: observable,
      candidates: observable,
      addTool: action,
      removeTool: action,
      loadCandidates: action,
      hireCandidate: action,
      fireWorker: action,
    });
  }

  addTool = (order, timeStamp) => {
    const item = {
      id: timeStamp,
      toolName: order.toolName,
      count: order.count,
      ordered: timeStamp,
    };
    this.toolList.push(item);
  };

  removeTool = (order) => {
    const filteredOrders = this.toolList.filter((tool) => tool.id !== order.id);
    this.toolList = filteredOrders;
    console.log(filteredOrders);
  };

  loadCandidates = (people) => {
    const candidates = people.map((person) => {
      return {
        name: person.name,
        id: person.id,
        city: person.address.city,
        email: person.email,
      };
    });
    this.candidates.push(...candidates);
  };

  hireCandidate = (candidate) => {
    this.workers.push(candidate);
    const filteredCandidates = this.candidates.filter(
      (person) => person.id !== candidate.id
    );
    this.candidates = filteredCandidates;
    console.log(this.workers);
  };

  fireWorker = (worker) => {
    this.candidates.push(worker);
    const filteredWorkers = this.workers.filter(
      (person) => person.id !== worker.id
    );
    this.workers = filteredWorkers;
  };
}
export const MainStore = new MainStoreClass();
