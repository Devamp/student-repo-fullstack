const http = require("http");
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  // store the request url (route)
  let url = req.url;

  // conditionally render the response based on the request url
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "<h2>Landing page... nothing to see here. Valid routes: /welcome, /redirect, /cache, /cookie <h2>"
    );
    res.end();
  } else if (url === "/welcome") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Welcome! The server is live and running...<h2>");
    res.end();
  } else if (url === "/redirect") {
    res.writeHead(302, {
      "Content-Type": "text/html",
      Location: "/redirected",
    });
    res.end();
  } else if (url === "/redirected") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h3>You have been redirected to this page.<h3>");
    res.end();
  } else if (url === "/cache") {
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This resource was cached.");
    res.end();
  } else if (url === "/cookie") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Set-Cookie": "hello=world",
    });
    res.write("cookies... yummm");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - page not found<h1>");
    res.end();
  }
});

// start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
