import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {HeroesListComponent} from './component/heroes-list/heroes-list.component';
import {HeroCardComponent} from "./component/hero-card/hero-card.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{path: 'list', component: HeroesListComponent},
      {path: 'card', component: HeroCardComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
