import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:"customers", component:CustomersComponent},
  {path:"invoice", component:InvoiceComponent},
  {path:"table", component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
