
const express = require("express");
const app = express();

console.dir(app);

let port = 3000;
// let port2 = 5000;


app.listen(port, () => {

    console.log(`app is listening on a port ${port}`);
})

// app.listen(port2, () => {

//     console.log(`app is listening on a port ${port2}`);
// })

// app.use((req, res) => {
//     // console.log(res);
//     // console.log(req);
//     res.send({
//         error_type: "network error",
//         connection_speed: "10mb/s",
//         status: "request denied"

//     })
//     console.log("request received");
// });

const about = {

    name: "hariom",
    age: 20,
    height: 5.7,
    education: "B.tech in Cse",
    profession: "Software engineer",
    interestedArea: "Backend Programming,Artificial Intelligence,App development"
}

const contact = {

    linkedin: "hariom Singh Thakur",
    github: "www.github.com/hariom-hub",
    gmail: "hariomthakur638@gmail.com"
}


app.get("/", (req, res) => {

    res.send("Root path :-) ");
});

app.get("/child", (req, res) => {

    res.send("Child Path :-> ");
});


app.get("/about", (req, res) => {

    res.send(about);
});

app.get("/contact", (req, res) => {

    res.send(contact);
});


app.get("/file", (req, res) => {

    res.sendFile(__dirname + '/index.html');
});

app.get("/:username/:id", (req, res) => {


    let { username, id } = req.params;

    let htmlRes = `This is a page for ${username} and id : ${id}`;

    res.send(htmlRes);
});