import {app, BrowserWindow, ipcMain} from 'electron'
import * as path from "path";
import Store from "electron-store";

Store.initRenderer();

let mainWindow: BrowserWindow | undefined;
const createWindow = async () => {
  mainWindow = new BrowserWindow({
    fullscreen: false,
    webPreferences: {
      preload: path.resolve(__dirname, './bundle.preload.js'),
      nodeIntegration: true,
    },
  })

  const htmlPath = path.resolve(__dirname, 'index.html');
  mainWindow.webContents.openDevTools();
  await mainWindow.loadFile(htmlPath);
}


app.whenReady().then(createWindow)

