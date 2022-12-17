const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  startDrag: (fileName: string) => {
    ipcRenderer.send("ondragstart", fileName);
  },
});

console.log("preloaded!");
