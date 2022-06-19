import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';
import { SearchPage } from './pages/search/search.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'search/:id', component: SearchPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
