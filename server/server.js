require('dotenv').config({path:'../.env'});
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportSetup = require('./passport');
const authRoute = require('./routes/auth')
const app = express();

app.use(
    cookieSession({
        name:'session',
        keys:['letstalk'],
        maxAge:24*60*60*100
    })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin:'http://localhost:5173',
        methods:'GET,POST,PUT,DELETE',
        credentials:true,
    })
)

app.use('/auth',authRoute);

const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`listening on ${port}`))