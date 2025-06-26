//import express from 'express';

const express = require('express');

const app = express()

app.use("/api/notes", notesRoutes);

// app.get("/api/notes", (req, res) => {
//     res.status(200).send("you got the 4 notes");

// })


// app.put("/api/notes/:id", (req, res) => {
    
//     res.status(200).json({
//         message: `Note with ID updated successfully`
//     });
// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// }) ;

// //what is an endpoint?
// // An endpoint is a specific URL where an API can be accessed by a client application.
// // It defines a point of interaction between the client and server, 
// // allowing the client to request or send data. In this case, "/api/notes" is an endpoint that responds with a message when accessed.

