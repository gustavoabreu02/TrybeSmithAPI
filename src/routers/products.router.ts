import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAllProducts.bind(productsController));
router.post('/', productsController.createProducts.bind(productsController));

export default router;