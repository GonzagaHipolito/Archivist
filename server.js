const http=requiere('http');
const app=requiere('.app');

const port=process.env.PORT ||8000;

const server=http.createServer(app);

server.listen(port);//arranque

