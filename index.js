const server = require('./server');

const port = 4000;

server.listen(port, () => {
    console.log(`\n***Api running on port ${port}***\n`)
})

