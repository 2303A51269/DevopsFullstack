// Import Express
const express = require("express");

// Create App
const app = express();

// Port Number
const PORT = 3000;

// Middleware (for JSON)
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Student Portal Server Running 🚀");
});

// Temporary Student Data
let students = [
    { id: 1, name: "Koushik", dept: "CSE" },
    { id: 2, name: "Rahul", dept: "ECE" }
];

// Get All Students
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// Add New Student
app.post("/students", (req, res) => {
    const { id, name, dept } = req.body;

    // Validation
    if (!id || !name || !dept) {
        return res.status(400).json({
            message: "Please provide id, name, and dept"
        });
    }

    // Check Duplicate ID
    const exists = students.find(s => s.id === id);

    if (exists) {
        return res.status(409).json({
            message: "Student ID already exists"
        });
    }

    // Add Student
    students.push({ id, name, dept });

    res.status(201).json({
        message: "Student Added Successfully",
        students
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});