const validateToken = require("../services/authentication");

function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];

    if (!tokenCookieValue) return next(); // No token = continue as guest

    // const validateToken = require("../services/authentication").validateToken;

    try {
      const userPayload = validateToken(tokenCookieValue);

      // pass the new user hes previous values and let him login directly
      req.user = userPayload; // Attach user info to request object

      //next(); // Call the next middleware or route handler
      return next();
    } catch (error) {
      //next(error); // Pass the error to the next middleware
      console.error("Authentication failed:", error.message);
      res.clearCookie(cookieName); // Clear invalid token
      return res.status(401).redirect("/user/signin"); // Redirect to signin
    }

    //Optionally, you can verify the token here
    /*
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send("Invalid token");
            }
            req.user = decoded; // Attach user info to request object
            next();
        });*/
    //next(); // If no verification is needed, just call next()
  };
}

module.exports = checkForAuthenticationCookie;
