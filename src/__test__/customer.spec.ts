import { Customer } from "../domain/entity/Customer";

export enum Customer_type {
    FISICA,
    JURIDICA
}
describe("customer",()=>{

    it("new participant", ()=>{
        let customer_type = Customer_type
        let customer = {
            name: "sandro",
            last_name: "rezende",
            document_type: "CPF",
            document_number: '01957346701',
            customer_type:customer_type.FISICA,
            password:  '123456'

        }

        let newCustomer  =  new Customer(customer);

        expect(newCustomer).toEqual(expect.not.stringMatching(customer.password))



    })

})