import { Customer_type } from "../../__test__/customer.spec"

const crypto = require("crypto");

export class Customer {
    customerId?: Number
    customer_name: String
    //last_name:String
    email: String
    phone: String
    document_type: String
    document_number: Number
    private password: String
    customer_type: Customer_type

    constructor(customer) {
        this.customer_name = customer.customer_name
        //this.last_name =customer.last_name
        this.email = customer.email
        this.phone = customer.phone
        this.document_type = customer.document_type
        this.document_number = customer.document_number
        this.password  = this.setPassword(customer.password)
        this.customer_type = customer.customer_type
    }
    setPassword(password): String {
        const password_hash = crypto.createHmac('sha256',password).update(password).digest("base64");
            return password_hash;
    }

    getPassword():String {
        return this.password
    }




}