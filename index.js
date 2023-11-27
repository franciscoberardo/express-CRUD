import express from 'express';
import bodyParser from 'body-parser';
import elementosRoutes from './src/routes/productRoutes.js';
import errorHandler from './src/middlewares/errorMiddleware.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Use "/products"')
})

app.use('/products', elementosRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
