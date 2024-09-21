const {contextBridge, ipcRenderer} = require('electron')

console.log("RUNNING PRELOAD!")
contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', (_event, value) => callback(value)),
  counterValue: (value) => ipcRenderer.send('counter-value', value)
})


