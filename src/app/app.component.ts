import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `
         <nav class='navbar nav-justified navbar-expand navbar-light bg-light'>
         <h3><a class='navbar-brand'>{{pagetitle}}</a></h3>
          <ul class=' nav nav-pills'>
            <li><a class='nav-link' [routerLink]="['/welcome']">Dashboard</a></li>
                        
            <li class='dropdown'>
                  <a href='#' class='nav-link dropdown-toggle' data-toggle='dropdown' ><i class="fa fa-users"></i>Customer</a>
                         <ul class='dropdown-menu'>
                                <li><a class='nav-link ' [routerLink]="['/addcustomer']"><i class="fa fa-user-plus"></i>Add Customer</a></li>
                                 <li><a class='nav-link' [routerLink]="['/viewcustomer']"><i class="fa fa-eye"></i>View Customer</a></li>
                                 <li><a class='nav-link' [routerLink]="['/viewcustomer']"><i class="fa fa-edit"></i>Edit Customer</a></li>
                                
                         </ul>
              </li>
              <li><a class='nav-link' [routerLink]="['/menu']"><i class="fa fa-list"></i>Menu Item</a></li>
              <li><a class='nav-link' [routerLink]="['/order']"><i class="fa fa-shopping-cart"></i>Order</a></li>

           </ul>
        </nav>
         <div class='container'>
            <router-outlet></router-outlet>
          </div>    	
          
     
         
        `
})
export class AppComponent {
  pagetitle: string = 'FoodWoodz Restaurant';
  collapsed = true;
}
