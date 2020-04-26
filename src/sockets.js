//ANCHOR Exportamos todas las funciones o eventos del socket.io

module.exports = (io) => {
	io.on("connection", (socket) => {
		console.log("new connection");

		socket.emit("init");
	});
};
