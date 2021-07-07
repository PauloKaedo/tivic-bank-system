import database from '../database/connection';
import randomAccountNumberGenerator from '../utils/AccountNumberGen';
import { Request, Response } from 'express'
import session from 'express-session'

export default class AccountController {

    async index(req: Request, res: Response) {
        const accounts = await database('accounts');
        return res.json(accounts);
    }

    async show(req: Request, res: Response) {
        const { account_number, account_password } = req.body;

        const account = await database('accounts')
            .where('account_number', '=', account_number)
            .andWhere('account_password', '=', account_password);

        if (account.length > 0){
            return res.json(account);
        } else {
            return res.status(204).json({message: "Account not found."});
        }        
    }

    async login(req: Request, res: Response) {
        const { account_number, account_password } = req.body;

        if ( account_number == null || account_password == null){
            return res.status(404).json({error: "Erro ao tentar realizar login."});
        }

        const account = await database('accounts').where('account_number', '=', account_number)
            .andWhere('account_password', '=', account_password);

        if ( account.length > 0 ){
           
            return res.json(account);
        }

        return res.status(404).json({error: "Login inválido."});
    }

    async create(req: Request, res: Response) {
        const { username, account_password, initial_deposit } = req.body;
        const  float_deposit = parseFloat(initial_deposit)
        const account_number = randomAccountNumberGenerator();

        const trx = await database.transaction();

        try {
            const data = {
                username,
                account_number,
                account_password,
                balance: float_deposit
            }

            const [accountId] = await trx('accounts').insert(data)

            const account = {
                id: accountId, ...data
            }
            await trx.commit();
            return res.status(201).json(account);

        } catch (err) {
            trx.rollback();
            return res.status(400).json({ error: 'Erro ao criar nova conta' })
        }
    }

    async withdraw(req: Request, res: Response) {
        const { account_number, account_password, amount } = req.body;
        const  withdraw_amount = parseFloat(amount);

        const account = await database('accounts')
            .where('account_number', '=', account_number)
            .andWhere('account_password', '=', account_password);

        if (account.length == 0){
            return res.status(204).json({message: "Account not found."});     
        }
        
        const { balance } = account[0];
        if (balance < withdraw_amount) {
            return res.status(204).json({error: "Essa conta não tem esse valor disponível para saque"})
        }

        const trx = await database.transaction();

        try {
            const newBalance = balance - withdraw_amount;
            await trx('accounts').update({
                balance: newBalance
            }).where({account_number})

            await trx.commit();
            return res.status(200).json(account);

        } catch (err) {
            trx.rollback();
            return res.status(406).json({ error: 'Erro ao realizar saque.' })
        }

    }

    async deposit(req: Request, res: Response) {
        const { account_number, account_password, amount } = req.body;
        const  deposit_amount = parseFloat(amount);

        const account = await database('accounts')
            .where('account_number', '=', account_number)
            .andWhere('account_password', '=', account_password);

        if (account.length == 0){
            return res.status(204).json({message: "Account not found."});     
        }
        
        const { balance } = account[0];

        const trx = await database.transaction();

        try {
            const newBalance = balance + deposit_amount;
            await trx('accounts').update({
                balance: newBalance
            }).where({account_number})

            await trx.commit();
            return res.status(200).json(account);

        } catch (err) {
            trx.rollback();
            return res.status(406).json({ error: 'Erro ao realizar saque.' })
        }

    }
}