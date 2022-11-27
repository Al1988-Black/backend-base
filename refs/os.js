const os = require("os"); //operation sistem

console.log(os.platform()); // выдает win32

console.log(os.arch()); // выдает x64

console.log(os.cpus()); //инфо о компе

console.log(os.freemem()); // инфо о свободной памяти

console.log(os.totalmem()); // инфо обо всей памяти

console.log(os.uptime()); //инфо сколько компьтер включен

console.log(os.homedir()); // инфо о корневой директории
