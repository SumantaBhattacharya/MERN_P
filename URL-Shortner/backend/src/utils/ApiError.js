class ApiError extends Error{
    constructor(statusCode,message= "Something went wrong",errors=[],stack="", isOperational = true){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false //not passing the success code cause we are handling api error handling but not api response
        this.errors = errors
        this.isOperational = isOperational; // update

        if (stack) {
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }
}
// ApiError is not middleware — it’s just a class. A blueprint for creating error objects in your app.

// Express won’t automatically convert a thrown ApiError into a JSON response. errorHandler middleware catch it and translates it into a proper JSON HTTP response.
const errorHandler = (err, req, res, next) =>{ // the next argument to recognize it as an error-handling middleware. In Express, a middleware with 4 arguments (err, req, res, next) is treated as an error handler.
    // create err using ApiError
    if(err instanceof ApiError && err.isOperational){
        // convert the structure into json so it can be send to an response
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
            data: err.data,
        });
    }

    // return the stack trace
    console.error("💥 UNEXPECTED ERROR: ", err);

    return res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error",
        errors: process.env.NODE_ENV === "development" ? [err.stack] : [],
    });

}

class BadRequestError extends ApiError {
  constructor(message = "Bad Request", errors = []) {
    super(400, message, errors, "", true);
  }
}

class UnauthorizedError extends ApiError {
  constructor(message = "Unauthorized") {
    super(401, message, [], "", true);
  }
}

class NotFoundError extends ApiError {
  constructor(message = "Not Found") {
    super(404, message, [], "", true);
  }
}

class ConflictError extends ApiError {
  constructor(message = "Conflict") {
    super(409, message, [], "", true);
  }
}

export {ApiError, errorHandler, BadRequestError, UnauthorizedError, NotFoundError, ConflictError};