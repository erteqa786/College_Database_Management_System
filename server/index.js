import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student",
    dateStrings: 'date'
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM studentdatabase";
    db.query(sql, (err, data) =>{
       if(err) {
        return res.json({Error: "Error"})
       }
       return res.json(data)
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO studentdatabase (Name, Email, Phone, DateOfBirth) VALUES (?)";
    const values = [
        req.body.Name,
        req.body.Email,
        req.body.Phone,
        req.body.DateOfBirth
    ]
    db.query(sql,[values], (err, data) =>{
       if(err) {
        return res.json({Error: "Error"})
       }
       return res.json(data)
    })
})
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE studentdatabase set Name = ?, Email = ?, Phone = ?, DateOfBirth = ? where id = ?";
    const values = [
        req.body.Name,
        req.body.Email,
        req.body.Phone,
        req.body.DateOfBirth
    ]
    const id = req.params.id;
    db.query(sql,[...values, id], (err, data) =>{
       if(err) {
        return res.json({Error: "Error"})
       }
       return res.json(data)
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "Delete from studentdatabase where id = ?";
    const id = req.params.id;
    db.query(sql,[ id], (err, data) =>{
       if(err) {
        return res.json({Error: "Error"})
       }
       return res.json(data)
    })
})

app.get('/getrecord/:id', (req, res) => {
    const id= req.params.id;
    const sql ="SELECT * FROM studentdatabase where id = ?"
    db.query(sql,[ id], (err, data) =>{
        if(err) {
         return res.json({Error: "Error"})
        }
        return res.json(data)
     })
})

app.listen(3030, ()=>{
    console.log("Running")
})