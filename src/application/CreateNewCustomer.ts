
import { Customer } from "../domain/entity/Customer";
import { CustomerRepositoryInterface } from "../domain/entity/CustomerRepositoryInterface";
import { CustomerInput } from "../domain/entity/types/CustumerInput";

interface output {
    customerId?: Number
    name: String
    last_name:String
    email: String
    document_type: String
    Document_number: Number
    customer_type: String

}

export  class CreateNewCustomer {
    static isert: any;

    constructor (private customerRepository: CustomerRepositoryInterface) {}

   async insert (input:CustomerInput):Promise<output>{
    const customer  = new Customer(input)
    const output:output = await this.customerRepository.insert(customer)

    return output

    
   }
}