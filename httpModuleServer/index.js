const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  //   console.log("url:", url)

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to our home page</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Us</h1> <p>Here is our short history</p>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<p>404 page not found</p>");
  }

  //   res.write("Hello World");
  //   res.end();
  console.log("A request was made");
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
