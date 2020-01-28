import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-customer-detail',
 templateUrl: './customer-detail.component.html'
  //template: `{{pageTitle}}`
})
export class CustomerDetailComponent implements OnInit {
     pageTitle : string ="Customer Details";
  constructor(private route:ActivatedRoute , private router : Router) { }

  ngOnInit() {
    let id= +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `:${id}`;

  }

  onBack() : void{
    this.router.navigate(['/viewcustomer']);
  }

}
