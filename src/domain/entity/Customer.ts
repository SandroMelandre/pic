import { Customer_type } from "../../__test__/customer.spec"

const crypto = require("crypto");

export class Customer {
    customerId?: Number
    name: String
    last_name:String
    email: String
    document_type: String
    Document_number: Number
    private password: String
    customer_type: String

    constructor(customer) {
        this.name = customer.name
        this.last_name =customer.last_name
        this.email = customer.email
        this.document_type = customer.document_type
        this.Document_number = customer.document_number
        this.password  = this.setPassword(customer.password)
        this.customer_type = this.customer_type
    }
    setPassword(password): String {
        const password_hash = crypto.createHmac('sha256',password).update(password).digest("base64");
            return password_hash;
    }

    getPassword():String {
        return this.password
    }




}