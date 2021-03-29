//Checks the query string for a name property
//Sends the request through when valid, forces an error when not
module.exports = (req, res, next) => {
    console.log("*****************Request****************")
    //Without a name in the query string, force a “500” error
    if (!req.query.name && req.path==`/person`) {
    throw new Error('name should be brovided');
    }
    //very important note we have to invoke the next function with no arguments
    next();
};