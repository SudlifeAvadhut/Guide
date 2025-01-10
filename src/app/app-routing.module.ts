import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserNotSupportComponent } from './Global/browser-not-support/browser-not-support.component';
import { PageNotFoundComponent } from './Global/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PageNotFoundComponent },
  {
    path: 'DashBoard', loadChildren: () => import('./DashBoard/dashboard/dashboard-routing.module')
      .then(m => m.DashboardRoutingModule)
  },
  { path: 'PageNotFound', component: PageNotFoundComponent },
  { path: 'BrowserNotSupport', component: BrowserNotSupportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
