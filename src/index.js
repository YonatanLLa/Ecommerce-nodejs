import app from "./app.js"
import { connectDB } from './db.js'

connectDB()
app.listen(3001)

console.log(`Inicializando` +" "+ 3001);