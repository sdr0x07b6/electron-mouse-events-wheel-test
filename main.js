const { app, BrowserWindow } = require('electron');
const electronDragClick = require('electron-drag-click');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 300,
    frame: false,
  });

  win.loadFile('index.html');
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  electronDragClick();

  createWindow();
  createWindow();
});
