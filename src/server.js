import express from "express"

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "\\views")
app.use("/public", express.static(__dirname + "/public"))
app.get("/", (req, res)=> res.render("home.pug"))

const handleListen = () => console.log(`Listening on port 3000...!`)
app.listen(3000, handleListen);

// Express 로 할 일은 여기까지가 끝이다.
// Express 로 할 일은, views 를 설정해주고 render 해주는 거고 
// 나머지는 websocket에서 실시간으로 일어날 것이다.