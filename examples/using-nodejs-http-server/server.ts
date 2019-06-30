import * as http from "http";
import * as SocketIO from "socket.io";
import { Container } from "inversify";
import { InversifySocketServer } from "../../src";

let container = new Container();

let app = http.createServer();

let io = SocketIO(app);
let server = new InversifySocketServer(container, io);
server.build();

app.listen(3000);
console.log(`Server is listening on port 3000`);
