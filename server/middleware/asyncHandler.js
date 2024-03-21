const asyncHandler = (fn) => (req, res, next) => {
  try {
    return Promise.resolve(fn(req, res, next));
  } catch (error) {
    return next(error);
  }
}
 

export default asyncHandler;