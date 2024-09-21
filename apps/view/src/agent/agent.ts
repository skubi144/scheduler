// let db: IDBDatabase | undefined = undefined;
//
// export const init = async () =>
//   new Promise<IDBDatabase | undefined>((res, rej) => {
//     const DBOpenRequest = window.indexedDB.open("toDoList", 4);
//
// // these two event handlers act on the database being
// // opened successfully, or not
//     DBOpenRequest.onerror = (event) => {
//       // note.appendChild(document.createElement("li")).textContent =
//       //   "Error loading database.";
//       console.log(event)
//       rej(undefined)
//     };
//
//     DBOpenRequest.onsuccess = (event) => {
//       // note.appendChild(document.createElement("li")).textContent =
//       //   "Database initialized.";
//
//       // store the result of opening the database.
//       db = DBOpenRequest.result;
//       console.log(db);
//       res(db);
//     };
//   })
//
// export const getDb = () => db;
const hello = () => 'Hello World!';
