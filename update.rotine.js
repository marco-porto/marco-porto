const md = require("markdown-it")({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Autoconvert URL-like text to links
});
const emoji = require("markdown-it-emoji");
const fs = require("fs");

md.use(emoji);

(async () => {
  //assets
  //utilities
  const br = "<br>";
  const breakline = "\n";

  //img - url
  const bannerImgUrl =
    "https://raw.githubusercontent.com/4SMarcoPorto/4SMarcoPorto/master/README.assets/banner.png";
  const scrolldownImgUrl =
    "https://raw.githubusercontent.com/4SMarcoPorto/4SMarcoPorto/master/README.assets/scrolldown.gif";

  //component
  const bannerComponent =
    "<p align='center'><img src='" + bannerImgUrl + "'></p>";
  const scrolldownComponent =
    "<p align='center'>Check out my projects</p><p align='center'><img width='100' height='auto' src='" +
    scrolldownImgUrl +
    "'></p>";

  const bioComponent =
    "I am a programming student, my goal is to become a javascript fullstack developer. My passion for programming and the power it brings to the world is what motivates me to learn more and more. \n I am a maker too, i love doing projects with arduino or raspberry pi.";

  const currentlyLearnDataComponent = {
    header: "<h3>📖 Currently i am learning:</h3>",
    nodes: {
      reactjs:
        '<li><p><a href="https://github.com/facebook/react">React Js</a></p></li>',
      expressjs:
        '<li><p><a href="https://github.com/expressjs/express">Express Js</a></p></li>',
      electronjs:
        '<li><p><a href="https://github.com/electron/electron">Electron Js</a></p></li>',
    },
  };

  const currentlyLearnComponent =
    currentlyLearnDataComponent.header +
    br +
    "<ul>" +
    currentlyLearnDataComponent.nodes.reactjs +
    currentlyLearnDataComponent.nodes.expressjs +
    currentlyLearnDataComponent.nodes.electronjs +
    "</ul>";

  const imgCreditDataComponent = {
    MatheusCosta:
      '<h5>Gif by <a href="https://lottiefiles.com/24437-scroll-down">Lottiefiles - Matheus Costa</a></h5>',
    JeremyBishop:
      '<h5>Image by <a href="https://unsplash.com/photos/KrHNUF7rd3U">Unsplash - Jeremy Bishop</a></h5>',
  };

  const imgCreditComponent =
    imgCreditDataComponent.JeremyBishop + imgCreditDataComponent.MatheusCosta;

  //
  //actionprofilecommit check => [push-updates-to-your-profile-page] (https://github.com/marketplace/actions/push-updates-to-your-profile-page)
  const actionprofilecommit = "<!-- START gadpp -->";

  //document

  const headerReadme = "# Hi, I´m Marco 👋🏻";
  const bodyReadme =
    bannerComponent +
    br +
    bioComponent +
    br +
    br +
    br +
    currentlyLearnComponent +
    br +
    scrolldownComponent +
    br +
    imgCreditComponent;

  const document =
    headerReadme + breakline + bodyReadme + breakline + actionprofilecommit;

  const result = md.render(document);

  fs.writeFile("README.md", result, function (err) {
    if (err) return console.log(err);
  });
})();
