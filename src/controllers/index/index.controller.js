



function indexPageHandler(req, res, next)
{
    try 
    {
        return res.render('pages/index') 
    }
    catch(e)
    {
        console.log("Server Encountered Error While Rendering Index Page ")
        console.log(e)
        return res.render('serverError',{ errors:' Server Ran Into Error while Rendering Index Page'})
    }
}



module.exports = { indexPageHandler }