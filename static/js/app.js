if ("serviceworker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceworker
      .register("static/js/serviceworker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

app.post("/add.html", function (req, res) {
  db.serialize(() => {
    db.run(
      "INSERT INTO email(email,name) VALUES(?,?)",
      [req.body.email, req.body.name],
      function (err) {
        if (err) {
          return console.log(err.message);
        }
        res.send(
          "Thank you " +
            req.body.name +
            " we have added your email " +
            req.body.email +
            " to our distribution list."
        );
      }
    );
  });
});