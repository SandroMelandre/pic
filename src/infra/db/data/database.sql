create table customers(
    customerId serial primary key,
    customer_name text  not null,
    email text not null,
    phone text not null,
    document_type text not null,
    document_number integer not null,
    customer_password text not null,
    customer_type text not null
    
)