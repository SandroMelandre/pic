"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer_type = void 0;
const Customer_1 = require("../domain/entity/Customer");
const CustomerRepository_1 = require("../infra/repository/CustomerRepository");
var Customer_type;
(function (Customer_type) {
    Customer_type[Customer_type["FISICA"] = 0] = "FISICA";
    Customer_type[Customer_type["JURIDICA"] = 1] = "JURIDICA";
})(Customer_type = exports.Customer_type || (exports.Customer_type = {}));
describe("customer", () => {
    it("new participant", () => {
        let customer_type = Customer_type;
        let customer = {
            name: "sandro",
            last_name: "rezende",
            document_type: "CPF",
            document_number: '01957346701',
            customer_type: customer_type.FISICA,
            password: '123456'
        };
        let newCustomer = new Customer_1.Customer(customer);
        expect(newCustomer).toEqual(expect.not.stringMatching(customer.password));
    });
    it("encripted password", () => {
        let customer_type = Customer_type;
        let customer = {
            name: "sandro",
            last_name: "rezende",
            document_type: "CPF",
            document_number: '01957346701',
            customer_type: customer_type.FISICA,
            password: '123456'
        };
        let newCustomer = new Customer_1.Customer(customer);
        expect(newCustomer.getPassword).not.toEqual(customer.password);
    });
    it("inset a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        let repository = new CustomerRepository_1.CustomerRepository();
        let customer_type = Customer_type;
        let customer = {
            name: "sandro",
            last_name: "rezende",
            document_type: "CPF",
            document_number: '01957346701',
            customer_type: customer_type.FISICA,
            password: '123456'
        };
        let input = new Customer_1.Customer(customer);
        let output = yield repository.insert(input);
        expect(output).toHaveLength(1);
        expect(output).toStrictEqual([input]);
    }));
});
