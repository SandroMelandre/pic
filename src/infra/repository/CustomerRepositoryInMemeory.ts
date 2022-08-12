import { Customer } from "../../domain/entity/Customer";
import { CustomerRepositoryInterface } from "../../domain/entity/CustomerRepositoryInterface";


export class CustomerRepositorInMemory implements CustomerRepositoryInterface {
    items : Customer[] = []
    
    async insert(input: Customer): Promise<any> {
        this.items.push(input)
    }

}