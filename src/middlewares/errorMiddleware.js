const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).send('Error interno del servidor');
  };
  
export default errorHandler;