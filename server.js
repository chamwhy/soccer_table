const express = require("express");
const app = express();
const fetch = require("node-fetch");
const { groupEnd } = require("console");

const port = process.env.PORT || 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static("public"));

function getHtml(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((d) => d.text())
      .then((body) => res(body));
  });
}

function get(){
    for(let i in event){
        if(isNaN(i)) continue;
        if(event[i]["firstElementChild"].innerText == "Goal"){
            const text = event[i].innerText;
            let a = text.slice(text.indexOf("\n")+1, text.lastIndexOf("\n"));
            console.log(a);
        }
    }
}

app.get("/:id", async (req, res) => {
  const html = await getHtml("https://google.com/");
  const tds = html.querySelectorAll("td");
  res.send(tds);
});

app.listen(port, () => {
  console.log("server is open at " + port);
});
