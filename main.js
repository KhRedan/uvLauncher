const electron = require("electron");
const app = electron.app;
const BrownerWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const os = require("os");
const isDev = require("electron-is-dev");
const { appUpdater } = require("./updater");

let my_path = process.execPath; // works (uses application icon)

if (os.platform() == "win32") {
	app.setUserTasks([
		{
			program: process.execPath,
			arguments: "--new-window",
			iconPath: my_path,
			iconIndex: 0,
			title: "UnitedVision Launcher",
			description: "Le Launcher Officiel de United Vision",
		},
	]);
}

let win;

function createWindow() {
	win = new BrownerWindow({
		width: 1280,
		height: 720,
		icon: __dirname + "/uv.png",
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			devTools: false,
		},
	});

	win.setMenuBarVisibility(false);
	win.loadURL(
		url.format({
			pathname: path.join(__dirname, "index.html"),
			protocol: "file",
			slashes: true,
		})
	);
	win.on("closed", () => {
		win = null;
	});

	const page = win.webContents;

	page.once("did-frame-finish-load", () => {
		if (!isDev) {
			appUpdater();
		}
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
app.on("activate", () => {
	if (win === null) {
		createWindow();
	}
});
