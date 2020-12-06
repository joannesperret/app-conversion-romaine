import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConversionRomainePage } from './conversion-romaine.page';

const routes: Routes = [
  {
    path: '',
    component: ConversionRomainePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversionRomainePageRoutingModule {}
