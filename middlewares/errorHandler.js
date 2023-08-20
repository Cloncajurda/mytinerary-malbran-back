export default function(err, req, res, next) {
    // set locals, only providing error in development
    console.log(err);
    return res.status(500).json({
      success: false,
      message: err.message,
      response: null
    })
  }