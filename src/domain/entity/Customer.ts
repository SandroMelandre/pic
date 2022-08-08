import { Customer_type } from "../../__test__/customer.spec"


export class Customer {
    customerId?: Number
    name: String
    last_name:String
    email: String
    document_type: String
    Document_number: Number
    private password: String
    customer_type: Customer_type

    constructor(customer) {
        this.name = customer.name
        this.last_name =customer.last_name
        this.email = customer.email
        this.document_type = customer.document_type
        this.Document_number = customer.document_number
        this.password  = this.setPassword()
        this.customer_type = this.customer_type
    }
    setPassword(): String {
        throw new Error("Method not implemented.")
    }




}