const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const games = {
  name: {
    value: "Free Fire",
    diamonds: {
      100: "10sm",
      200: "20sm",
      300: "30sm",
      400: "40sm",
      vaucher: "15sm",
      propusk: "45sm",
    },
  },
  name: {
    value: "Pubg",
    uc: {
      60: "10sm",
      180: "20sm",
      360: "55sm",
      vaucher: "20sm",
      propusk: "60sm",
    },
  },
  name: {
    value: "Clash of Clans",
    Gems: {
      100: "20sm",
      200: "35sm",
      500: "50sm",
      propusk: "75sm",
    },
  },
};

app.get("/games", (req, res));
app.listen(3000, () => {
  console.log("Hello World");
});
