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
exports.InsertCustomer = exports.OneCustomer = exports.getAllCustomers = void 0;
const database_1 = require("../db/database");
const getAllCustomers = () => {
    let query = 'SELECT * FROM customers';
    let result = database_1.db.query(query);
    return result;
};
exports.getAllCustomers = getAllCustomers;
const OneCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield database_1.db.oneOrNone("select * from customers where customerid = $1", [id]);
    return result;
});
exports.OneCustomer = OneCustomer;
const InsertCustomer = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    let query = "INSERT INTO public.customers(customer_name, email, phone, document_type, document_number, customer_password, customer_type)VALUES ($1, $2, $3, $4, $5, $6, $7) returning *";
    console.log("Custumer", customer);
    const output = yield database_1.db.one(query, [
        customer.customer_name,
        customer.email,
        customer.phone,
        customer.document_type,
        customer.document_number,
        customer.password,
        customer.customer_type
    ]);
    return output;
});
exports.InsertCustomer = InsertCustomer;
