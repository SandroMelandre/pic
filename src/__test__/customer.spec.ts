

import { Customer } from "../domain/entity/Customer";
import { CustomerRepository } from "../infra/repository/CustomerRepository";

export enum Customer_type {
    FISICA,
    JURIDICA
}

describe("customer", () => {


    it("new participant", () => {
        let customer_type = Customer_type
        let customer = {
            customer_name: "sandro",
            last_name: "rezende",
            document_type: "CPF",
            document_number: '01957346701',
            customer_type: customer_type.FISICA,
            password: '123456'

        }

        let newCustomer = new Customer(customer);

        expect(newCustomer).toEqual(expect.not.stringMatching(customer.password))
    })

    it("encripted password", () => {
        let customer_type = Customer_type
        let customer = {
            name: "sandro",
            last_name: "rezende",
            document_type: "CPF",
            document_number: '01957346701',
            customer_type: customer_type.FISICA,
            password: '123456'

        }

        let newCustomer = new Customer(customer);
        expect(newCustomer.getPassword).not.toEqual(customer.password)
    })

    it("inset a new user", async () => {

        let repository = new CustomerRepository()
        let customer_type = Customer_type
        let customer = {
            email: "sandromelandre8888@gmail.com",
            phone: '24993032829',
            customer_name: "sandro8888",
            document_type: "CPF",
            document_number: '01957346701',
            customer_type: customer_type.JURIDICA,
            password: '123456'

        }

        let input = new Customer(customer)
        console.log("input", input);

        let output = await repository.insert(input)
        console.log(output);
        expect(output).toEqual(expect.not.stringMatching(customer.password))

    })

})