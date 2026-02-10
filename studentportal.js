const express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Student Portal Server Running 🚀");
});

// Sample Students Data (Temporary - No DB)
let students = [
    { id: 1, name: "Koushik", dept: "CSE" },
    { id: 2, name: "Rahul", dept: "ECE" }
];

// Get All Students
app.get("/students", (req, res) => {
    res.json(students);
});

// Add Student
app.post("/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json({
        message: "Student Added",
        students
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});