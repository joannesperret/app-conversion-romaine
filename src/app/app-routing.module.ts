import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'conversion-romaine',
    loadChildren: () => import('./pages/conversion-romaine/conversion-romaine.module').then( m => m.ConversionRomainePageModule)
  },
  {
    path: 'traduction-romaine',
    loadChildren: () => import('./pages/traduction-romaine/traduction-romaine.module').then( m => m.TraductionRomainePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
