import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MAIN = '/characters';
const routes: Routes = [
  { path: '', redirectTo: MAIN, pathMatch: 'full' },
  {
    path: '',
    loadChildren: ()=>import('./feature/feature.module').then(i => i.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
