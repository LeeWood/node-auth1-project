
function restrictedAuth(req, res, next) {
  
  if(req.session && req.session.user) {
    next();
  }else {
    res.status(401).json({
      message: 'Log in to view this page.'
    });
  }
};

module.exports = restrictedAuth;