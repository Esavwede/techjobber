const express = require('express')
const router = express.Router() 
const landingPageHandler = require('../../controllers/landingPage/landingPage.controller') 



module.exports = function indexRoutes(app)
{
    try 
    {
        router.get('/', landingPageHandler.serveLandingPage )
        app.use('/api/v1/landing', router) 
    }
    catch(e)
    {
        console.log(' Error occured while building index routes ')
        console.log(e) 
    }
}



