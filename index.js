const cookieParser =require('cookie-parser')
const express =require('express')

require('dotenv').config()
const app =express()

//regular middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cookie middlewares
app.use(cookieParser())
app.get('/', (req,res)=> { 
res.send("Hi from kolkata")
})

app.listen(3000,  ()=> { 
    console.log('server is running at port 3000');
})