const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// landing page
app.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html", "Cache-Control": "no-store" });
  res.send("Form Exercise");
});

// form page
app.get("/form", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html", "Cache-Control": "no-store" });
  res.send(
    `<form action="/submit" method="get"><label for="username">Username:</label><br>
    <input type="text" id="username" name="username"><br><label for="email">Email:</label><br>
    <input type="email" id="email" name="email"><br><label for="comments">Comments:</label><br>
    <textarea id="comments" name="comments"></textarea><br>
    <label for="newsletter">Subscribe to newsletter:</label><input type="checkbox" id="newsletter" name="newsletter" value="yes"><br><br>
    <input type="submit" value="Submit"></form>`
  );
});

// submit page with query parameters
app.get("/submit", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html", "Cache-Control": "no-store" });
  res.send(
    `<p>Username: ${req.query.username ? req.query.username : " N/A"}</p>
    <p>Email: ${req.query.email ? req.query.email : " N/A"}</p>
    <p>Comments: ${req.query.comments ? req.query.comments : " N/A"}</p>
    <p>Newsletter: ${
      req.query.newsletter
        ? " Yes, sign me up for the newsletter."
        : " No, thank you."
    }</p>`
  );
});

// start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
