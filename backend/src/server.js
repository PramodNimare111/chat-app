import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import path from 'path';
import { connectDB } from './lib/db.js';

console.log("CURRENT DIR:", process.cwd());

dotenv.config();

const app = express();  
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;
app.use(express.json()); //middleware to parse json data from request body

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// make ready for deployement
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
    });
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });
});
