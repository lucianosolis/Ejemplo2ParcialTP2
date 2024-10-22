import express from "express"
import Router from "./routes/numeros.routes.js"

const app=express()
const PORT=8080

app.use(express.urlencoded({extendes:true}))
app.use(express.json())

app.use("/",new Router().start())

app.listen(PORT,()=>console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error",(err)=>console.error(err))