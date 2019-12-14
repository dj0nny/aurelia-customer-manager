import { Customer } from './customer';

export class App {
  constructor() {
    this.heading = 'Customer Manager';
    this.customers = this.getCustomers();

    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';
  }

  getCustomers() {
    let customers = [];
    if (localStorage.getItem('customers') === null) {
      customers = [];
    } else {
      customers = JSON.parse(localStorage.getItem('customers'));
    }

    return customers;
  }

  storeCustomer(name, email, phone) {
    let customers;
    if (localStorage.getItem('customers') === null) {
      customers = [];
    } else {
      customers = JSON.parse(localStorage.getItem('customers'));
    }

    customers.push({ name, email, phone });
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  deleteCustomer(index) {
    let customers = JSON.parse(localStorage.getItem('customers'));
    customers.splice(index, 1);
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  addCustomer() {
    if (this.customerName && this.customerEmail && this.customerPhone) {
      this.customers.push(new Customer(this.customerName, this.customerEmail, this.customerPhone));

      this.storeCustomer(this.customerName, this.customerEmail, this.customerPhone);

      this.customerName = '';
      this.customerEmail = '';
      this.customerPhone = '';
    }
  }

  removeCustomer(customer) {
    let index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
      this.deleteCustomer(index);
    }
  }
}
