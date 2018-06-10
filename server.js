const express = require('express');
const hbs = require('hbs');


const fse = require('./public/js/fse');

let app = express();

let dirViews = __dirname + '/views';
let dirPartials = __dirname + '/views/partials'
hbs.registerPartials(dirPartials);
app.use((req,res,next)=> {
    fse.dirCreate(dirViews,(err,res)=>{
        if(err){console.log(`could not create ${dirViews}`)}
    });

    fse.dirCreate(dirPartials,(err,res)=>{
        if(err){console.log(`could not create ${dirPartials}`)}
    }); 

    next();
});



app.set('view_engine','hbs');

app.get('/',(req,res) => {
    res.render('index.hbs');
});

app.listen(3000);