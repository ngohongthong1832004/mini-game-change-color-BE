const express = require('express')
const cors  = require("cors")


const app = express()

app.use(cors())

const res = (req, res) => {
    res.json({
        message: "hoc xong docker basic roi nhe"
    })
}
const handle = (req, res) => {
    res.json({
        myInfo: {
            name : "Bap Hong Pine",
            age: Date.now().year - 2004,
            school: "IUH",
        }
    })
}


app.post("/post", handle)
app.get("/", res)
app.get("/learn", (req, res) => {
    res.json({
        name: "Docker",
        status: "Done"
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000 BACK_END")
})