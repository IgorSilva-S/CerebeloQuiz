const { app, BrowserWindow } = require('electron');
const electron = require('electron');
const { PARAMS, VALUE,  MicaBrowserWindow, IS_WINDOWS_11, WIN10 } = require('mica-electron');
const path = require('node:path');
const {ipcMain} = require('electron')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    },
    titleBarOverlay: {
      color: '#2f324100',
      symbolColor: '#f0f0ff',
      height: 40
    },
    icon: __dirname + '/images/appIcon.png',
  });
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  ipcMain.on('toggleFullScreen', () => {
    mainWindow.setFullScreen(true)
  })

  ipcMain.on('untoggleFullScreen', () => {
    mainWindow.setFullScreen(false)
  })
};

/*electron.app.on('ready', () => {
  const win = new MicaBrowserWindow({
      width: 800,
      height: 600,
      autoHideMenuBar: true,
      show: false,
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#2f324100',
        symbolColor: '#ffffff',
        height: 40
      }
  });

  if (IS_WINDOWS_11) {
    win.setMicaAcrylicEffect();
  } else {
    win.setAcrylic(); 
  }

  win.loadFile(path.join(__dirname, 'index.html'));

  win.webContents.once('dom-ready', () => {
      win.show();
  });
});*/

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

try {
	require('electron-reloader')(module);
} catch {}