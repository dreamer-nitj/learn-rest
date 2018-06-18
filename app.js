const express= require('express');
const app= express();
const greetingRoutes=require('./api/routes/greeting');
app.use('/greeting',greetingRoutes);
module.exports=app;
