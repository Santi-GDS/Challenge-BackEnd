const express = require('express');

// Create Server
const app = express();

//App port
const PORT = 4000;

//Express.json
app.use(express.json({ extended: true}));

// Start app
app.listen(PORT,() => {
	console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});