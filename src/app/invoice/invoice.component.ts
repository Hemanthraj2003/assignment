import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  
  invoiceHeader = {
    invoiceNumber: null,
    selectedDate : new Date(),
    invoiceType : '',
    customerNumber : null,
    address:'',
    shippingAddress: '',
    get isHeaderValidated(){
      return this.invoiceType && this.selectedDate && this.invoiceType && this.customerNumber && this.address && this.shippingAddress? true:false
    }
  }

  invoiceItem = {
    categorey: '',
    name: '',
    woNumber:null ,
    quantity:null,
    city: '',
    rate: null,
    gstPercentage: null,    
    get lineAmount() {
      return this.quantity && this.rate ? this.quantity * this.rate : null;
    },
    get totalAmount() {
      return this.lineAmount && this.gstPercentage ? (this.gstPercentage/100 * this.lineAmount) + this.lineAmount: null
    },
    get isItemValidated(){
      return this.totalAmount && this.city && this.woNumber && this.name && this.categorey? true : false
    }
  }

  invoiceReset(){
    this.resetHeader()
    this.resetItem()
  }
  // resets the header fileds when called
  resetHeader(){
    this.invoiceHeader={
      invoiceNumber: null,
      selectedDate : new Date(),
      invoiceType : '',
      customerNumber : null,
      address:'',
      shippingAddress: '',
      get isHeaderValidated(){
        return this.invoiceType && this.selectedDate && this.invoiceType && this.customerNumber && this.address && this.shippingAddress? true:false
      }
    }
  }

  // this method is called when items reset button is clicked
  resetItem(){
    this.invoiceItem = {
      categorey: '',
    name: '',
    woNumber:null ,
    quantity:null,
    city: '',
    rate: null,
    gstPercentage: null,    
    get lineAmount() {
      return this.quantity && this.rate ? this.quantity * this.rate : null;
    },
    get totalAmount() {
      return this.lineAmount && this.gstPercentage ? (this.gstPercentage/100 * this.lineAmount) + this.lineAmount: null
    },
    
    get isItemValidated(){
      return this.totalAmount && this.city && this.woNumber && this.name && this.categorey? true : false
    }
    }
  }

  items:any[] = []
  
  @ViewChild(MatTable) table?: MatTable<any>;
  save(){
    this.items.push(this.invoiceItem)
    this.table?.renderRows();
    console.log(this.items);
    
    // resetting the values after saving it to local storage
    this.invoiceItem = {
      categorey: '',
    name: '',
    woNumber:null ,
    quantity:null,
    city: '',
    rate: null,
    gstPercentage: null,    
    get lineAmount() {
      return this.quantity && this.rate ? this.quantity * this.rate : null;
    },
    get totalAmount() {
      return this.lineAmount && this.gstPercentage ? (this.gstPercentage/100 * this.lineAmount) + this.lineAmount: null
    },
    
    get isItemValidated(){
      return this.totalAmount && this.city && this.woNumber && this.name && this.categorey? true : false
    }
    }
  }

  saveInvoice(){
    let invoiceList = JSON.parse(localStorage.getItem('invoice') || '[]')
    const invoice = [{'header' : this.invoiceHeader, 'Items':this.items} ]
    invoiceList.push(invoice);
    localStorage.setItem('invoice', JSON.stringify(invoiceList));
    alert('Invoice saved');
    this.invoiceReset();
    this.items = []
  }

  // this is the table schema
  columnsToDisplay:string[] = [ 'categorey', 'name', 'woNumber', 'city', 'quantity','rate','lineAmount','gstPercentage', 'totalAmount'  ]

  // ,'name', 'woNumber', 'quantity','city','lineAmount','gstPercentage', 'totalAmount'  
}


