exports.asyncHandler = (fun) => async (req, res, next) => {
    try {
        await fun(req, res, next)
    } catch (error) {
        console.error(error);
        return res.status(error.statusCode || 500).json({
            message: error.message
        })
    }
}

exports.ApiResponse = class {
    constructor(code, message, data){
        this.statusCode = code;
        this.message = message;
        this.data = data;
    }
}

exports.ApiError = class extends Error { 
    constructor(statusCode, message, error, stack){
        super(message)

        this.statusCode = statusCode;
        this.message = message;
        this.error = error || [];

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}