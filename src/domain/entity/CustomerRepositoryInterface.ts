import { Customer } from "./Customer";


export interface CustomerRepositoryInterface {
    insert(input: Customer) : Promise<any>;
    getAll() :Promise<any>
    getOne(id: any) :Promise<any>
}

