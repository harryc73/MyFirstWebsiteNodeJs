const spawn = require("child_process").spawn;
// you can add arguments with spawn('python',["path/to/script.py", arg1, arg2, ...])
const pythonProcess = spawn("python", ["database_manager.py"]);

const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(5000, () =>
  console.log(
    "Server is running on Port 5000, visit http://localhost:5000/ or http://127.0.0.1:5000 to access your website"
  )
);