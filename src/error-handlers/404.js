module.exports = (req, res) => {
    res.status(404);
    res.json({
      message: '404/Not-Found',
      route: req.path,
    });
  };