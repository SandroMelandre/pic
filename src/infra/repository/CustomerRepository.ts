
import { CustomerRepositoryInterface } from "../../domain/entity/CustomerRepositoryInterface";
import * as service from '../service/CustomerService';

export class CustomerRepository implements CustomerRepositoryInterface {
    
    getOne(id: any): Promise<any> {
        
        return service.OneCustomer(id);
    }
    
    getAll(): Promise<any> {
        return service.getAllCustomers();
    }
    
    insert(input): Promise<any> {
        let output = service.InsertCustomer(input);
        return output;
      
    }

}