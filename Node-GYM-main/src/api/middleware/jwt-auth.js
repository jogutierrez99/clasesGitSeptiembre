const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const data = {
    user_id: user._id,
    user_email: user.email,
    role: user.role
  };

  const expire = '1d'
  return jwt.sign(data, process.env.JWT_SECRET, {expiresIn: expire});
};

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  // no token, unauthorized
  if (!token) return res.sendStatus(401).json({message: 'No estas autorizado por que te falta el token'})

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log(err)
    if (err) return res.status(403)
    req.user = decoded;
    next();
  });
}



function roleCheck(requiredRole) {
  return function(req, res, next) {
    if (!req.user) {
      return res.status(401).json({ message: "No user found in request" });
    }
    
    if (req.user.role !== requiredRole) {
      console.log(req.user.role)
      return res.status(403).json({ message: "No tiene permisos para realizar esta acción" });
    }
    next();
  };
}


module.exports = { createToken, authenticateToken,roleCheck};