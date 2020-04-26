/**ANCHOR En este archivo index.js creamos el servidor y lo inicializamos, como tambien incluimos todas las librerias que necesitamos*/

const app = require("./app");
const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio.listen(server);
require("./sockets")(io);

async function main() {
	await server.listen(app.get("port"));
	console.log(`server on port ${app.get("port")}`);
}

main();
