const fs = require("fs");
const path = require("path");
const request = require("request-promise");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) {
    console.log(err);
  }
  JSON.parse(body).data.children.forEach((item) => {
    if (
      path.extname(item.data.url) === ".jpg" ||
      path.extname(item.data.url) === ".gif" ||
      path.extname(item.data.url) === ".png"
    ) {
      console.log("yup");
      const dataPathForSavingFiles = path.join(
        __dirname,
        "downloads",
        item.data.id
      );

      request(item.data.url, { encoding: "base64" }).then((media) => {
        fs.writeFile(
          path.join(
            __dirname,
            "../downloads",
            item.data.id + path.extname(item.data.url)
          ),
          media,
          { encoding: "base64" },
          (err) => {
            if (err) {
              console.log("you fucked up");
              console.log(err);
            }
          }
        );
      });
    } else {
      console.log("nope");
    }
  });
});
