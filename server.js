require("dotenv").config();


const connectDB = require("./src/config/db")

const studentRoutes =require("./src/routes/student.routes");

const app = require("./src/app");

app.use("/api/students",studentRoutes);


const PORT = process.env.PORT;


connectDB()
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});