import {BaseAgent} from "./agent.interface";
import {User} from "./types";
import Store from "electron-store";


export class Agent implements BaseAgent {
  store = new Store<{ users: User[] }>();

  createUser(user: User): Promise<User> {
    this.store.get('users');
    return Promise.resolve(user);
    }

  getUser(user: string): Promise<User> {
      throw new Error("Function not implemented.");
  }

  getUsers(user: string): Promise<User> {
      throw new Error("Function not implemented.");
  }
}
