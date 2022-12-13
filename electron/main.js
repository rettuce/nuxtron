const isApp = process.env.NODE_ENV === "development" ? false : true;

var childprocess;
if (isApp) {
  const path = require("path");
  const { fork } = require("child_process");
  childprocess = fork(path.join(__dirname, "../.output/server/index.mjs"));
} else {
  const util = require("util");
  const childProcess = require("child_process");
  const exec = util.promisify(childProcess.exec);
  childprocess = exec(`node .output/server/index.mjs`);
}

const { app, BrowserWindow, ipcMain, Menu } = require("electron");

function createWindow(id_) {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    // webPreferences: {
    //   preload: path.join(__dirname, "preload.js"),
    // },
  });
  mainWindow.loadURL("http://localhost:3000");
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  setTimeout(
    function () {
      createWindow(0);
    },
    isApp ? 10000 : 1000
  );
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", function () {
  if (childprocess) process.kill(childprocess.pid);
  app.quit();
});
