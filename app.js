const express = require("express");
const app = express();
const connection = require("./db");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form.ejs");
});

app.post("/form", (req, res) => { // ← ③ これが保存処理！
  console.log("フォームの内容:", req.body);

  const { name, email, prefecture, address, message } = req.body;

  const sql = "INSERT INTO inquiries (name, email, prefecture, address, message) VALUES (?, ?, ?, ?, ?)";
  const values = [name, email, prefecture, address, message];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("保存エラー:", err);
      res.status(500).send("保存に失敗しました");
    } else {
      res.send("お問い合わせ内容を保存しました！");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
