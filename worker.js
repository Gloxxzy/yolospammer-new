const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const nodeCmd = require("node-cmd");
var messages = [
  "How far do you go",
  "Does size matter?",
  "The floor is shiny, and I see your hiney",
  "Ok lets talk send me your dick",
  "Bite my cock",
  "Lowkey fap to baby pictures of you ",
  "Pride month makes me horny",
  "Piss in a cup and let me drink it ",
  "Let me make your body crave for my dick",
  "I'd love to leak all over you",
  "Let me bully you with my cock",
  "If you listen to me, i'll make you feel better",
  "Lick my dick and lets get wild",
  "Ill rip your arsehole",
  "Ill break every bone in your body",
  "I wanna claw at your eyebrows",
  "Gay and ugly",
  "You're pretty gay",
  "Slit your wrists",
  "Slit your wrists and pour acid on them",
  "You've got a big cock",
  "Daddy",
  "You make my nipples rock hard",
  "Would you fuck for 50 quid",
  "You make me hard",
  "You're cute",
  "Lets fuck",
  "Big arse",
  "You make my nipples rock hard",
];

var fs = require("fs");
var http = require("http");

var proxy = fs.readFileSync("proxies.txt", "utf8").split("\n");
var request = require("request");
var args = process.argv.slice(2);
var name = process.argv.slice(2);
setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 300);
setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 500);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 600);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 700);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 800);
setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 500);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 600);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 700);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 800);
setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 500);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 600);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 700);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 800);
setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 500);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 600);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 700);

setInterval(function () {
  try {
    request(
      {
        url: `https://onyolo.com/${name}/message`,
        method: "POST",
        body: {
          text: messages[Math.floor(Math.random() * messages.length)],
          cookie: "lzkjvll3xgq7l82uk4kyq",
          wording: "Yolo spammer by NotII",
        },
        json: true,
        proxy: "http://" + proxy[Math.floor(Math.random() * proxy.length)],
      },
      (err, body, res) => {
        console.log(res);
      }
    );
  } catch (e) {
    throw e;
  }
}, 800);
