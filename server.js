const express=require("express");
const dotenv= require("dotenv");
const morgan = require("morgan");
const results = require("./results");

dotenv.config()


const app=express();
//middlewares
app.use(morgan("dev"));
app.use(express.json());

//single results
app.get("/api/v1/results/:name", (req, res)=>{ 
    res.json(results.filter((result) => result.name===req.params.name));
})

//post results
app.post("/api/v1/results/:name", (req, res)=>{
    const students={
        name:req.body.name,
        class:req.body.class,
        marks:req.body.marks,
    };
    results.push(student);

    res.json(results);
})

//delete single results
app.delete("/api/v1/results/:name", (req, res)=>{ 
    res.json(results.filter((result) => result.name!==req.params.name));
})

//update results
app.put("/api/v1/results/:name", (req, res)=>{ 
    const result=results.some((result)=>result.name===req.params.name);
    resultFound &&
        results.forEach((result)=> {
            result.name===req.params.name &&
                result.name===req.body.name
                result.community===req.body.name
            
        });
    
    res.json(results)
});


//get all results
app.get("/api/v1/results", (req, res)=>{
    res.json(results);
})
 
const PORT = process.env.PORT||5003;

app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))


