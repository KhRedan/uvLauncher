const shell = require("electron").shell;
const remote = require("electron").remote;
const openbtn = document.getElementById("playbut");

openbtn.addEventListener("click", () => {
  shell.openExternal("fivem://connect/cfx.re/join/4a6ml8");
});
const tsbtn = document.getElementById("teamspeak");

tsbtn.addEventListener("click", () => {
  shell.openExternal("ts3server://33763.zap-ts3.com?password=Zgiwmiboun123");
});
const youtubebtn = document.getElementById("youtube");

youtubebtn.addEventListener("click", () => {
  shell.openExternal(
    "https://www.youtube.com/channel/UCcW2P1jsG7eh50LNdCFziMA"
  );
});
const instagrambtn = document.getElementById("instagram");

instagrambtn.addEventListener("click", () => {
  shell.openExternal("https://www.instagram.com/united__vision/?hl=fr");
});
const facebookbtn = document.getElementById("facebook");

facebookbtn.addEventListener("click", () => {
  shell.openExternal("https://www.facebook.com/groups/2578356725781054/");
});
const discordbtn = document.getElementById("discord");

discordbtn.addEventListener("click", () => {
  shell.openExternal("https://discord.gg/yD6ECHw");
});

const fermerbtn = document.getElementById("fermer");

fermerbtn.addEventListener("click", () => {
  remote.getCurrentWindow().close();
});

const reduirebtn = document.getElementById("reduire");

reduirebtn.addEventListener("click", () => {
  remote.BrowserWindow.getFocusedWindow().minimize();
});
