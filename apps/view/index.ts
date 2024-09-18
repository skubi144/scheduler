import {app, BrowserWindow} from 'electron'
import {PATH12} from "./src/components/ext";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  console.log(PATH12)

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

