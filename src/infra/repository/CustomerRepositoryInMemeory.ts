import { Customer } from "../../domain/entity/Customer";
import { CustomerRepositoryInterface } from "../../domain/entity/CustomerRepositoryInterface";



export class CustomerRepositorInMemory  {
    getAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    items : Customer[] = []
    
    async insert(input: Customer): Promise<any> {
        this.items.push(input)
    }

}