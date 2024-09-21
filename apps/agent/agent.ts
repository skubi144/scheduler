import Store from 'electron-store';


let db: IDBDatabase | undefined = undefined;

const init = async (p: string) => {
  const store = new Store<{ a: number }>({});
  // @ts-ignore
  store.set('unicorn', '🦄');
  // @ts-ignore
  console.log(store.get('unicorn'));
//=> '🦄'
  // @ts-ignore
  console.log(store)

  // console.log({p})
  // // @ts-ignore
  // fs.mkdirSync(path.join(__dirname, "/folder"));
  // fs.writeFileSync(path.join(p,'dat.dat'), 'data.dat', {encoding: 'utf8', flag: "w+"});
  // console.log("PONIzej plik")
  // console.log('plik',fs.readdirSync(path.join(p,'dat.dat')));
  return new Promise<IDBDatabase | undefined>((res, rej) => {
    const DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being
// opened successfully, or not
    DBOpenRequest.onerror = (event) => {
      // note.appendChild(document.createElement("li")).textContent =
      //   "Error loading database.";
      console.log(event)
      rej(undefined)
    };

    DBOpenRequest.onsuccess = (event) => {
      // note.appendChild(document.createElement("li")).textContent =
      //   "Database initialized.";

      // store the result of opening the database.
      db = DBOpenRequest.result;
      console.log(db);
      res(db);
    };
  });
}

const getDb = () => db;

const add = (user) => {

}


export {init, getDb, db}

