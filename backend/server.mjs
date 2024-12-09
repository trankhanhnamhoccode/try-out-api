import express from "express";
import cors from "cors";
import connectDb  from "./db.mjs";
import User from "./Users.mjs"
const app = express();

const PORT = process.env.PORT || 3500;

connectDb().then(()=>{console.log("Connected to Database")})
            .catch(err => console.log(err));

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{
    return res.json(User)
})

app.get('/api/login/username/:username/password/:password',(req,res)=>{
    // console.log(req.params)
    const username = req.params.username;
    const password = req.params.password;
    User.find({username:username,password:password})
            .then((user)=>(user.length!=0)?res.send("User found"):res.send("Invalid user"))
    .catch (error=>console.log(error)) 
})

app.post('/api/signup',(req,res)=>{
    const newUser = new User(req.body);
    console.log(newUser)
    newUser.save();
    return res.send("added success")
})

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
});
