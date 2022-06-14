const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res)=>{
    res.render('index');
})

router.get('/about', (req, res)=>{ 
    res.render('about', {
    });
})

router.get('/contact', (req, res)=>{ 
    res.render('contact', {
    });
})

router.post('/contact', (req, res)=>{ 
    res.render('contacted', {
    });
})

router.get('/courses', (req, res)=>{ 
    res.render('courses', {
    });
})


module.exports = router