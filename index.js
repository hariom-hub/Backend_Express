const express = require("express");
const app = express();

console.dir(app);


let port = 3000;
let port2 = 5000;


app.listen(port, () => {

    console.log(`app is listening on a port ${port}`);
})

// app.listen(port2, () => {

//     console.log(`app is listening on a port ${port2}`);
// })

app.use((req, res) => {



    console.log(res);
    console.log(req);
    console.log("request received");
});