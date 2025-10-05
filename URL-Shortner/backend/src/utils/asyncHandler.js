const asyncHandler = function name(requestHandler) {// asyncHandler → must have next, because that’s how Express knows there’s an error.
    // return requestHandler
    return(req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=> {
            // console.log(err);
            next(err)
        })
    }
}
export{asyncHandler}
