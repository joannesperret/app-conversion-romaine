import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraductionRomainePageRoutingModule } from './traduction-romaine-routing.module';

import { TraductionRomainePage } from './traduction-romaine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraductionRomainePageRoutingModule
  ],
  declarations: [TraductionRomainePage]
})
export class TraductionRomainePageModule {}
