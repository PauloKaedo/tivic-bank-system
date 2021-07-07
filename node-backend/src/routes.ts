import express from 'express';
import AccountController from './controllers/AccountController';

const accountController = new AccountController();
const routes = express.Router();

routes.get('/accounts', accountController.index);

routes.post('/accounts/show', accountController.show);

routes.post('/accounts/login', accountController.login);

routes.post('/accounts', accountController.create);


routes.put('/accounts/withdraw', accountController.withdraw);

routes.put('/accounts/deposit', accountController.deposit);

export default routes;



