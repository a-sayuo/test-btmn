const express = require("express");
const app = express();
const connection = require("./db");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form.ejs");
});

app.post("/form", (req, res) => {
  console.log("フォームの内容:", req.body);

  const { name, email, prefecture, address, message } = req.body;

  const sql = "INSERT INTO inquiries (name, email, prefecture, address, message) VALUES (?, ?, ?, ?, ?)";
  const values = [name, email, prefecture, address, message];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("保存エラー:", err); // ← エラーの詳細を表示
      return res.status(500).send("保存に失敗しました"); // ← return を追加
    }

    console.log("保存成功:", result); // ← 成功時のログも追加
    return res.render("success.ejs", { message: "お問い合わせ内容を保存しました！" }); // ← return を追加
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
