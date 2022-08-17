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
exports.CustomerController = void 0;
const express_1 = require("express");
const CustomerRepository_1 = require("../infra/repository/CustomerRepository");
const router = (0, express_1.Router)();
const repository = new CustomerRepository_1.CustomerRepository();
//Get all customers
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield repository.getAll();
    res.json(result);
}));
//get by id
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let output = yield repository.getOne(id);
    res.json(output);
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let input = req.body;
    let output = yield repository.insert(input);
    res.json(output);
}));
exports.CustomerController = router;
