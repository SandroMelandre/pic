import { Customer } from "./Customer";


export interface CustomerRepositoryInterface {
    insert(input: Customer) : Promise<any>
}