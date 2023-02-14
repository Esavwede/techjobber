const express = require('express')
const Router = express.Router() 
const { indexPageHandler } = require('../../controllers/index/index.controller.js')

module.exports = function(app)
{
    try 
    {

        Router.get('/', indexPageHandler )
        app.use('/api/v1', Router )
    }
    catch(e)
    {
        console.log(' Error occured while building index Routes ')
        console.log(e) 
    }
}