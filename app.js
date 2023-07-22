require('dotenv').config();
const express = require('express')
const expresslayout = require('express-ejs-layouts')
const methodOverride = require('method-override')
const connectDB = require('./server/config/db')
const path = require('path')
const app = express();
const session = require('express-session') // keep user login
const passport = require('passport');
const MongoStore = require('connect-mongo')

const port = 5000 || process.env.PORT;
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL
    }),

}));
app.use(passport.initialize());
app.use(passport.session())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(methodOverride("_method"))
connectDB();
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'))
app.use(expresslayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.use('/', require('./server/routes/index'))
app.use('/', require('./server/routes/auth'))

app.use('/', require('./server/routes/dashboard'))

app.get('*', (req, res) => {
    // res.status(404).send('404 Page note found')
    res.status(404).render('404')

})
app.listen(port, () => {
    console.log(`listen in port ${port} `);
})