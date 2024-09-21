import {BaseAgent, Mutations, Queries} from "./agent.interface";
import {User} from "./types";


export class Agent implements BaseAgent {
  public mutations: Mutations = {
    createUser: function (user: User): Promise<User> {
      throw new Error("Function not implemented.");
    }
  };
  public queries: Queries = {
    getUser: function (user: string): Promise<User> {
      throw new Error("Function not implemented.");
    },
    getUsers: function (user: string): Promise<User> {
      throw new Error("Function not implemented.");
    }
  };
}
