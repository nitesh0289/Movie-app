const logger = (req, res, next) => {
  console.log("Request Captured...");
  next();
};

module.exports = logger;
