const express = require('express')
const cors  = require("cors")
const connection = require("./database/index")
const bodyParser = require("body-parser")


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
app.get("/users", (req, res) => {

    const query = 'SELECT * FROM `user-info`';
    connection.query(query, (err, result) => {
        if(err) {
            res.json({
                message: "Error"
            })
        } else {
            res.json({
                message: "Success",
                data: result
            })
        }
    })
})
app.post("/add-user", (req, res) => {
    const {name, age, skill} = req.body

    const query = `INSERT INTO \`user-info\` (\`name\`, \`age\`, \`skill\`) VALUES ('${name}', '${age}', '${skill}')`;
    connection.query(query, (err, result) => {
        if(err) {
            res.json({
                message: "Error"
            })
        } else {
            res.json({
                message: "Success",
                data: result
            })
        }
    })
})
app.post("/delete-user/:id", (req, res) => {
    const {id} = req.params
    const query = `DELETE FROM \`user-info\` WHERE id = ${id}`;
    connection.query(query, (err, result) => {
        if(err) {
            res.json({
                message : "Error"
            })
        } else {
            res.json({
                message: "Success",
                data: result
            })
        }
    })
})
app.post("/update-user/:id", (req, res) => {
    const {id} = req.params
    const {name, age, skill} = req.body
    const query = `UPDATE \`user-info\` SET \`name\`='${name}',\`age\`='${age}',\`skill\`='${skill}' WHERE id = ${id}`;
    connection.query(query, (err, result) => {
        if(err) {
            res.json({
                message : "Error"
            })
        } else {
            res.json({
                message: "Success",
                data: result
            })
        }
    })
})
    





app.listen(3000, () => {
    console.log("Server is running on port 3000 BACK_END")
})