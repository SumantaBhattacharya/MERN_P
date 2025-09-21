const JWT = require("jsonwebtoken");

const secret = "CJnm@#9501";

function createTokenForUser(user) {
  const payload = {
    _id: user.id,
    email: user.email,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };

  const token = JWT.sign(payload, secret, {
    expiresIn: "1h", // Token will expire in 1 hour
  });

  return token;
}

function validateToken(token) {
  try {
    const decoded_payload = JWT.verify(token, secret);
    return decoded_payload; // Return the decoded payload if the token is valid
  } catch (error) {
    console.error("Token validation error:", error.message);
    throw error; // Throw instead of returning null
  }
}

module.exports = {
  createTokenForUser,
  validateToken,
};
