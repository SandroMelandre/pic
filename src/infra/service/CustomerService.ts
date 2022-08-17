import {db} from "../db/database"

export const getAllCustomers = ()=> {
    let query = 'SELECT * FROM customers';
    let result =  db.query(query);

    return result 
}

export const OneCustomer = async (id) =>{
   let result = await db.oneOrNone("select * from customers where customerid = $1",[id]);
   return result;
   
}

export const InsertCustomer= async (customer) => {
    let query  = "INSERT INTO public.customers(customer_name, email, phone, document_type, document_number, customer_password, customer_type)VALUES ($1, $2, $3, $4, $5, $6, $7) returning *";


    console.log("Custumer", customer);
    const output  = await db.one(query,[
        customer.customer_name,
        customer.email,
        customer.phone,
        customer.document_type,
        customer.document_number,
        customer.password,
        customer.customer_type
    ])

    return output;

}   

