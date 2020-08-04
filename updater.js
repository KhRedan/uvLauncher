const os = require("os");
const { Notification, app, autoUpdater, dialog } = require("electron");

function appUpdater() {
	const checking = new Notification("update", {
		body: "checking-for-update",
	});

	const available = new Notification("update", {
		body: "update-available",
	});

	const unavailable = new Notification("update", {
		body: "update-not-available",
	});
	autoUpdater.on("error", (err) => console.log(err));
	autoUpdater.on("checking-for-update", () => {
		checking.show();
	});
	autoUpdater.on("update-available", () => {
		available.show();
	});
	autoUpdater.on("update-not-available", () => {
		unavailable.show();
	});

	autoUpdater.on("update-downloaded", (event, releaseNotes, releaseName) => {
		let message =
			app.getName() +
			" " +
			releaseName +
			" is now available. It will be installed the next time you restart the application.";
		if (releaseNotes) {
			const splitNotes = releaseNotes.split(/[^\r]\n/);
			message += "\n\nRelease notes:\n";
			splitNotes.forEach((notes) => {
				message += notes + "\n\n";
			});
		}

		dialog.showMessageBox(
			{
				type: "question",
				buttons: ["Install and Relaunch", "Later"],
				defaultId: 0,
				message:
					"A new version of " +
					app.getName() +
					" has been downloaded",
				detail: message,
			},
			(response) => {
				if (response === 0) {
					setTimeout(() => autoUpdater.quitAndInstall(), 1);
				}
			}
		);
	});

	setInterval(() => {
		autoUpdater.checkForUpdates();
	}, 3600000);
}

exports = module.exports = {
	appUpdater,
};
