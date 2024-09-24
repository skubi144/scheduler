import fs from 'fs'
import path from "path";

export class Agent {
  userDataPath: string | undefined = undefined;
  dbName = 'data.dat';
  dbPath: string | undefined = undefined;


  private getDb() {
    if (!this.dbName) throw new Error("Fatal error, unable to open db");
    return JSON.parse(fs.readFileSync(path.resolve(this.dbPath!), {encoding: 'utf8', flag: "a+"})) ?? {};
  }

  setUserDataPath(userDataPath: string) {
    this.userDataPath = userDataPath;
    this.dbPath = path.resolve(this.userDataPath, this.dbName);
    let result = {};
    try {
      result = this.getDb();
    } catch (err) {
    }
    fs.writeFileSync(this.dbPath, JSON.stringify(result));
    return this;
  }

  _insert(into: string, value: any) {
  }

  _select(from: string, columns?: string[]) {
    return Promise.resolve(this.getDb()[from]);
  }

  _delete(from: string) {
  }
}
