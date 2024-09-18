import {app, BrowserWindow} from 'electron'
import * as path from "path";

let mainWindow: BrowserWindow | undefined;
const createWindow = async () => {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  const htmlPath = path.resolve(__dirname, 'index.html');

  await mainWindow.loadFile(htmlPath);
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow)

