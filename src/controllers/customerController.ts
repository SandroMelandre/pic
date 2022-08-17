import { Router, Request, Response } from 'express';

import { CustomerRepository } from '../infra/repository/CustomerRepository';
const router: Router = Router();

const repository = new CustomerRepository();
//Get all customers
router.get('/', async (req: Request, res: Response) => {

    let result = await repository.getAll();

    res.json(result);
})

//get by id
router.get('/:id', async (req: Request, res: Response) => {
    let { id } = req.params
    let output = await repository.getOne(id);
    res.json(output)


})

router.post('/', async (req: Request, res: Response) => {
    let input = req.body
    let output = await repository.insert(input);
    res.json(output);

})

export const CustomerController: Router = router