const securityHeader = (request, response, next) => {
  response.setHeader("X-Powered-By", "");
  next();
}

module.exports = securityHeader;