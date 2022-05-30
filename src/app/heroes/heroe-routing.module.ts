import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "list",
        component: ListadoComponent
      },
      {
        path: "add",
        component: AddComponent
      },
      {
        path: "edit/:id",
        component: AddComponent
      },
      {
        path: "search",
        component: SearchComponent
      },
      {
        path: ":id",
        component: HeroeComponent
      },
      {
        path: "**",
        redirectTo: "login"
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class HeroeRoutingModule { }
