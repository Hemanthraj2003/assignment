import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  constructor(private router: Router){}
  personal = {
    name: '',
    contactPerson: '',
    gender: '',
    DOB: ''
  }
  address = {
    address01:'',
    email:'',
    postCode:'',
    fax:'',
  }
  bank={
    gstNo:'',
    bankName:'',
    bankIFSC:'',
    bankAccNo:'',
  }

  onSubmit(){
    console.log(this.personal, this.address, this.bank);

    const newCustomers = {
      personalInfo: this.personal,
      addressInfo: this.address,
      bankingInfo: this.bank
    }
    let customers = JSON.parse(localStorage.getItem('customers') || '[]');

    customers.push(newCustomers);

    localStorage.setItem('customers', JSON.stringify(customers));
    alert('customers data updated successfully')
    this.router.navigate(['/customers']);
    
  }
}
