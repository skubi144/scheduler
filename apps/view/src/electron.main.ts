import {app, BrowserWindow} from 'electron'
import * as path from "path";

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

