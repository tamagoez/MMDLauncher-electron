const path = require("path");
const fs = require("fs");
const https = require("https");
const {
  app,
  BrowserWindow,
  ipcMain,
  nativeImage,
  NativeImage,
} = require("electron");

app.whenReady().then(() => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, "preload.js"),
    },
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#f5f3f2",
      symbolColor: "#74b1be",
      height: 40,
      transparent: true,
    },
  });

  mainWindow.loadFile("dist/index.html");
  // mainWindow.webContents.openDevTools({ mode: 'detach' });
});

app.once("window-all-closed", () => app.quit());

const iconName = path.join(__dirname, "iconForDragAndDrop.png");
const icon = fs.createWriteStream(iconName);
https.get(
  "https://img.icons8.com/ios/452/drag-and-drop.png",
  (response: any) => {
    response.pipe(icon);
  }
);
// Create a new file to copy - you can also copy existing files.
fs.writeFileSync(
  path.join(__dirname, "text.txt"),
  "# First file to test drag and drop"
);

ipcMain.on("ondragstart", (event: any, filePath: string) => {
  event.sender.startDrag({
    file: path.join(__dirname, filePath),
    icon: iconName,
  });
});
