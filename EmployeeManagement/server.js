const express = require('express');
const app = express();
app.use(express.json());

let employees = [];

// List all employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// Create an employee
app.post('/employees', (req, res) => {
  const employee = req.body;
  employees.push(employee);
  res.status(201).json(employee);
});

// Update an employee
app.put('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedEmployee = req.body;
  employees = employees.map(employee => {
    if (employee.id === id) {
      return { ...employee, ...updatedEmployee };
    }
    return employee;
  });
  res.json(updatedEmployee);
});

// Remove an employee
app.delete('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  employees = employees.filter(employee => employee.id !== id);
  res.sendStatus(204);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
