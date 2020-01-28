import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { IndianmenuComponent } from './menu/indianmenu/indianmenu.component';
import { ChineseComponent } from './menu/chinese/chinese.component';
import { StarterComponent } from './menu/starter/starter.component';
import { RiceComponent } from './menu/indianmenu/rice/rice.component';
import { DalComponent } from './menu/indianmenu/dal/dal.component';
import { RotiComponent } from './menu/indianmenu/roti/roti.component';
import { NoodlesComponent } from './menu/chinese/noodles/noodles.component';
import { ManchoorianComponent } from './menu/chinese/manchoorian/manchoorian.component';
import { ChinesebhelComponent } from './menu/chinese/chinesebhel/chinesebhel.component';
import { SpringroalComponent } from './menu/starter/springroal/springroal.component';
import { CheeseballComponent } from './menu/starter/cheeseball/cheeseball.component';
import { BreadkachoriComponent } from './menu/starter/breadkachori/breadkachori.component';


const routes: Routes =
  [
    {
      path: 'menu', component: MenuComponent, children: [
        {
          path: 'indian',
          component: IndianmenuComponent,
          children: [
            {
              path: 'rice',
              component: RiceComponent
            },
            {
              path: 'dal',
              component: DalComponent
            },
            {
              path: 'roti',
              component: RotiComponent
            }
          ]
        },
        {
          path: 'chinese',
          component: ChineseComponent,
          children: [
            {
              path: 'noodles',
              component: NoodlesComponent
            },
            {
              path: 'manchoorian',
              component: ManchoorianComponent
            },
            {
              path: 'chinesebhel',
              component: ChinesebhelComponent
            }
          ]
        },
        {
          path: 'starter',
          component: StarterComponent,
          children: [
            {
              path: 'springroal',
              component: SpringroalComponent
            },
            {
              path: 'cheeseball',
              component: CheeseballComponent
            },
            {
              path: 'breadkachori',
              component: BreadkachoriComponent
            }
          ]
        }
      ]
    },
  ];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
