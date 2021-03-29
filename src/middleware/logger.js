//Performs a console.log with the request method and path
module.exports = (req, res, next) => {
    console.log("*****************Request****************")
    console.log({method:req.method,path:req.path});
    //very important note we have to invoke the next function with no arguments
    next();
};