const HTTPSTATUSCODE = require('../utils/httpStatusCodes');

const errorHandler = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || HTTPSTATUSCODE.INTERNAL_SERVER_ERROR,
    message: err.message || 'Something went wrong internal server error',
  };

  if (err.type === 'ValidationError') {
    res.status(HTTPSTATUSCODE.BAD_REQUEST);
    res.json({ error: err.message });
    return;
  }

  if (err.code === 11000) {
    res.status(HTTPSTATUSCODE.BAD_REQUEST);
    res.json({
      error: `An account with ${err.keyValue.email} already exist`,
    });
    return;
  }
  res.status(defaultError.statusCode).json({ message: defaultError.message });
};

module.exports = errorHandler;
