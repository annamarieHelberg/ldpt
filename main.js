// The code was taken from https://github.com/techiediaries/python-electron-app and adjusted

const {app, BrowserWindow, Menu} = require('electron')
const menu = Menu;

let window;

function createWindow () {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            webSecurity: false
        }
    });
    window.loadFile('index.html');
    window.webContents.openDevTools();
    window.on('closed', function () {
        window = null;
    });

    let m = menu.buildFromTemplate([
        {
            label: 'Settings',
            submenu: [
                {
                    label: 'Environment',
                    submenu: [
                        {
                            label:'Text',
                            click: async () => {
                                window.loadFile('./src/html/text/a.text.html');
                            }
                        },
                        {
                            label:'Speech',
                            click: async () => {
                                window.loadFile('./src/html/speech/speech.html');
                            }
                        },
                        {
                            label:'Blockly',
                            click: async () => {
                                window.loadFile('./src/html/blockly/blockly.html');
                            }
                        }
                    ]
                },
                {
                    label: 'Export',
                    submenu: [
                        {
                            label: 'To C++',
                            click: async () => {
                                window.loadFile('./src/html/transpile/transpile.html');
                            }
                        }
                    ]
                },
                {
                    type: 'separator'
                },
                {
                    label:'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label:'Visit repository',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://github.com/annamarieHelberg/ldpt')
                    }
                }
            ]
        }
    ])
    menu.setApplicationMenu(m);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
});

app.on('activate', function () {
    if (window === null) {
        createWindow();
    }
});
