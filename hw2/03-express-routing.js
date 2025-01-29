const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

// landing page
app.get("/", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html", "Cache-Control": "no-store" });
  res.send("Express Routing Exercise");
});

// welcome page
app.get("/welcome", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html", "Cache-Control": "no-store" });
  res.send("<h2>Welcome! The server is live and running...<h2>");
});

// redirect page
app.get("/redirect", (req, res) => {
  res.status(302);
  res.set({ "Content-Type": "text/html", Location: "/redirected" });
  res.send();
});

// redirected page
app.get("/redirected", (req, res) => {
  res.status(200);
  res.set({ "Content-Type": "text/html", "Cache-Control": "no-store" });
  res.send("<h3>You have been redirected to this page.<h3>");
});

// cache page
app.get("/cache", (req, res) => {
  res.status(200);
  res.set({
    "Content-Type": "text/html",
    "Cache-Control": "public, max-age=86400",
  });
  res.send("<h3>This resource was cached.<h3>");
});

// cookie page
app.get("/cookie", (req, res) => {
  res.status(200);
  res.set({
    "Content-Type": "text/plain",
    "Cache-Control": "no-store",
  });
  res.cookie("hello-world-cookie", "hello=world", {
    sameSite: "None",
    secure: true,
  });
  res.send("cookies... yummm");
});

// all other routes
app.get("*", (req, res) => {
  res.status(404);
  res.set({ "Content-Type": "text/html" });
  res.send("<h2>404 - Page not found</h2>");
});

// start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
