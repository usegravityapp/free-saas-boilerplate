// HOF to catch errors
exports.use = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);