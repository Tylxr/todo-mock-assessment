import app from "./src/app";
import http from "http";

// Set port
const port = normalizePort("3000");
app.set("port", port);

// Initialise server
const server = http.createServer(app);
server.listen(port);

// Logging
server.on("error", onError);
server.on("listening", onListening);

// Generic express fn
function normalizePort(val: string) {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

// Generic express fn
function onError(error: any) {
	if (error.syscall !== "listen") {
		throw error;
	}

	const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

	switch (error.code) {
		case "EACCES":
			console.error(bind + " requires elevated privileges");
			process.exit(1);
			break;
		case "EADDRINUSE":
			console.error(bind + " is already in use");
			process.exit(1);
			break;
		default:
			throw error;
	}
}

// Generic express fn
function onListening() {
	const addr = server.address();
	const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
	console.log("Listening on " + bind);
}
