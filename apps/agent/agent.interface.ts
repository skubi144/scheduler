import {User} from "./types";

export interface Mutations {
  createUser: (user: User) => Promise<User | undefined>

}

export interface Queries {
  getUser: (user: User['id']) => Promise<User | undefined>;
  getUsers: (user: User['id']) => Promise<User | undefined>;

}

export abstract class BaseAgent {
  createUser: (user: User) => Promise<User | undefined>

  getUser: (user: User['id']) => Promise<User | undefined>;
  getUsers: (user: User['id']) => Promise<User | undefined>;
}
