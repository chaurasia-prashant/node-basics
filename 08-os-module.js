const os = require('os')


// Info about current user
const user = os.userInfo()


// method return the sys uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);