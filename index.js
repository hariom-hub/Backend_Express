
const express = require("express");
const app = express();

console.dir(app);

// const info = {

//     profession: "Software engineer",
//     interestedArea: "Backend Programming,Artificial Intelligence,App development"
// }


// const contact = {

//     linkedin: "hariom Singh Thakur",
//     github: "www.github.com/hariom-hub",
//     gmail: "hariomthakur638@gmail.com"
// }

let port = 3000;
// let port2 = 5000;


app.listen(port, () => {

    console.log(`app is listening on a port ${port}`);
})

// app.listen(port2, () => {

//     console.log(`app is listening on a port ${port2}`);
// })

app.use((req, res) => {
    // console.log(res);
    // console.log(req);
    res.send({
        error_type: "network error",
        connection_speed: "10mb/s",
        status: "request denied"

    })
    console.log("request received");
});

