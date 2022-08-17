"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const crypto = require("crypto");
class Customer {
    constructor(customer) {
        this.name = customer.name;
        this.last_name = customer.last_name;
        this.email = customer.email;
        this.document_type = customer.document_type;
        this.Document_number = customer.document_number;
        this.password = this.setPassword(customer.password);
        this.customer_type = this.customer_type;
    }
    setPassword(password) {
        const password_hash = crypto.createHmac('sha256', password).update(password).digest("base64");
        return password_hash;
    }
    getPassword() {
        return this.password;
    }
}
exports.Customer = Customer;
