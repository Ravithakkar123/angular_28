import { Component, OnInit } from '@angular/core';
import { RecursiveAstVisitor } from '@angular/compiler/src/output/output_ast';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';
import { NgStyle } from '@angular/common';
@Component({
  //selector: 'app-customer-list',
  templateUrl: './viewcustomer.component.html',
  styles: []
})
export class ViewCustomerComponent {

  pageTitle: string = 'Customer-Details-List';

  customer: Customer[] = [];
  id: number;
  constructor(private customerService: CustomerService) {
    let x = this.customer.length;
  }


  ngOnInit(): void {

    this.GetCustomer();

  }

  GetCustomer() {
    this.customerService.GetCustomer()
      .subscribe(data => {
      this.customer = data
      });
  }
  Delete(id) {
    var ans = confirm("Do you want to delete customer  " + id);
    if (ans) {


      this.customerService.DeleteCustomer(id).subscribe(
        res => {
          console.log(id);
          this.GetCustomer();
        },
        err => {
          console.log(err);
        }
      );

    }
  }
}
