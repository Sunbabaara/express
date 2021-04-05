const express=require("express");

const students = require("./results")
const app=express();

app.get("/", (req, res) =>{
    res.send(" students results ");
});

app.get("/api/students", (req, res) =>{res.json(students);
});

app.delete("/api/students/:name", (req, res) =>{
    const name= req.params.name;
    const results=results.some((r)=>r.name===name);
   
    if (results){
    res.json({
        msg: `results  ${name}`,
        results: results.filter((r)=>r.name!==name),
});
    }
});
app.post("/api/students", (req, res) =>{res.send("this is post route");
});

app.put("/api/students", (req, res) =>{res.send("this is put route");
});

app.listen(5002, ()=> console.log('server is running on port ${5002}'));
